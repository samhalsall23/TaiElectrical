"use client";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { InViewSection } from "./InViewSection";
import { SlashHeader } from "./SlashHeader";

export function ReviewsNew() {
    return (
        <section className="bg-gray-50 py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 lg:space-y-8">
                    <InViewSection className="space-y-6 lg:space-y-8">
                        <SlashHeader text="OUR CLIENTS"></SlashHeader>
                        <h2 className="h2-heading-text">
                            What our clients have to say about our services
                        </h2>
                    </InViewSection>
                    <InViewSection className="w-full bg-gray-50 min-h-64 sm:min-h-80 lg:min-h-96 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <div className="w-full p-4 sm:p-6 lg:p-8">
                            <ReactGoogleReviews
                                layout="carousel"
                                featurableId="11d2edd5-1f42-427a-b745-8f8899a7bde8"
                                carouselSpeed={5000}
                            />
                        </div>
                    </InViewSection>
                </div>
            </div>
        </section>
    );
}
