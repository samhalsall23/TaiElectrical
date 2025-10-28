"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { InViewSection } from "./InViewSection";
import { SlashHeader } from "./SlashHeader";
import { AboutUsDotPoint } from "./AboutUsNew";
import { useState } from "react";
import { SingleImageModal } from "./SingleImageModal";

export function ProjectsNew() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>("");

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage("");
    };

    return (
        <>
            <section id="projects" className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Image Section */}
                        <InViewSection className="order-2 lg:order-1 w-full lg:w-1/2">
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <Carousel>
                                    <CarouselContent>
                                        {[1, 2, 3].map((num) => (
                                            <CarouselItem key={num}>
                                                <div
                                                    className="rounded-2xl overflow-hidden shadow-xl lg:mt-12 cursor-pointer"
                                                    onClick={() =>
                                                        openModal(
                                                            `/assets/gallery-${num}.jpg`
                                                        )
                                                    }>
                                                    <div className="aspect-[4/3] relative">
                                                        <Image
                                                            src={`/assets/gallery-${num}.jpg`}
                                                            alt={`Project ${num}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-4 mt-10">
                                        <CarouselPrevious className="static bg-white hover:bg-gray-50 shadow-lg" />
                                        <CarouselNext className="static bg-white hover:bg-gray-50 shadow-lg" />
                                    </div>
                                </Carousel>
                            </div>
                        </InViewSection>

                        {/* Content Section */}
                        <div className="order-1 lg:order-2 w-full lg:w-1/2 space-y-6 lg:space-y-8">
                            <InViewSection className="space-y-6 lg:space-y-8 text-left">
                                <SlashHeader text="OUR WORK"></SlashHeader>
                                <h2 className="h2-heading-text">
                                    View one of our latest projects
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed  mx-auto lg:mx-0 mb-6">
                                    Recent kitchen renovation featuring
                                    comprehensive electrical upgrades:
                                </p>
                                <ul className="space-y-1 mx-auto lg:mx-0">
                                    <AboutUsDotPoint text="3x double power points installed for the benchtops" />
                                    <AboutUsDotPoint text="New power points for fridge, freezer, microwave, dishwasher, and cooktop" />
                                    <AboutUsDotPoint text="Power supply for the rangehood installation" />
                                    <AboutUsDotPoint text="Oven and microwave installed and ready for use" />
                                    <AboutUsDotPoint text="Kitchen fluorescent light replaced with new LED fitting" />
                                    <AboutUsDotPoint text="Old batten holder replaced with modern pendant light" />
                                    <AboutUsDotPoint text="Oven circuit updated to include safety switch" />
                                </ul>
                            </InViewSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Single Image Modal */}
            <SingleImageModal
                isOpen={modalOpen}
                imageSrc={selectedImage}
                imageAlt="Project Detail"
                onClose={closeModal}
            />
        </>
    );
}
