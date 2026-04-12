"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const interes = formData.get("interes");

  try {
    const data = await resend.emails.send({
      from: 'Bukuë Web <onboarding@resend.dev>', // Luego usas tu dominio real
      to: ['info@bukuecr.com'],
      subject: `Nuevo Lead: ${interes}`,
      html: `
        <h1>Nuevo Diagnóstico Solicitado</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interés:</strong> ${interes}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}