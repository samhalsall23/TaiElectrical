import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import { SlashHeader } from "./SlashHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "./ui/button";
import { TextArea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { InViewSection } from "./InViewSection";
import { Input } from "./ui/input";

const errorClass = cn("text-red-600 text-sm font-semibold mt-1");

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactFormNew() {
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
        <>
            <section className="bg-gray-100 w-full py-12 relative">
                {/* Curved transition from white to gray */}
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-white"
                    style={{
                        clipPath: "ellipse(100% 100% at 50% 0%)",
                    }}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
                        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                            <SlashHeader text="GET IN TOUCH" />
                            <h2 className="h2-heading-text mb-6 lg:mb-8">
                                Get a free quote
                            </h2>
                            <div>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4 lg:space-y-6">
                                    <div className="flex flex-col gap-4 lg:gap-6 w-full">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm text-gray-700 font-semibold mb-2 uppercase tracking-wide">
                                                NAME
                                            </label>
                                            <Input
                                                id="name"
                                                {...register("name")}
                                                isError={!!errors.name}
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full"
                                            />
                                            {errors.name && (
                                                <p className={errorClass}>
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm text-gray-700 font-semibold mb-2 uppercase tracking-wide">
                                                EMAIL
                                            </label>
                                            <Input
                                                id="email"
                                                {...register("email")}
                                                isError={!!errors.email}
                                                type="email"
                                                placeholder="contact@email.com"
                                                className="w-full"
                                            />
                                            {errors.email && (
                                                <p className={errorClass}>
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm text-gray-700 font-semibold mb-2 uppercase tracking-wide">
                                                PHONE
                                            </label>
                                            <Input
                                                id="phone"
                                                {...register("phone")}
                                                isError={!!errors.phone}
                                                type="tel"
                                                placeholder="0444 444 444"
                                                className="w-full"
                                            />
                                            {errors.phone && (
                                                <p className={errorClass}>
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm text-gray-700 font-semibold mb-2 uppercase tracking-wide">
                                                MESSAGE
                                            </label>
                                            <TextArea
                                                id="message"
                                                {...register("message")}
                                                isError={!!errors.message}
                                                placeholder="Please type your message here..."
                                                className="w-full h-24 sm:h-32 resize-none"
                                            />
                                            {errors.message && (
                                                <p className={errorClass}>
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full sm:w-auto rounded-full mt-6"
                                            disabled={status === "submitting"}>
                                            {status === "submitting"
                                                ? "Sending..."
                                                : "Send Message"}
                                        </Button>
                                    </div>

                                    {status === "error" && (
                                        <p className="mt-4 text-red-800">
                                            {errorMessage}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <InViewSection>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <div className="aspect-[4/3] sm:aspect-[5/3] lg:aspect-square relative">
                                        <Image
                                            src={"/assets/hero-image2.jpg"}
                                            alt="Electrical Process"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                            </InViewSection>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
