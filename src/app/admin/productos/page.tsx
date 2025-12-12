"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  stock: string;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, reset, watch, setValue, control } = useForm<ProductFormData>();
  const imageField = watch("image");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (formData: ProductFormData) => {
    try {
      console.log("Form data being submitted:", formData);
      
      // Validar que todos los campos requeridos estén presentes
      if (!formData.image) {
        toast.error("Por favor selecciona y sube una imagen");
        return;
      }

      if (!formData.name || !formData.price) {
        toast.error("Por favor completa todos los campos requeridos");
        return;
      }

      const method = editingId ? "PUT" : "POST";
      const body = editingId
        ? { _id: editingId, ...formData }
        : formData;

      const res = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const responseData = await res.json();
      console.log("API Response:", responseData);

      if (res.ok) {
        toast.success(editingId ? "Producto actualizado" : "Producto creado");
        setOpenDialog(false);
        reset();
        setEditingId(null);
        setImagePreview(null);
        fetchProducts();
      } else {
        const errorMessage = responseData.message || responseData.error || "Error al guardar el producto";
        console.error("API Error details:", errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error al guardar el producto");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      // Mostrar preview local
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Subir a Cloudinary
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Upload response:", data);
      
      if (res.ok && data.url) {
        setValue("image", data.url);
        console.log("Image set to:", data.url);
        toast.success("Imagen subida correctamente");
      } else {
        toast.error(data.error || "Error al subir la imagen");
        setImagePreview(null);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error al subir la imagen");
      setImagePreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (product: Product) => {
    // Primero resetear el formulario con los datos del producto
    reset({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      image: product.image,
      category: product.category,
    });
    
    // Luego actualizar el estado
    setEditingId(product._id);
    setImagePreview(product.image);
    
    // Finalmente, asegurar que el Select tiene el valor correcto
    setTimeout(() => {
      setValue("category", product.category);
    }, 0);
    
    // Abrir el diálogo
    setOpenDialog(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      try {
        const res = await fetch("/api/products", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: id }),
        });

        if (res.ok) {
          fetchProducts();
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    reset();
    setEditingId(null);
    setImagePreview(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Agregar Producto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Editar Producto" : "Nuevo Producto"}
              </DialogTitle>
              <DialogDescription>
                Completa los detalles del producto
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900">Nombre</label>
                <Input
                  placeholder="Nombre del producto"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Descripción</label>
                <Textarea
                  placeholder="Descripción del producto"
                  {...register("description")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-900">Precio</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    {...register("price", { required: true })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900">Stock</label>
                  <Input
                    type="number"
                    placeholder="0"
                    {...register("stock", { required: true })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Categoría</label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "La categoría es requerida" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRODUCT_CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Imagen del Producto</label>
                <div className="space-y-3">
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <input
                      type="hidden"
                      {...register("image", { required: "La imagen es requerida" })}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-accent" />
                      <div>
                        <p className="text-sm font-medium">
                          {uploading ? "Subiendo..." : "Haz clic o arrastra una imagen"}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF (máximo 10MB)</p>
                      </div>
                    </div>
                  </div>
                  {imagePreview && (
                    <div className="relative w-full h-40">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  {!imageField && !imagePreview && (
                    <p className="text-xs text-red-500">La imagen es requerida</p>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1"
                >
                  {editingId ? "Actualizar" : "Crear"} Producto
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleCloseDialog}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <Card className="bg-[#E8D9C4] border-[#E8D9C4]">
          <CardHeader>
            <CardTitle className="text-gray-900">Lista de Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-300">
                  <TableHead className="text-gray-700 font-semibold">Nombre</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Categoría</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Precio</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Stock</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id} className="border-gray-300 hover:bg-[#ddc9b5]">
                    <TableCell className="text-gray-900">{product.name}</TableCell>
                    <TableCell className="text-gray-700">{product.category || "—"}</TableCell>
                    <TableCell className="text-gray-900">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-gray-900">{product.stock}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleEdit(product)}
                          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(product._id)}
                          className="rounded-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
