"use client";

import { useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { InViewSection } from "./InViewSection";

export function GallerySection() {
    // const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-gray-50 pt-16 pb-12 flex justify-center min-h-screen">
            <InViewSection>
                <div className="w-full max-w-screen-lg text-center px-6 sm:px-8">
                    <h2 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-8">
                        Take a Look at Our Most Recent Project
                    </h2>

                    <Carousel>
                        <CarouselContent>
                            {[1, 2, 3].map((num) => (
                                <CarouselItem key={num} className="rounded-lg">
                                    <div className="rounded-lg overflow-hidden">
                                        <Image
                                            src={`/assets/gallery-${num}.jpg`}
                                            alt={`Project ${num}`}
                                            width={4032}
                                            height={3024}
                                            className="w-full h-auto object-cover"
                                            onClick={() => setModalOpen(true)}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex lg:absolute lg:inset-y-1/2 lg:left-0 lg:right-0 lg:justify-between justify-center gap-4 mt-12 lg:mt-0">
                            <CarouselPrevious className="static lg:relative" />
                            <CarouselNext className="static lg:relative" />
                        </div>
                        <CarouselDots className="mt-6" />
                    </Carousel>
                </div>
            </InViewSection>
        </div>
    );
}
