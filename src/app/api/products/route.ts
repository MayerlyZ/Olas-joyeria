import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const productsCollection = db.collection("products");

    const products = await productsCollection.find({}).toArray();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received product data:", body);

    const { name, description, price, stock, image, category } = body;

    if (!name || !price || stock === undefined) {
      console.log("Validation failed - missing required fields");
      return NextResponse.json(
        { message: "Name, price, and stock are required" },
        { status: 400 }
      );
    }

    console.log("Connecting to MongoDB...");
    const client = await clientPromise;
    const db = client.db();
    const productsCollection = db.collection("products");

    // Generate a unique SKU based on name and timestamp
    const sku = `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

    const product = {
      name,
      description: description || "",
      price: Number(price),
      stock: Number(stock),
      image: image || "",
      category: category || "",
      sku: sku,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log("Inserting product:", product);
    const result = await productsCollection.insertOne(product);
    console.log("Product inserted successfully:", result.insertedId);

    return NextResponse.json(
      { message: "Product created successfully", productId: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product - Full error:", error);
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json(
      { message: "Error creating product", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { _id, name, description, price, stock, image, category } = await req.json();

    if (!_id || !name || !price) {
      return NextResponse.json(
        { message: "ID, name, and price are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const productsCollection = db.collection("products");

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name,
          description: description || "",
          price: Number(price),
          stock: Number(stock),
          image: image || "",
          category: category || "",
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Error updating product" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { _id } = await req.json();

    if (!_id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const productsCollection = db.collection("products");

    const result = await productsCollection.deleteOne({ _id: new ObjectId(_id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Error deleting product" },
      { status: 500 }
    );
  }
}
