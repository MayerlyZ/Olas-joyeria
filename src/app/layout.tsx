// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import React from "react";

export const metadata: Metadata = {
  title: "OLAS Joyería | Fragmentos de cielo para tu piel",
  description: "Descubre joyería artesanal única. Collares, aretes, anillos y pulseras diseñados con elegancia y pasión. Envío gratis y garantía de por vida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}