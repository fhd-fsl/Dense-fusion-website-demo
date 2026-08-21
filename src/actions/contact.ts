"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL || "info@densefusion.com";

export async function submitContactForm(prevState: any, formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!fullName || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Dense Fusion Contact <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `New Contact Request from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send message. Please check server configuration." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server error:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
