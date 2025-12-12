import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const period = searchParams.get("period") || "all"; // all, month, week, day

    const client = await clientPromise;
    const db = client.db();
    const ordersCollection = db.collection("orders");

    let dateFilter = {};

    if (period === "day") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      dateFilter = { createdAt: { $gte: today } };
    } else if (period === "week") {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      dateFilter = { createdAt: { $gte: weekAgo } };
    } else if (period === "month") {
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      dateFilter = { createdAt: { $gte: monthAgo } };
    }

    // Total earnings
    const totalEarningsResult = await ordersCollection
      .aggregate([
        { $match: { ...dateFilter, status: { $in: ["completed", "completed"] } } },
        { $group: { _id: null, total: { $sum: "$total" } } },
      ])
      .toArray();

    const totalEarnings = totalEarningsResult[0]?.total || 0;

    // Total orders
    const totalOrders = await ordersCollection.countDocuments({
      ...dateFilter,
    });

    // Earnings by product
    const earningsByProduct = await ordersCollection
      .aggregate([
        { $match: { ...dateFilter, status: "completed" } },
        { $unwind: "$items" },
        {
          $group: {
            _id: "$items.productId",
            productName: { $first: "$items.productName" },
            totalSales: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
            quantity: { $sum: "$items.quantity" },
          },
        },
        { $sort: { totalSales: -1 } },
      ])
      .toArray();

    // Daily earnings (last 30 days)
    const dailyEarnings = await ordersCollection
      .aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
            },
            status: "completed",
          },
        },
        {
          $group: {
            _id: {
              $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
            },
            total: { $sum: "$total" },
          },
        },
        { $sort: { _id: 1 } },
      ])
      .toArray();

    return NextResponse.json(
      {
        totalEarnings,
        totalOrders,
        earningsByProduct,
        dailyEarnings,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching earnings:", error);
    return NextResponse.json(
      { message: "Error fetching earnings" },
      { status: 500 }
    );
  }
}
