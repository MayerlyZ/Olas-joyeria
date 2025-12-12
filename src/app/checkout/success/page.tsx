"use client";

import { CheckCircle, ArrowLeft, Package } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId");

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle size={64} className="mx-auto text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            ¡Compra Realizada!
          </h1>
          <p className="text-gray-600 mb-6">
            Tu pedido ha sido procesado correctamente. Te enviaremos un correo de
            confirmación pronto.
          </p>

          {/* Order Details Card */}
          <div className="bg-white rounded-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4 text-accent">
              <Package size={20} />
              <span className="font-semibold">Detalles del Pedido</span>
            </div>

            {orderId && (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">ID del Pedido</p>
                <p className="text-lg font-mono font-semibold text-gray-900 break-all">
                  {orderId}
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              Puedes consultar el estado de tu pedido en tu cuenta
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">¿Qué sigue?</h3>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>✓ Recibirás un correo de confirmación</li>
              <li>✓ Prepararemos tu pedido</li>
              <li>✓ Te notificaremos cuando sea enviado</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/favoritos">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Ver Mis Pedidos
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <ArrowLeft size={18} />
                Volver a la Tienda
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <p className="text-xs text-gray-500 mt-8">
            ¿Tienes preguntas? Contáctanos a{" "}
            <a href="mailto:info@olasjoyeria.com" className="text-accent hover:underline">
              info@olasjoyeria.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
