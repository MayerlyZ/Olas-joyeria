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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface Order {
  _id: string;
  userId: string;
  user?: {
    email: string;
    name?: string;
  };
  items: Array<{
    productName: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  createdAt: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-orange-100 text-orange-900",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  processing: "En proceso",
  completed: "Completado",
  cancelled: "Cancelado",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: orderId,
          status: newStatus,
        }),
      });

      if (res.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "—";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Pedidos</h1>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
          <CardHeader>
            <CardTitle className="text-gray-900">
              Total: {orders.length} pedido{orders.length !== 1 ? "s" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-900">ID</TableHead>
                    <TableHead className="text-gray-900">Cliente</TableHead>
                    <TableHead className="text-gray-900">Productos</TableHead>
                    <TableHead className="text-gray-900">Total</TableHead>
                    <TableHead className="text-gray-900">Estado</TableHead>
                    <TableHead className="text-gray-900">Fecha</TableHead>
                    <TableHead className="text-gray-900">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-900">
                        No hay pedidos registrados
                      </TableCell>
                    </TableRow>
                  ) : (
                    orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell className="font-mono text-sm text-gray-900">
                          {order._id.slice(-8)}
                        </TableCell>
                        <TableCell className="text-gray-900">
                          <div>
                            <div className="font-medium text-gray-900">{order.user?.name || "—"}</div>
                            <div className="text-sm text-gray-700">{order.user?.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-900">
                          <div className="text-sm">
                            {order.items.length} producto{order.items.length !== 1 ? "s" : ""}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold text-gray-900">
                          ${(order.total || 0).toFixed(2)}
                        </TableCell>
                        <TableCell className="text-gray-900">
                          <Select
                            defaultValue={order.status}
                            onValueChange={(value) =>
                              handleStatusChange(order._id, value)
                            }
                          >
                            <SelectTrigger className="w-32 text-gray-900 bg-white border border-gray-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending" className="bg-white text-gray-900">Pendiente</SelectItem>
                              <SelectItem value="processing" className="bg-white text-gray-900">En proceso</SelectItem>
                              <SelectItem value="completed" className="bg-white text-gray-900">Completado</SelectItem>
                              <SelectItem value="cancelled" className="bg-white text-gray-900">Cancelado</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-sm text-gray-900">
                          {formatDate(order.createdAt)}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-900 border-gray-400 hover:bg-[#ddc9b5] bg-white"
                            onClick={() => {
                              setSelectedOrder(order);
                              setOpenDetails(true);
                            }}
                          >
                            Ver detalles
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Modal de Detalles del Pedido */}
      <Dialog open={openDetails} onOpenChange={setOpenDetails}>
        <DialogContent className="max-w-2xl bg-white border-gray-300">
          <DialogHeader>
            <DialogTitle className="text-gray-900 text-2xl">
              Detalles del Pedido #{selectedOrder?._id.slice(-8)}
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Cliente */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cliente</h3>
                <p className="text-gray-800"><span className="font-medium">Nombre:</span> {selectedOrder.user?.name || "—"}</p>
                <p className="text-gray-800"><span className="font-medium">Email:</span> {selectedOrder.user?.email}</p>
              </div>

              {/* Productos */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Productos</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div>
                        <p className="text-gray-900 font-medium">{item.productName}</p>
                        <p className="text-gray-600 text-sm">Cantidad: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-900 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} c/u</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-gray-900">Total:</p>
                  <p className="text-2xl font-bold text-primary">
                    ${(
                      selectedOrder.total || 
                      selectedOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
                    ).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Estado y Fecha */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Estado</p>
                  <Badge className="mt-1">{statusLabels[selectedOrder.status]}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Fecha</p>
                  <p className="text-gray-900 font-medium">{formatDate(selectedOrder.createdAt)}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
