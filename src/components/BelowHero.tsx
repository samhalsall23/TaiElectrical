"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ContactForm } from "@/components/ContactForm";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ArrowRight } from "lucide-react";
import { InViewSection } from "./InViewSection";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlineContacts } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export function BelowHero() {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="lg:flex justify-between items-center">
            <div className="md:order-2 w-full lg:w-2/5 xl:w-1/2">
                <div className="bg-orange-200 bg-opacity-75 w-full lg:w-3/4 rounded-b-lg p-12 m-0 lg:m-8 lg:mt-0">
                    <InViewSection>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl text-zinc-800 font-medium mb-4 flex-wrap">
                            Get in touch with our skilled electricians today!
                        </h2>
                        <Button
                            variant={"outline"}
                            size="lg"
                            className="font-semibold rounded-full group mt-3 hover:bg-orange-200">
                            Get a Quote
                            <ArrowRight className="font-black ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Button>{" "}
                    </InViewSection>
                </div>
            </div>

            <div className="mx-auto py-4 md:order-1 w-1/2 flex justify-center">
                <div className="flex flex-col my-2 sm:flex-row items-start space-y-8 sm:space-y-0 sm:space-x-16">
                    <div className="flex flex-col text-center flex-1">
                        <InViewSection>
                            <div className="flex flex-col items-center space-y-3 mb-6">
                                <AiOutlineContacts className="text-yellow text-5xl md:text-6xl" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
                                    Contact Us
                                </h2>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700 text-md md:text-lg whitespace-nowrap">
                                    contact@gmail.com
                                </p>
                                <p className="text-gray-700 text-md md:text-lg whitespace-nowrap">
                                    0444 444 444
                                </p>
                            </div>
                        </InViewSection>
                    </div>
                    <div className="hidden sm:block h-48 w-px bg-gray-300"></div>
                    <div className="flex flex-col text-center flex-1">
                        <InViewSection>
                            <div className="flex flex-col items-center space-y-3 mb-6">
                                <IoLocationOutline className="text-yellow text-5xl md:text-6xl" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
                                    Our Location
                                </h2>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-700 text-md md:text-lg whitespace-nowrap">
                                    Greater Melbourne
                                </p>
                                <p className="text-gray-700 text-md md:text-lg whitespace-nowrap">
                                    Area
                                </p>
                            </div>
                        </InViewSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
