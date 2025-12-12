"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, TrendingUp } from "lucide-react";

interface EarningsData {
  totalEarnings: number;
  totalOrders: number;
  earningsByProduct: Array<{
    _id: string;
    productName: string;
    totalSales: number;
    quantity: number;
  }>;
  dailyEarnings: Array<{
    _id: string;
    total: number;
  }>;
}

export default function EarningsPage() {
  const [earnings, setEarnings] = useState<EarningsData>({
    totalEarnings: 0,
    totalOrders: 0,
    earningsByProduct: [],
    dailyEarnings: [],
  });
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("all");

  useEffect(() => {
    fetchEarnings();
  }, [period]);

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/earnings?period=${period}`);
      const data = await res.json();
      setEarnings(data);
    } catch (error) {
      console.error("Error fetching earnings:", error);
    } finally {
      setLoading(false);
    }
  };

  const avgEarningsPerOrder =
    earnings.totalOrders > 0
      ? (earnings.totalEarnings / earnings.totalOrders).toFixed(2)
      : "0";

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Ganancias</h1>
        <div className="flex gap-2">
          <Button
            variant={period === "day" ? "default" : "outline"}
            onClick={() => setPeriod("day")}
            className={period === "day" ? "" : "text-gray-900 border-gray-400 hover:bg-[#ddc9b5]"}
          >
            Hoy
          </Button>
          <Button
            variant={period === "week" ? "default" : "outline"}
            onClick={() => setPeriod("week")}
            className={period === "week" ? "" : "text-gray-900 border-gray-400 hover:bg-[#ddc9b5]"}
          >
            Esta Semana
          </Button>
          <Button
            variant={period === "month" ? "default" : "outline"}
            onClick={() => setPeriod("month")}
            className={period === "month" ? "" : "text-gray-900 border-gray-400 hover:bg-[#ddc9b5]"}
          >
            Este Mes
          </Button>
          <Button
            variant={period === "all" ? "default" : "outline"}
            onClick={() => setPeriod("all")}
            className={period === "all" ? "" : "text-gray-900 border-gray-400 hover:bg-[#ddc9b5]"}
          >
            Todo
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Ganancias Totales</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  ${earnings.totalEarnings.toFixed(2)}
                </div>
                <p className="text-xs text-gray-700 mt-1">
                  En {period === "all" ? "total" : `los últimos ${period}`}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Pedidos</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{earnings.totalOrders}</div>
                <p className="text-xs text-gray-700 mt-1">Pedidos procesados</p>
              </CardContent>
            </Card>

            <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Promedio por Pedido</CardTitle>
                <DollarSign className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">${avgEarningsPerOrder}</div>
                <p className="text-xs text-gray-700 mt-1">Ingreso promedio</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
              <CardHeader>
                <CardTitle className="text-gray-900">Ganancias por Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-900">Producto</TableHead>
                      <TableHead className="text-gray-900">Cantidad</TableHead>
                      <TableHead className="text-gray-900">Ganancias</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {earnings.earningsByProduct.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center py-4 text-gray-900">
                          Sin datos
                        </TableCell>
                      </TableRow>
                    ) : (
                      earnings.earningsByProduct.map((product) => (
                        <TableRow key={product._id}>
                          <TableCell className="font-medium text-gray-900">
                            {product.productName}
                          </TableCell>
                          <TableCell className="text-gray-900">{product.quantity}</TableCell>
                          <TableCell className="font-semibold text-gray-900">
                            ${product.totalSales.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
              <CardHeader>
                <CardTitle className="text-gray-900">Últimas Transacciones</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-900">Fecha</TableHead>
                      <TableHead className="text-gray-900">Monto</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {earnings.dailyEarnings.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={2} className="text-center py-4 text-gray-900">
                          Sin datos
                        </TableCell>
                      </TableRow>
                    ) : (
                      earnings.dailyEarnings.map((earning, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-sm text-gray-900">{earning._id}</TableCell>
                          <TableCell className="font-semibold text-gray-900">
                            ${earning.total.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
