"use client";

import { useLogoVisibility } from "@/contexts/LogoVisibilityContext";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroImage() {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const isImageInView = useInView(imageRef);
    const { setShowLogo, setIsReady } = useLogoVisibility();

    useEffect(() => {
        setShowLogo(!isImageInView);
        setIsReady(true);
    }, [isImageInView, setShowLogo, setIsReady]);

    return (
        <div className="relative h-auto py-8 sm:py-12 md:py-16 lg:py-0 lg:h-[calc(100vh-5rem)] w-full flex items-center justify-center">
            <Image
                ref={imageRef}
                src={"/assets/tai-electrical-logo.png"}
                alt="Professional Electrician"
                width={677}
                height={369}
                quality={100}
                className="w-3/5 lg:w-full h-auto object-contain max-w-[90%]"
                priority
            />
        </div>
    );
}
