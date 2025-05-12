import { ContactForm } from "@/components/ContactForm";
import HomePageServices from "@/components/HomePageServices";
import LightBulbIcon from "@/components/icons/LightBulbIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Home() {
    return (
        <>
            <div className="absolute rotate-12 top-48 left-80 w-screen h-screen text-gray-300 ">
                <AiOutlineThunderbolt size={550} className="text-zinc-100" />
            </div>
            <div>
                <div className="flex relative -mt-10">
                    <div className="ms-10 w-1/2 flex items-center justify-center relative z-10">
                        <h2 className="text-6xl text-black font-black underline-offset-4 relative -mr-10 inline-block px-4 py-2">
                            Expert Solutions For Your Electrical Problems
                        </h2>
                    </div>

                    <div className="relative w-1/2 h-[500px]">
                        <Image
                            className="object-cover"
                            src={"/assets/warm-hero-image.png"}
                            alt="About Us"
                            fill
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="relative ms-10 w-3/5 -mt-10 z-20">
                        <ContactForm />
                    </div>
                    <div className="w-2/5 p-10 flex flex-col justify-center self-center relative z-10">
                        <p className="text-2xl text-charcoal">
                            Based in Melbourne’s south east, we provide fast,
                            professional electrical services — from 24/7
                            emergency callouts to lighting, data cabling,
                            renovations, and more.
                        </p>
                        <Button className="bg-yellow text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition mt-5 w-fit">
                            <span className="text-lg font-semibold">
                                Schedule a Consultation
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <HomePageServices />
            <div className="my-96"></div>
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
