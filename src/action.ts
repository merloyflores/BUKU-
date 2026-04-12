"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const asunto = formData.get("asunto");
  const mensaje = formData.get("mensaje");

  try {
    await resend.emails.send({
      from: 'Bukuë Web <onboarding@resend.dev>', // Cambiar por tu dominio verificado luego
      to: ['admin@bukuecr.com'],
      subject: `Nuevo Mensaje Web: ${asunto}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #84be30;">Nueva consulta desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${mensaje}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}