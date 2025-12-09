"use client"; 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation"; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: isLogin ? "Inicio de sesión (Placeholder)" : "Registro (Placeholder)",
        description: isLogin 
          ? "La lógica de inicio de sesión de MongoDB/Next.js irá aquí."
          : "La lógica de creación de cuenta de MongoDB/Next.js irá aquí.",
      });
      
      if (isLogin) {
        router.push("/");
      }
      
    }, 1500);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-champagne to-background flex items-center justify-center p-4">
    </div>
  );
};

export default Auth;