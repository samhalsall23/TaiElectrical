"use client";

import { ArrowRight } from "lucide-react";
import { InViewSection } from "./InViewSection";
import { Button } from "./ui/button";
import { AiOutlineContacts } from "react-icons/ai";
import { LuMapPinned } from "react-icons/lu";
import {
    QUOTE_BUTTON_TEXT,
    SITE_EMAIL_ADDRESS,
    SITE_PHONE_NUMBER,
} from "@/lib/constants";

function InfoCard({
    title,
    text,
    icon,
}: {
    title: string;
    text: string[];
    icon: React.ReactNode;
}) {
    return (
        <div className="flex flex-col text-start flex-1">
            <InViewSection>
                <div className="flex items-center gap-3 mb-6">
                    {icon}
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">
                        {title}
                    </h2>
                </div>
                <div className="space-y-3">
                    {text.map((line, index) => (
                        <p
                            key={index}
                            className="text-gray-800 text-base text-md md:text-lg font-medium whitespace-nowrap">
                            {line}
                        </p>
                    ))}
                </div>
            </InViewSection>
        </div>
    );
}

export function BelowHero() {
    return (
        <section className="lg:flex justify-between items-center">
            <div className="md:order-2 w-full lg:w-2/5 2xl:w-1/2">
                <div className="bg-orange-200 bg-opacity-75 w-full lg:w-3/4 rounded-b-lg p-12 m-0 lg:m-8 lg:mt-0">
                    <InViewSection>
                        <h2 className="text-2xl sm:text-3xl md:text-2xl  xl:text-3xl 2xl:text-4xl text-zinc-800 font-medium mb-4 flex-wrap">
                            Get in touch with our skilled electricians today!
                        </h2>
                        <Button
                            variant={"outline"}
                            size="lg"
                            buttonType="quote"
                            className="font-semibold rounded-full group mt-3 hover:bg-orange-200">
                            {QUOTE_BUTTON_TEXT}
                            <ArrowRight className="font-black ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Button>
                    </InViewSection>
                </div>
            </div>

            <div className="container pt-8 px-6 mx-auto md:py-4 md:order-1 md:w-1/2 flex justify-start md:justify-center">
                <div className="flex flex-col my-2 sm:flex-row items-start space-y-8 sm:space-y-0 sm:space-x-16">
                    <InfoCard
                        title="Contact Us"
                        text={[
                            `Phone: ${SITE_PHONE_NUMBER}`,
                            `Email: ${SITE_EMAIL_ADDRESS}`,
                        ]}
                        icon={
                            <AiOutlineContacts className="text-yellow text-3xl md:text-2xl" />
                        }
                    />

                    <div className="hidden sm:block h-20 w-px bg-gray-200 self-center"></div>

                    <InfoCard
                        title="Our Location"
                        text={["Greater Melbourne Area", "Victoria, Australia"]}
                        icon={
                            <LuMapPinned className="text-yellow text-3xl md:text-2xl" />
                        }
                    />
                </div>
            </div>
        </section>
    );
}
