#  Olas Joyería - E-commerce de Joyas

Un e-commerce moderno y profesional para la venta de joyas, construido con Next.js 14, TypeScript, Tailwind CSS y MongoDB. Incluye autenticación segura, carrito de compras, integración con PayPal y panel de administración.

##  Características Principales

### Para Clientes
- ✅ **Catálogo de Productos**: Visualización elegante de joyas con descripciones, imágenes y precios
- ✅ **Carrito de Compras**: Agregar/quitar productos con persistencia en base de datos
- ✅ **Favoritos**: Guardar productos favoritos para comprar después
- ✅ **Autenticación**: Login y registro con email/contraseña y Google OAuth
- ✅ **Checkout**: Proceso de compra seguro con integración PayPal
- ✅ **Newsletter**: Suscripción a newsletter para promociones
- ✅ **Búsqueda y Filtrado**: Filtrar productos por categoría (próximamente)

### Para Administradores
-  **Panel de Control**: Dashboard con métricas y estadísticas
-  **Gestión de Productos**: CRUD completo (crear, leer, actualizar, eliminar)
-  **Gestión de Usuarios**: Ver y administrar usuarios del sistema
-  **Gestión de Pedidos**: Ver, actualizar estado y rastrear órdenes
-  **Reportes de Ganancias**: Visualizar ingresos totales y por período
-  **Carga de Imágenes**: Subir imágenes a Cloudinary

### Seguridad y Calidad
-  **Autenticación NextAuth.js**: JWT con roles (admin/usuario)
-  **Control de Acceso**: Rutas protegidas por middleware
-  **Contraseñas Hasheadas**: Bcrypt para seguridad
-  **Validación con Zod**: Validación de esquemas en cliente y servidor
-  **Diseño Responsivo**: Mobile-first con Tailwind CSS
-  **SEO Friendly**: Next.js App Router con SSR

---

## 🏗️ Estructura del Proyecto

```
Olas-joyeria/
├── src/
│   ├── app/                          # App Router de Next.js
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/
│   │   │   │   ├── [..nextauth]/    # Configuración NextAuth
│   │   │   │   └── register/        # Registro de usuarios
│   │   │   ├── newsletter/          # Suscripción newsletter
│   │   │   ├── upload/              # Subida a Cloudinary
│   │   │   └── paypal/              # Integración PayPal
│   │   │       ├── create-order/
│   │   │       └── capture-order/
│   │   ├── admin/                    # Panel administrador
│   │   │   ├── page.tsx             # Dashboard principal
│   │   │   ├── layout.tsx           # Layout admin
│   │   │   └── ganancias/           # Reporte de ganancias
│   │   ├── auth/                     # Página de login/registro
│   │   ├── carrito/                  # Página del carrito
│   │   ├── favoritos/                # Página de favoritos
│   │   ├── checkout/                 # Proceso de checkout
│   │   │   ├── success/
│   │   │   └── cancel/
│   │   ├── page.tsx                 # Home
│   │   ├── layout.tsx               # Layout principal
│   │   ├── globals.css              # Estilos globales
│   │   └── not-found.tsx            # Página 404
│   │
│   ├── components/                   # Componentes React reutilizables
│   │   ├── Header.tsx               # Encabezado
│   │   ├── Footer.tsx               # Pie de página
│   │   ├── Hero.tsx                 # Sección hero
│   │  
│   │
│   ├── hooks/                        # React Hooks personalizados
│   │   ├── use-cart-favorites.ts    # Hook para carrito y favoritos
│   │   ├── use-mobile.tsx           # Hook para detectar mobile
│   │   └── use-toast.ts             # Hook para notificaciones
│   │
│   ├── lib/                          # Utilidades y configuración
│   │   ├── mongodb.ts               # Conexión MongoDB
│   │   ├── constants.ts             # Constantes de la app
│   │   └── utils.ts                 # Funciones utilitarias
│   │
│   ├── integrations/                 # Integraciones externas
│   ├── types/                        # Tipos TypeScript
│   │   └── next-auth.d.ts           # Extensión de tipos NextAuth
│   ├── middleware.ts                 # Middleware de Next.js
│   └── pages/                        # Páginas adicionales
│
├── public/                           # Archivos estáticos
│   └── img/                         # Imágenes

```

---

##  Stack Tecnológico

### Frontend
- **Next.js 14.2** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes UI accesibles
- **React Hook Form** - Gestión de formularios

### Backend
- **Next.js API Routes** - Endpoints REST
- **MongoDB** - Base de datos NoSQL
- **Bcrypt** - Hashing de contraseñas
- **Nodemailer** - Envío de emails
- **Cloudinary** - Almacenamiento de imágenes

### Autenticación y Pagos
- **NextAuth.js 4** - Autenticación JWT
- **Google OAuth** - Login con Google
- **PayPal API** - Procesamiento de pagos

### Herramientas
- **Git** - Control de versiones
- **ESLint** - Linting de código

---

## 📋 Requisitos Previos

- **Node.js** 18.17+ 
- **npm** o **yarn**
- **MongoDB** (account en MongoDB Atlas)
- **Cuenta Cloudinary** (para subida de imágenes)
- **Cuenta Google Cloud** (para OAuth)
- **Cuenta PayPal** (para pagos)

---

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/MayerlyZ/Olas-joyeria.git
cd Olas-joyeria
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

```env
# NextAuth
NEXTAUTH_SECRET=tu_secreto_generado_aqui
NEXTAUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/Ecommerce

# Gmail (para envío de emails)
GMAIL_USER=tu_email@gmail.com
GMAIL_API_KEY=tu_app_password

# Cloudinary (para subida de imágenes)
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=tu_preset

# PayPal
PAYPAL_CLIENT_ID=tu_client_id
PAYPAL_SECRET=tu_secret
NEXT_PUBLIC_PAYPAL_CLIENT_ID=tu_client_id

# Newsletter
NEXT_PUBLIC_SEND_EMAIL_ENABLED=true

# Google OAuth (opcional)
GOOGLE_CLIENT_ID=tu_client_id
GOOGLE_CLIENT_SECRET=tu_client_secret
```

#### Generar NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

### 4. Inicializar MongoDB

1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster
3. Obtén la connection string y agrégala a `.env.local`

Estructura de colecciones en MongoDB:
- `users` - Usuarios del sistema
- `products` - Catálogo de productos
- `orders` - Órdenes de compra
- `carts` - Carritos de compra
- `favorites` - Productos favoritos
- `newsletter_subscribers` - Suscriptores newsletter

### 5. Configurar Cloudinary

1. Crea cuenta en [Cloudinary](https://cloudinary.com/)
2. Ve a Dashboard y obtén:
   - Cloud Name
   - API Key
   - API Secret
3. Crea un upload preset en Settings → Upload

### 6. Configurar PayPal

1. Ve a [PayPal Developer](https://developer.paypal.com/)
2. Crea una aplicación
3. Obtén las credenciales de Sandbox
4. Agrega a `.env.local`

### 7. Ejecutar en Desarrollo

```bash
npm run dev
```

La app estará disponible en: http://localhost:3000

---

##  Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start

# Linting
npm run lint
```

---

##  Autenticación y Autorización

### Roles de Usuario

- **admin**: Acceso completo al panel de administración
- **user**: Acceso a compras y perfil

### Protección de Rutas

Las rutas admin están protegidas por middleware:

```typescript
// src/middleware.ts
matcher: ['/admin/:path*']  // Solo admins pueden acceder
```

### Estrategia JWT

- Tokens firmados y cifrados
- Roles incluidos en el token
- Expiración configurable


---

##  Flujo de Compra

```
1. Cliente navega el catálogo
   ↓
2. Agrega productos al carrito
   ↓
3. Va a checkout
   ↓
4. Inicia sesión (si no lo está)
   ↓
5. Elige método de pago (PayPal)
   ↓
6. Realiza el pago
   ↓
7. Se crea la orden en la BD
   ↓
8. Redirección a página de éxito
```

---

## Despliegue

### Opción 1: Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js:

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com/)
3. Conecta tu repositorio
4. Agrega las variables de entorno en Settings
5. Deploy automático en cada push




```bash




