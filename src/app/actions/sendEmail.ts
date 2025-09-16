"use server";

import nodemailer from "nodemailer";

export async function sendEmail(data: FormData) {
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    // Check for required environment variables
    if (
        !process.env.AUTH_EMAIL ||
        !process.env.APP_PASSWORD ||
        !process.env.EMAIL_TO
    ) {
        throw new Error(
            "Email configuration is missing. Please check environment variables."
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: `Website Contact Form Submission = ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        });
    } catch (error) {
        console.error("Failed to send email:", error);
        throw new Error("Failed to send email. Please try again later.");
    }
}
