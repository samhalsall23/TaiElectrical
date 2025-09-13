"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InViewSection } from "./InViewSection";
import { Button } from "./ui/button";
import { SlashHeader } from "./SlashHeader";

export function NewHeroSection() {
    return (
        <section className="relative overflow-x-clip min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center bg-gradient-to-b from-gray-50 to-white">
            {/* Left Side - Info */}
            <div className="flex flex-col justify-center w-full lg:w-7/12 xl:w-5/12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-10 lg:py-0 order-2 lg:order-1">
                <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left">
                    {/* Small header */}
                    <InViewSection className="delay-100">
                        <SlashHeader text="LET'S GET TO WORK" />
                    </InViewSection>

                    {/* Main headline */}
                    <InViewSection className="delay-300">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-medium leading-tight text-zinc-800">
                            <div className="flex flex-col justify-start">
                                <span className="block">
                                    Affordable solutions for your electrical
                                    needs
                                </span>
                            </div>
                        </h1>
                    </InViewSection>

                    {/* Subtext */}
                    <InViewSection className="delay-500">
                        <p className="p-heading-text">
                            Providing top-notch electrical solutions for
                            residential and commercial needs. Your trusted
                            partner for safe and reliable electrical services.
                        </p>
                    </InViewSection>

                    {/* Buttons */}
                    <InViewSection className="delay-700">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                            <Button
                                variant="default"
                                size="lg"
                                className="font-semibold rounded-full group w-full sm:w-auto hover:border-amber-400 hover:bg-amber-400">
                                Get a Quote
                                <ArrowRight className="font-black ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="font-semibold hover:bg-gray-50 rounded-full group w-full sm:w-auto">
                                View Services
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </Button>
                        </div>
                    </InViewSection>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-7/12 xl:5/12 relative order-1 lg:order-2">
                <InViewSection className="delay-400">
                    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[calc(100vh-5rem)] w-full">
                        <Image
                            src={
                                "/assets/happy-mechanic-standing-huge-lightbulb.png"
                            }
                            alt="Professional Electrician"
                            fill
                            className="object-contain lg:object-bottom object-center"
                            priority
                        />
                    </div>
                </InViewSection>
            </div>
        </section>
    );
}
