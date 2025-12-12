"use client";

import { ReactNode } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && status === "unauthenticated") {
      router.push("/auth");
    }
    if (mounted && session && session.user?.role !== "admin") {
      router.push("/");
    }
  }, [status, router, mounted, session]);

  if (!mounted) {
    return null;
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  // Verificar que sea admin
  if (session?.user?.role !== "admin") {
    return null;
  }

  return (
    <div className="flex h-screen bg-white text-gray-900">
      <AdminSidebar />
      <div className="flex-1 ml-64 overflow-auto">
        <div className="p-8">
          {session?.user?.email && (
            <div className="mb-6 text-sm text-gray-600">
              Conectado como: <span className="font-semibold">{session.user.email}</span>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
