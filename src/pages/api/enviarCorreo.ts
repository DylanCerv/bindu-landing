import type { APIRoute } from 'astro';
// @ts-ignore
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Indicar que esta ruta es dinámica (necesario para APIs en Astro)
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
      // Capturar los datos del formulario
      const body = await request.json();
      const { nombre, email, telefono, mensaje } = body;

      // Configuración para Hostinger
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      console.log("transporter", transporter);

      // Configurar el mensaje
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Nuevo mensaje desde el sitio Bindu",
        html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
      };

      // Intentar enviar el correo
      const info = await transporter.sendMail(mailOptions);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Mensaje enviado correctamente",
          messageId: info.messageId,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error: any) {
      console.error("Error en el servidor:", error);

      return new Response(
        JSON.stringify({
          success: false,
          message: "Error al enviar el correo",
          error: error.message || "Error desconocido",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
}
