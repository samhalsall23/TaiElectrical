"use client";

import { useRef } from "react";

import { GetStarted } from "@/components/GetStarted";
import { HeroSection } from "@/components/HeroSection";
import HomePageServices from "@/components/HomePageServices";
import BulbIcon from "@/components/icons/BulbIcon";
import IconSquare from "@/components/icons/IconSquare";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
    const nameRef = useRef<HTMLInputElement>(null);

    const onClickContactUs = () => {
        const yOffset = -180; // navbar height in px
        const el = nameRef.current;
        if (el) {
            const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setTimeout(() => {
                el.focus();
            }, 1000);
        }
    };

    return (
        <>
            <HeroSection nameRef={nameRef} />

            <HomePageServices />

            <div className="bg-gray-50 ">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex items-center text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col items-center w-3/5">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                                One Stop Solution For Your Electrical Repairs,
                                Installisation and 24/7 Maintenance
                            </h3>
                            <p className="text-gray-600">
                                We are a team of experienced electricians
                                dedicated to providing top-notch electrical
                                services for residential and commercial
                                properties. Our mission is to ensure your
                                electrical systems are safe, efficient, and up
                                to code.
                            </p>
                            <div className="flex justify-between items-center w-full mt-10 px-10">
                                <div className="flex gap-3 items-center">
                                    <IconSquare icon="house" />
                                    <span className="text-gray-700 font-semibold mb-4">
                                        Domestic
                                    </span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <IconSquare icon="office" />
                                    <span className="text-gray-700 font-semibold mb-4">
                                        Commercial
                                    </span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <IconSquare icon="factory" />
                                    <span className="text-gray-700 font-semibold mb-4">
                                        Industrial
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 flex justify-end -me-44">
                            <BulbIcon width="300px" height="300px" />
                        </div>
                    </div>
                </div>
            </div>

            <ProjectsSection />

            <ReviewsSection />

            <div className="py-12 bg-gray-50"></div>

            <GetStarted onClickContactUs={onClickContactUs} />
        </>
    );

    /*<>
            <div className="relative w-full h-[80vh]">
                <Image
                    className="object-cover"
                    // src={"/assets/dark-bulb.jpg"}
                    src={"/assets/bulb-hero.jpg"}
                    alt="Tai Electrical Hero Image"
                    fill
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.8))",
                    }}></div> 
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgb(250,250,250, 1), rgba(128, 128, 128, 0.3))",
                    }}></div>
                <div className="container mx-auto absolute inset-0 flex flex-col justify-center text-black">
                    <div className="w-3/5">
                        <h1 className="text-8xl text-charcoal font-bold pb-10 mb-9">
                            Welcome to
                            <span className="text-yellow"> Tai Electrical</span>
                        </h1>
                        <p className="mt-4 text-5xl">
                            Your trusted partner for all electrical solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="flex">
                    <div className="w-1/2 px-20 py-48">
                        <h2 className="text-4xl text-yellow font-bold">
                            Quality Work. Local Service.
                        </h2>
                        <p className="text-charcoal my-4 text-lg">
                            Based in South East Melbourne, we provide reliable,
                            high-quality electrical services for both homes and
                            businesses. From new builds and renovations to
                            switchboard upgrades and lighting installations,
                            we’ve got the experience to get the job done safely
                            and efficiently.
                        </p>
                        <p className="text-charcoal mb-4 text-lg">
                            Whether it’s a small fix or a full-scale fit-out, we
                            bring attention to detail, honest advice, and
                            workmanship that lasts.
                        </p>
                    </div>
                    <div className="w-1/2 relative">
                        <Image
                            className="w-full h-full object-cover"
                            src={"/assets/home-im.jpg"}
                            alt="About Us"
                            fill
                        />
                    </div>
                </div>
            </div>
            <HomePageServices />
        </> */
}
