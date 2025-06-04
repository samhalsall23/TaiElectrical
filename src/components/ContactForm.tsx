"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const errorClass = cn("text-red-800 text-sm font-semibold mt-1");

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("submitting");
        setErrorMessage("");
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message);

            await sendEmail(formData);

            setStatus("success");
        } catch (error) {
            console.error("Error sending email:", error);
            setErrorMessage("Failed to send email. Please try again later.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center px-8 mt-6 py-14 bg-green-100 rounded-md">
                <h2 className="text-3xl font-bold text-green-800">
                    Thank you!
                </h2>
                <p className="text-lg text-green-700 mt-2">
                    Your message has been sent successfully. We will get back to
                    you soon.
                </p>
            </div>
        );
    }

    return (
        <div className="flex bg-yellow flex-col p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl text-black font-black">
                Get A Free Quote
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                        <div>
                            <Input
                                {...register("name")}
                                isError={!!errors.name}
                                type="text"
                                icon="name"
                                placeholder="Your Name"
                                className="mt-1 w-full"
                            />
                            {errors.name && (
                                <p className={errorClass}>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Input
                                {...register("email")}
                                isError={!!errors.email}
                                type="email"
                                icon="email"
                                placeholder="Your Email"
                                className="mt-1 w-full"
                            />
                            {errors.email && (
                                <p className={errorClass}>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Input
                                {...register("phone")}
                                isError={!!errors.phone}
                                type="tel"
                                icon="phone"
                                placeholder="Your Phone Number"
                                className="mt-1 w-full"
                            />
                            {errors.phone && (
                                <p className={errorClass}>
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <TextArea
                            {...register("message")}
                            isError={!!errors.message}
                            placeholder="Your Message"
                            className="w-full h-24 md:h-full"></TextArea>
                        {errors.message && (
                            <p className={errorClass}>
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <Button
                        type="submit"
                        className="bg-black text-yellow font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition w-full md:w-auto"
                        disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Submit"}
                    </Button>
                </div>
                {status === "error" && (
                    <p className="mt-4 text-red-800">{errorMessage}</p>
                )}
            </form>
        </div>
    );
}
