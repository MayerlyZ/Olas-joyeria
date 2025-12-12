# Cómo Agregar Usuarios de Prueba

Si MongoDB no está disponible en la conexión actual, puedes agregar usuarios manualmente cuando la conexión esté disponible.

## Opción 1: Usar el Endpoint de Registro

1. Ve a `http://localhost:3000/auth`
2. Haz clic en "Regístrate"
3. Completa el formulario con:
   - Email: `admin@ejemplo.com`
   - Contraseña: `Password123`
4. Haz clic en "Crear Cuenta"

## Opción 2: Agregar Directamente en MongoDB

Si tienes acceso a MongoDB Atlas o una instancia local, puedes insertar un usuario:

```javascript
// Conectar a la colección "users" en la BD "Ecommerce"

// 1. Primero genera un hash bcrypt para la contraseña
// Contraseña: "Password123"
// Hash bcrypt: $2b$10$qf...

db.users.insertOne({
  email: "admin@ejemplo.com",
  password: "$2b$10$qfJVJ2z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3z1z3",
  createdAt: new Date()
})
```

## Verificar Usuarios Existentes

```javascript
db.users.find()
```

## Diagnóstico de Problemas

Si el login sigue sin funcionar, revisa:

1. **Conexión a MongoDB**: ¿Está disponible?
2. **Base de datos correcta**: Debe ser "Ecommerce"
3. **Email normalizado**: Se convierte a minúsculas y se recortan espacios
4. **Contraseña hasheada**: Debe comenzar con `$2b$` o `$2a$`

## Logs Útiles

El servidor mostrará logs como:
- "Buscando usuario con email: admin@ejemplo.com"
- "Usuario encontrado: Sí/No"
- "Contraseña válida (hasheada)"

Verifica la terminal para estos logs.
