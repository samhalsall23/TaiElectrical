"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ContactForm } from "@/components/ContactForm";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ArrowRight } from "lucide-react";
import { InViewSection } from "./InViewSection";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function NewHeroSection() {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative overflow-x-clip h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-gray-50 to-white">
            {/* Left Side - Info */}
            <div className="flex flex-col justify-center w-5/12 px-8 lg:px-16 xl:px-24">
                <div className="space-y-12">
                    {/* Small header */}
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl text-yellow font-black">//</h3>
                        <h3 className="ps-2 text-2xl font-black text-zinc-800 tracking-wide">
                            LET'S GET TO WORK
                        </h3>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-zinc-800">
                        <InViewSection>
                            <div className="min-h-[2.5em] flex flex-col justify-start">
                                <span className="block">
                                    Afforfable solutions for your electrical
                                    needs
                                </span>
                            </div>
                        </InViewSection>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl">
                        Providing top-notch electrical solutions for residential
                        and commercial needs. Your trusted partner for safe and
                        reliable electrical services.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            variant={"default"}
                            size="lg"
                            className="font-semibold rounded-full group">
                            Get a Quote
                            <ArrowRight className="font-black ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="font-semibold hover:bg-gray-50 rounded-full group">
                            View Services
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-7/12 relative">
                <div className="relative h-[calc(100vh-5rem)] w-full">
                    <Image
                        src={
                            "/assets/happy-mechanic-standing-huge-lightbulb.png"
                        }
                        alt="Professional Electrician"
                        fill
                        className="object-bottom"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
