"use client";

import {
    GetStarted,
    GallerySection,
    ReviewsSection,
    LoadingOverlay,
} from "@/components";
import { AboutUsNew } from "@/components/AboutUsNew";
import { BelowHero } from "@/components/BelowHero";
import { ContactInfoDivider } from "@/components/ContactInfoDivider";
import { NewHeroSection } from "@/components/NewHeroSection";
import { OurProcessTest } from "@/components/OurProcessTest";
import { OurServicesNew } from "@/components/OurServicesNew";
import { ReviewsNew } from "@/components/ReviewsNew";
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
                    {/*New Version*/}
                    <NewHeroSection />
                    <BelowHero />
                    <AboutUsNew />
                    <OurProcessTest />
                    {/* <OurProcess /> */}
                    <OurServicesNew />
                    <ContactInfoDivider />
                    <ReviewsNew />

                    {/* <HeroSection /> */}
                    {/* <HomePageServices /> */}
                    {/* <AboutUs /> */}
                    {/* <ProjectsSection /> */}
                    {/* <div className="py-12 bg-gray-50"></div>
                    <ReviewsSection /> */}
                    <GallerySection />
                    <GetStarted />
                </>
            )}
        </>
    );
}
