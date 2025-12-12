import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const ordersCollection = db.collection("orders");

    const orders = await ordersCollection
      .aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
        { $sort: { createdAt: -1 } },
      ])
      .toArray();

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Error fetching orders" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, items, total, status } = await req.json();

    if (!userId || !items || !total) {
      return NextResponse.json(
        { message: "UserId, items, and total are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const ordersCollection = db.collection("orders");

    const order = {
      userId: new ObjectId(userId),
      items,
      total: Number(total),
      status: status || "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await ordersCollection.insertOne(order);

    return NextResponse.json(
      { message: "Order created successfully", orderId: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: "Error creating order" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { _id, status } = await req.json();

    if (!_id || !status) {
      return NextResponse.json(
        { message: "ID and status are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const ordersCollection = db.collection("orders");

    const result = await ordersCollection.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { status, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Order updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { message: "Error updating order" },
      { status: 500 }
    );
  }
}
