import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface PayPalButtonProps {
  items: CartItem[];
  total: number;
  onSuccess?: (orderId: string) => void;
}

export default function PayPalButton({
  items,
  total,
  onSuccess,
}: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!paypalRef.current || !session?.user?.email) return;

    // Cargar el script de PayPal
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: async (data, actions) => {
              try {
                const response = await fetch("/api/paypal/create-order", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    items: items,
                    total: total,
                  }),
                });

                const order = await response.json();

                if (order.id) {
                  return order.id;
                } else {
                  toast.error("Error al crear la orden");
                  throw new Error("Error creating order");
                }
              } catch (error) {
                console.error("Error creating order:", error);
                toast.error("Error al crear la orden");
                throw error;
              }
            },
            onApprove: async (data, actions) => {
              try {
                // Obtener el usuario
                const userResponse = await fetch("/api/users", {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                });

                const users = await userResponse.json();
                const user = users.find(
                  (u: any) => u.email === session?.user?.email
                );

                const response = await fetch("/api/paypal/capture-order", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    orderId: data.orderID,
                    userId: user?._id || session?.user?.email,
                    items: items,
                    total: total,
                  }),
                });

                const order = await response.json();

                if (order.success) {
                  toast.success("¡Pago realizado exitosamente!");
                  // Limpiar el carrito
                  localStorage.removeItem("cart");
                  // Redirigir a página de éxito
                  setTimeout(() => {
                    if (onSuccess) {
                      onSuccess(data.orderID);
                    } else {
                      router.push(`/checkout/success?orderId=${order.orderId}`);
                    }
                  }, 1500);
                } else {
                  toast.error("Error al procesar el pago");
                }
              } catch (error) {
                console.error("Error capturing order:", error);
                toast.error("Error al procesar el pago");
              }
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              toast.error("Error al procesar el pago");
            },
            onCancel: () => {
              toast.info("Pago cancelado");
            },
          })
          .render(paypalRef.current);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [items, total, onSuccess, session, router]);

  return <div ref={paypalRef} className="w-full"></div>;
}

declare global {
  interface Window {
    paypal?: any;
  }
}
