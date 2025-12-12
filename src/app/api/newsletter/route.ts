import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_API_KEY,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "El correo es requerido" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo inválido" },
        { status: 400 }
      );
    }

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "¡El toque final que mereces!✨",
      html: `
        <div style="font-family: 'Cormorant Garamond', serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://olas-joyeria.vercel.app/img/logo.png" alt="Olas Joyería" style="max-width: 150px; height: auto; margin-bottom: 10px;" />
            <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">Fragmentos de cielo para tu piel</p>
          </div>

          <div style="background-color: #F5F0EA; padding: 30px; border-radius: 4px; margin-bottom: 30px;">
            <h2 style="font-family: 'Playfair Display', serif; color: #6F1A07; font-size: 28px; margin-top: 0; font-weight: 600;">¡Gracias por suscribirte!</h2>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Nos complace mucho que te hayas unido a nuestra comunidad de amantes de la joyería artesanal. 
              Pronto recibirás ofertas exclusivas, consejos de estilo y novedades sobre nuestras colecciones.
            </p>
            
            <div style="margin-top: 25px; padding-top: 25px; border-top: 1px solid #DDD;">
              <h3 style="font-family: 'Playfair Display', serif; color: #6F1A07; font-size: 18px; margin-top: 0; font-weight: 600;">Nuestras Colecciones:</h3>
              <ul style="color: #333; font-size: 14px; line-height: 2;">
                <li> 💫 Collares únicos y elegantes</li>
                <li> ❤️ Aretes que realzan tu belleza</li>
                <li> 💍 Anillos de diseño exclusivo</li>
                <li> 💎 Pulseras para cada ocasión</li>
              </ul>
            </div>
          </div>

          <div style="text-align: center; color: #999; font-size: 12px;">
            <p>© 2025 OLAS Joyería. Todos los derechos reservados.</p>
            <p style="margin-top: 15px;">
              Si no deseas recibir más correos,<br/>
              <a href="mailto:${process.env.GMAIL_USER}?subject=Desuscribirse&body=Por favor desuscríbeme de la newsletter" 
                 style="color: #6F1A07; text-decoration: none;">haz clic aquí para darte de baja</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo. Por favor intenta más tarde." },
      { status: 500 }
    );
  }
}
