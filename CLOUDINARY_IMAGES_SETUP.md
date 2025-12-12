# Carga de Imágenes a Cloudinary para Productos

## Descripción
El sistema de admin ahora permite cargar imágenes directamente desde archivos locales usando Cloudinary. Las imágenes se suben automáticamente a tu cuenta de Cloudinary y se genera un URL seguro que se guarda con el producto.

## Cambios Implementados

### 1. Nuevo Endpoint API
**Ruta:** `/api/upload`
**Método:** POST
**Funcionalidad:**
- Recibe un archivo de imagen en FormData
- Valida que sea una imagen válida
- Sube la imagen a Cloudinary
- Retorna la URL segura de la imagen

### 2. Formulario de Productos Actualizado
**Cambios en** `src/app/admin/productos/page.tsx`:

#### Antes:
```
📝 Input de texto para URL de imagen manual
```

#### Ahora:
```
📤 Área de carga drag-and-drop
👁️  Preview de imagen en tiempo real
⚡ Carga automática a Cloudinary
📱 Validación de tipo de archivo
✅ Feedback de éxito/error con toast
```

### 3. Nuevas Funcionalidades

**handleImageUpload:**
- Valida el archivo seleccionado
- Muestra preview local mientras se carga
- Sube a Cloudinary via `/api/upload`
- Actualiza el campo `image` con la URL retornada
- Notifica éxito o error

**Validación:**
- Solo acepta archivos de imagen (PNG, JPG, GIF, etc.)
- Requiere seleccionar imagen antes de crear producto
- Máximo 10MB (según descripción en UI)

## Configuración Requerida

### Variables de Entorno (.env)
Asegúrate de tener estas variables configuradas:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=tu_upload_preset
```

### Cómo Obtener estas Credenciales:

1. Inicia sesión en [Cloudinary](https://cloudinary.com/)
2. Ve al Dashboard
3. Copia tu **Cloud Name** de la sección "Account Details"
4. Crea un "Unsigned Upload Preset":
   - Ve a Settings → Upload
   - Haz clic en "Add upload preset"
   - Nombre: `tu_upload_preset`
   - Type: Unsigned
   - Guarda y copia el nombre

## Flujo de Uso en Admin

### Para Crear un Nuevo Producto:

1. **Ir a Admin → Productos**
2. **Haz clic en "Agregar Producto"**
3. **Completa los datos:**
   - Nombre
   - Descripción
   - Precio
   - Stock
   - Categoría
4. **Sube la imagen:**
   - Haz clic en el área de carga o arrastra un archivo
   - Espera a que se suba (verás "Subiendo...")
   - Verás un preview de la imagen
5. **Haz clic en "Crear Producto"**

### Para Editar un Producto:

1. **Ve a la tabla de productos**
2. **Haz clic en el botón Editar (lápiz)**
3. **El preview mostrará la imagen actual**
4. **Puedes cargar una nueva imagen o mantener la actual**
5. **Haz clic en "Actualizar Producto"**

## Manejo de Errores

Si algo falla durante la carga:

| Error | Causa | Solución |
|-------|-------|----------|
| "File must be an image" | Subiste un archivo que no es imagen | Selecciona una imagen (PNG, JPG, GIF, etc.) |
| "Failed to upload image to Cloudinary" | Problema de conexión o credenciales | Verifica CLOUDINARY_CLOUD_NAME y UPLOAD_PRESET |
| "No file provided" | No seleccionaste archivo | Selecciona una imagen |
| Toast de error al crear producto | Falta llenar campos requeridos | Completa todos los campos y sube una imagen |

## Estructura de Respuesta de Upload

```json
{
  "url": "https://res.cloudinary.com/..../image/upload/..../photo.jpg",
  "publicId": "Olas-joyeria/photo_xyz"
}
```

La URL se guarda automáticamente en el campo `image` del producto.

## Beneficios

✅ **Imágenes seguras:** Almacenadas en CDN global de Cloudinary
✅ **URLs permanentes:** No dependen de tu servidor local
✅ **Optimización automática:** Cloudinary optimiza tamaño y formato
✅ **Backup redundante:** Imágenes en la nube, no en tu servidor
✅ **Previsualizaciones:** Ves cómo se ve antes de guardar
✅ **Fácil de usar:** Interfaz intuitiva drag-and-drop

## Próximas Mejoras Opcionales

- [ ] Cortar/redimensionar imágenes antes de subir
- [ ] Soportar múltiples imágenes por producto
- [ ] Galería de imágenes en vista de producto
- [ ] Eliminación de imágenes de Cloudinary al borrar producto
- [ ] Compresión automática según resolución
- [ ] Watermark en imágenes

## Troubleshooting

### Las imágenes no suben:
1. Verifica que CLOUDINARY_CLOUD_NAME esté correcto
2. Verifica que CLOUDINARY_UPLOAD_PRESET sea un preset "Unsigned"
3. Mira la consola del navegador (F12) para ver mensajes de error
4. Mira la consola del servidor para detalles técnicos

### El preview no aparece:
1. Asegúrate de que el archivo es una imagen válida
2. La imagen no debe ser demasiado grande (>10MB)
3. Intenta con otra imagen de prueba

### Producto se crea pero sin imagen:
1. Asegúrate de esperar a que la carga termine
2. Verifica que veas el preview de la imagen
3. Revisa los mensajes de toast de éxito
