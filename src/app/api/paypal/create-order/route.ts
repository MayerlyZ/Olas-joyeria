import { NextRequest, NextResponse } from "next/server";

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

async function createPayPalOrder(items: any[], total: number, accessToken: string) {
  const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: (total / 4200).toFixed(2), // Conversión aproximada de COP a USD
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: (total / 4200).toFixed(2),
              },
            },
          },
          items: items.map((item) => ({
            name: item.name,
            quantity: item.quantity.toString(),
            unit_amount: {
              currency_code: "USD",
              value: (item.price / 4200).toFixed(2),
            },
          })),
        },
      ],
      application_context: {
        brand_name: "Olas Joyería",
        return_url: `${process.env.NEXTAUTH_URL}/checkout/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/checkout/cancel`,
      },
    }),
  });

  return response.json();
}

export async function POST(req: NextRequest) {
  try {
    const { items, total } = await req.json();

    if (!items || !total || total <= 0) {
      return NextResponse.json(
        { error: "Invalid items or total" },
        { status: 400 }
      );
    }

    const accessToken = await getAccessToken();
    const order = await createPayPalOrder(items, total, accessToken);

    if (!order.id) {
      console.error("PayPal order creation failed:", order);
      return NextResponse.json(
        { error: "Failed to create PayPal order" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: order.id }, { status: 201 });
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
