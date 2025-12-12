"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode, useMemo } from "react";

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Determine if we should show Header/Footer
  const shouldShowLayout = useMemo(() => {
    if (!pathname) return true;
    
    // Hide Header/Footer for admin routes
    if (pathname.startsWith("/admin")) {
      return false;
    }
    
    // Hide Header/Footer for auth routes
    if (pathname.startsWith("/auth")) {
      return false;
    }
    
    return true;
  }, [pathname]);

  if (!shouldShowLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
