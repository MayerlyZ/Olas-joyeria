"use client";

import { XCircle, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-6">
            <XCircle size={64} className="mx-auto text-red-500" />
          </div>

          {/* Cancel Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Pago Cancelado
          </h1>
          <p className="text-gray-600 mb-6">
            Cancelaste el proceso de pago. Tu carrito ha sido guardado, puedes
            continuar comprando cuando estés listo.
          </p>

          {/* Info Card */}
          <div className="bg-white rounded-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4 text-accent">
              <ShoppingBag size={20} />
              <span className="font-semibold">Tu Carrito está Seguro</span>
            </div>
            <p className="text-sm text-gray-600">
              Los productos en tu carrito se encuentran guardados y listos para
              completar tu compra en cualquier momento.
            </p>
          </div>

          {/* Why Cancel */}
          <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Si tienes problemas con el pago, contáctanos y te ayudaremos.
            </p>
            <a
              href="mailto:info@olasjoyeria.com"
              className="text-accent hover:underline text-sm font-medium"
            >
              info@olasjoyeria.com
            </a>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/carrito">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Volver al Carrito
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <ArrowLeft size={18} />
                Continuar Comprando
              </Button>
            </Link>
          </div>

          {/* Alternative Payment */}
          <p className="text-sm text-gray-600 mt-8">
            <span className="font-medium">Alternativas:</span> Puedes intentar
            nuevamente con otro método de pago o esperar a que habilites tu cuenta.
          </p>
        </div>
      </div>
    </div>
  );
}
