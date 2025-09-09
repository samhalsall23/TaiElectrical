"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ContactForm } from "@/components/ContactForm";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { InViewSection } from "./InViewSection";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative overflow-x-clip min-h-screen 2xl:min-h-0">
            <div className="absolute rotate-12 top-32 left-1/2 -translate-x-1/2 md:left-80 md:translate-x-0 w-[400px] h-[400px] md:w-screen md:h-screen text-gray-300 pointer-events-none z-0">
                <AiOutlineThunderbolt
                    size={300}
                    className="text-zinc-100 md:size-[550px]"
                />
            </div>
            <div>
                <div className="flex flex-col md:flex-row relative md:-mt-20">
                    <div className="h-44 md:h-auto px-4 md:ms-10 w-full md:w-1/2 flex items-center justify-center relative z-10 py-8 md:py-0">
                        <h2 className="leading-snug text-3xl sm:text-3xl sm:leading-snug md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug text-black font-black underline-offset-4 relative px-2 md:px-6 py-4 text-center md:text-left">
                            <InViewSection>
                                <span>
                                    Expert Solutions For Your
                                    {showTypewriter && (
                                        <Typewriter
                                            words={[
                                                " Electrical Problems",
                                                " Electrical Needs",
                                                " Electrical Services",
                                                " Electrical Projects",
                                                " Electrical Solutions",
                                            ]}
                                            loop
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={50}
                                            deleteSpeed={50}
                                            delaySpeed={3000}
                                        />
                                    )}
                                </span>
                            </InViewSection>
                        </h2>
                    </div>
                    <InViewSection className="relative w-full md:w-1/2 h-60 sm:h-80 md:h-[500px]">
                        <Image
                            className="object-cover"
                            src={"/assets/warm-hero-image.png"}
                            alt="About Us"
                            fill
                            priority
                        />
                    </InViewSection>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="relative px-4 md:ms-10 w-full md:w-3/5 -mt-4 md:-mt-6 z-20">
                        <InViewSection>
                            <ContactForm />
                        </InViewSection>
                    </div>
                    <div className="w-full md:w-2/5 p-4 md:p-10 flex flex-col justify-center self-center relative z-10 ">
                        <InViewSection>
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-1 text-center md:text-left">
                                Based in Melbourne’s south east, we provide
                                fast, professional electrical services — from
                                24/7 emergency callouts to lighting, data
                                cabling, renovations, and more.
                            </p>
                        </InViewSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
