# Newsletter - Nodemailer Integration

## Configuración de Newsletter con Nodemailer

Esta funcionalidad permite que los usuarios se suscriban a la newsletter de OLAS Joyería y reciban un correo de confirmación automático.

### Variables de Ambiente Requeridas

El archivo `.env` debe contener las siguientes variables de Gmail:

```env
GMAIL_USER=tu_email@gmail.com
GMAIL_API_KEY=tu_app_password_de_gmail
```

### Cómo obtener las credenciales de Gmail

1. **Gmail Account Setup:**
   - Ir a tu cuenta de Google: https://myaccount.google.com/
   - En el panel izquierdo, hacer clic en "Seguridad"
   - Habilitar "Autenticación de dos pasos" si no está habilitada
   - Buscar "Contraseña de aplicación" en las opciones de seguridad
   - Seleccionar "Mail" y "Windows Computer" (o tu SO)
   - Google te generará una contraseña de 16 caracteres
   - Copiar esa contraseña y pegarla en `GMAIL_API_KEY`

### Flujo de Funcionamiento

1. Usuario ingresa su correo en la Newsletter
2. Se envía el correo a `/api/newsletter` mediante POST
3. Nodemailer valida el correo y lo envía usando las credenciales de Gmail
4. Usuario recibe un correo HTML bonito con información de OLAS
5. Se muestra una notificación con toast al usuario

### API Endpoint

**POST** `/api/newsletter`

Request:
```json
{
  "email": "usuario@example.com"
}
```

Response (éxito):
```json
{
  "success": true,
  "message": "Correo enviado exitosamente"
}
```

Response (error):
```json
{
  "error": "Mensaje de error"
}
```

### Seguridad

- ✅ Validación de correo electrónico en el servidor
- ✅ Manejo de errores con mensajes apropiados
- ✅ Uso de variables de ambiente para credenciales
- ✅ Limpieza del formulario después del envío exitoso

### Troubleshooting

**Error: "Cannot find module 'nodemailer'"**
- Ejecutar: `npm install nodemailer @types/nodemailer --legacy-peer-deps`

**Error: "Invalid credentials"**
- Verificar que `GMAIL_API_KEY` es una "Contraseña de aplicación", no la contraseña normal de Gmail
- Verificar que la autenticación de dos pasos está habilitada

**El correo no se envía**
- Verificar que las variables de ambiente están correctas en `.env`
- Revisar los logs del servidor para más detalles
- Asegurarse de que la dirección de correo es válida

### Próximas Mejoras

- [ ] Base de datos de suscriptores
- [ ] Plantilla HTML personalizable
- [ ] Control de frecuencia de correos
- [ ] Gestión de desuscripciones
- [ ] Analytics de tasa de apertura
- [ ] Integración con servicios de email (Sendinblue, Mailchimp, etc.)
