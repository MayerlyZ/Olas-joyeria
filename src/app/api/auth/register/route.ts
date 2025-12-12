import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Normalize input
    const emailNormalized = email?.toLowerCase().trim();

    if (!emailNormalized || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Ecommerce");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email: emailNormalized });

    if (existingUser) {
      console.log("Usuario ya existe:", emailNormalized);
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Creando usuario:", emailNormalized);

    const result = await usersCollection.insertOne({
      email: emailNormalized,
      password: hashedPassword,
      role: "user", // Por defecto todos los nuevos usuarios son "user"
      createdAt: new Date(),
    });

    console.log("Usuario creado exitosamente:", emailNormalized);

    return NextResponse.json(
      {
        message: "User created successfully.",
        userId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
