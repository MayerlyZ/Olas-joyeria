# ✅ Configuración de Cloudinary - LISTA

## Credenciales Configuradas

```env
CLOUDINARY_CLOUD_NAME=dri1xkg3w
CLOUDINARY_API_KEY=452599861121782
CLOUDINARY_API_SECRET=7dhKjAG1uQO2ClRQ0ofx0nPdDJY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dri1xkg3w
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=olas_joyeria
```

## Upload Preset Creado

✅ **Nombre:** `olas_joyeria`
✅ **Tipo:** Unsigned (sin firma)
✅ **Estado:** Activo

## Cómo Probar

### Opción 1: Desde el Admin

1. Ve a `http://localhost:3000/admin/productos` (o el puerto donde corre tu app)
2. Haz clic en "Agregar Producto"
3. Rellena los datos:
   - Nombre: "Collar Test"
   - Descripción: "Test"
   - Precio: "50"
   - Stock: "10"
   - Categoría: "Collares"
4. **En la sección "Imagen del Producto":**
   - Haz clic o arrastra una imagen
   - Espera a que diga "Imagen subida correctamente"
   - Deberías ver un preview de la imagen
5. Haz clic en "Crear Producto"

### Opción 2: Test Manual

```bash
# 1. Crear un archivo de prueba
dd if=/dev/zero bs=1024 count=100 of=/tmp/test.jpg

# 2. Subir a Cloudinary
curl -X POST https://api.cloudinary.com/v1_1/dri1xkg3w/image/upload \
  -F "file=@/tmp/test.jpg" \
  -F "upload_preset=olas_joyeria"
```

## Qué Esperar

✅ Al seleccionar imagen: Preview inmediato en gris
✅ Durante carga: Botón muestra "Subiendo..."
✅ Después de cargar: Toast verde dice "Imagen subida correctamente"
✅ El botón "Crear Producto" se activa
✅ Al crear: Imagen se guarda en MongoDB con URL de Cloudinary

## Si Sigue Sin Funcionar

1. **Abre las Developer Tools** (F12)
2. **Ve a la pestaña Network**
3. **Intenta cargar una imagen**
4. **Busca la solicitud a `/api/upload`**
5. **Haz clic y ve la Response**
6. **Copia el error y comparte conmigo**

También puedes abrir **Console** (F12) y ver si hay mensajes de error rojo.

## Pasos Completados

✅ Cloud Name actualizado: `dri1xkg3w`
✅ API Key actualizado: `452599861121782`
✅ API Secret actualizado: `7dhKjAG1uQO2ClRQ0ofx0nPdDJY`
✅ Upload Preset creado: `olas_joyeria`
✅ Variables NEXT_PUBLIC_ configuradas
✅ Servidor reiniciado

**Ahora debería funcionar. Intenta cargar una imagen y cuéntame qué pasa.**
