# Cómo Hacer Admin a un Usuario

## Para MongoDB Atlas o Local

Si tienes acceso a MongoDB, puedes ejecutar estos comandos para convertir un usuario a admin:

### Opción 1: Via Mongosh (recomendado)

```javascript
// Conectar a tu instancia MongoDB
// En MongoDB Atlas: copiar connection string y reemplazar <password> y <db>
// En MongoDB Local: mongodb://localhost:27017/Ecommerce

use Ecommerce

// Convertir usuario a admin
db.users.updateOne(
  { email: "admin@ejemplo.com" },
  { $set: { role: "admin" } }
)

// Verificar que se actualizó
db.users.findOne({ email: "admin@ejemplo.com" })
```

### Opción 2: Crear un nuevo usuario admin desde cero

```javascript
use Ecommerce

// Primero, crea la contraseña hasheada con bcrypt
// Por ejemplo, para "Password123":
// Hash: $2b$10$qfJVJ2z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3

db.users.insertOne({
  email: "admin@ejemplo.com",
  password: "$2b$10$qfJVJ2z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3",
  role: "admin",
  createdAt: new Date()
})
```

## Para Generar un Hash Bcrypt

Si necesitas crear un hash bcrypt para una contraseña:

### Usando Node.js en la Terminal

```bash
node -e "require('bcrypt').hash('tuContraseña', 10, (err, hash) => console.log(hash))"
```

### Resultado esperado:
```
$2b$10$qfJVJ2z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3
```

## Verificar Permisos de Admin

Después de actualizar, intenta:

1. Iniciar sesión en `/auth` con esas credenciales
2. Deberías ver un icono de usuario con acceso al Dashboard
3. El Header mostrará links a: Dashboard, Productos, Usuarios, Pedidos, Ganancias

## Estructura de Usuario

Después de los cambios, los usuarios tienen esta estructura:

```json
{
  "_id": ObjectId("..."),
  "email": "admin@ejemplo.com",
  "password": "$2b$10$...", // bcrypt hash
  "role": "admin",  // o "user"
  "createdAt": ISODate("2025-12-12T...")
}
```

## Rol por Defecto

- **Nuevos usuarios registrados**: `role: "user"`
- **Solo admins**: Pueden acceder a `/admin/*`
- **Redirección automática**: Si un usuario intenta acceder a `/admin`, se redirige a `/`
