import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const PAYPAL_API = "https://api.sandbox.paypal.com"; // Usa sandbox para testing

async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Failed to get PayPal access token");
  }

  const data = await response.json();
  return data.access_token;
}

async function capturePayPalOrder(orderId: string, accessToken: string) {
  const response = await fetch(
    `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}

export async function POST(req: NextRequest) {
  try {
    const { orderId, userId, items, total } = await req.json();

    if (!orderId || !userId || !items || !total) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Obtener token de acceso
    const accessToken = await getAccessToken();

    // Capturar la orden en PayPal
    const result = await capturePayPalOrder(orderId, accessToken);

    if (result.status === "COMPLETED") {
      // Guardar la orden en MongoDB
      const client = await clientPromise;
      const db = client.db("Ecommerce");
      const ordersCollection = db.collection("orders");

      const newOrder = {
        userId,
        items,
        total,
        paymentStatus: "completed",
        paypalOrderId: orderId,
        paypalTransactionId: result.purchase_units?.[0]?.payments?.captures?.[0]?.id,
        status: "pendiente", // Para que el admin revise
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const insertResult = await ordersCollection.insertOne(newOrder);

      return NextResponse.json(
        {
          success: true,
          orderId: insertResult.insertedId,
          paymentId: result.id,
          message: "Order captured and saved successfully",
        },
        { status: 201 }
      );
    } else {
      console.error("PayPal order capture failed:", result);
      return NextResponse.json(
        { success: false, error: "Payment not completed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    return NextResponse.json(
      { error: "Failed to capture PayPal order" },
      { status: 500 }
    );
  }
}
