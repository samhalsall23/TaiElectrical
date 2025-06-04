"use server";

import nodemailer from "nodemailer";

export async function sendEmail(data: FormData) {
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

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
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
}
