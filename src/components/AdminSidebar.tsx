import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Package, Users, ShoppingCart, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: BarChart3,
    },
    {
      name: "Productos",
      href: "/admin/productos",
      icon: Package,
    },
    {
      name: "Usuarios",
      href: "/admin/usuarios",
      icon: Users,
    },
    {
      name: "Pedidos",
      href: "/admin/pedidos",
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="w-64 bg-primary text-white h-screen fixed left-0 top-0 p-6 overflow-y-auto flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-white">Olas Admin</h1>
        <p className="text-sm text-primary-foreground/70 mt-2">Panel de Administración</p>
      </div>

      <nav className="space-y-2 flex-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-accent text-white shadow-lg font-semibold"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-primary-foreground/20 pt-4">
        <button
          onClick={async () => {
            await signOut({ redirect: false });
            window.location.href = "/";
          }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-white transition-all duration-200 w-full"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
