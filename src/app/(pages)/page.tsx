"use client";

import {
    GetStarted,
    HeroSection,
    HomePageServices,
    GallerySection,
    ReviewsSection,
    AboutUs,
    LoadingOverlay,
} from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 1800);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <LoadingOverlay />

            {visible && (
                <>
                    <HeroSection />
                    <HomePageServices />
                    <AboutUs />
                    {/* <ProjectsSection /> */}
                    <div className="py-12 bg-gray-50"></div>
                    <ReviewsSection />
                    <GallerySection />
                    <GetStarted />
                </>
            )}
        </>
    );
}
