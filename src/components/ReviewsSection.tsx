"use client";

import { IoChatbubblesOutline } from "react-icons/io5";
import { LuQuote } from "react-icons/lu";

import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
} from "./ui/carousel";

export function ReviewsSection() {
    return (
        <div className="bg-gray-50 pt-10">
            <div className="container mx-auto flex flex-col md:flex-row px-6 gap-8 md:gap-3 items-center">
                <div className="w-full md:w-1/3 relative mb-8 md:mb-0">
                    <IoChatbubblesOutline
                        className="absolute z-0 text-amber-100 right-11 top-0"
                        size={200}
                    />
                    <h2 className="text-gray-900 relative text-3xl pt-10 sm:text-4xl font-extrabold mb-8 z-10 text-center md:text-left md:pt-0">
                        Find out what our customers say about us
                    </h2>
                </div>
                <div className="w-full md:w-2/3 mx-0 md:mx-10 relative me-4 pr-16 md:pr-8">
                    {/* <ReactGoogleReviews
                        layout="carousel"
                        featurableId={featurableWidgetId}
                    /> */}

                    {/* Non Google Reviews */}
                    <Carousel>
                        <CarouselContent className="w-full">
                            <CarouselItem className="rounded-lg relative shadow-md bg-yellow flex w-full">
                                <LuQuote
                                    size={50}
                                    className="text-amber-200 absolute right-5 bottom-5"
                                />
                                <div className="p-8 text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        Customer 1
                                    </h3>
                                    <p className="text-gray-700 mb-8">
                                        I had a great experience with this
                                        company. They were professional and
                                        efficient. The team was friendly and
                                        knowledgeable. I would highly recommend
                                        them to anyone looking for quality
                                        electrical work.
                                    </p>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="rounded-lg relative shadow-md bg-yellow flex w-full">
                                <LuQuote
                                    size={50}
                                    className="text-amber-200 absolute right-5 bottom-5"
                                />
                                <div className="p-8 text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        Customer 1
                                    </h3>
                                    <p className="text-gray-700 mb-8">
                                        I had a great experience with this
                                        company. They were professional and
                                        efficient. The team was friendly and
                                        knowledgeable. I would highly recommend
                                        them to anyone looking for quality
                                        electrical work.
                                    </p>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="rounded-lg relative shadow-md bg-yellow flex w-full">
                                <LuQuote
                                    size={50}
                                    className="text-amber-200 absolute right-5 bottom-5"
                                />
                                <div className="p-8 text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        Customer 1
                                    </h3>
                                    <p className="text-gray-700 mb-8">
                                        I had a great experience with this
                                        company. They were professional and
                                        efficient. The team was friendly and
                                        knowledgeable. I would highly recommend
                                        them to anyone looking for quality
                                        electrical work.
                                    </p>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselDots className="mt-4" />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
