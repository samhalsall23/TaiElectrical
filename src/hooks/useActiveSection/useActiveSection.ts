"use client";

import { useEffect, useState } from "react";
import { ActionSectionType, SECTION_IDS } from "./";

export function useActiveSection() {
    const [activeSection, setActiveSection] =
        useState<ActionSectionType | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection: ActionSectionType | null = null;
            let minDistanceFromTop = Number.POSITIVE_INFINITY;

            SECTION_IDS.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distanceFromTop = Math.abs(rect.top);

                    const PERCENT_FROM_TOP = 0.3;
                    const activeThreshold =
                        window.innerHeight * PERCENT_FROM_TOP;

                    if (rect.top <= activeThreshold && rect.bottom >= 0) {
                        if (distanceFromTop < minDistanceFromTop) {
                            minDistanceFromTop = distanceFromTop;
                            currentSection = id as ActionSectionType;
                        }
                    }
                }
            });

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const isAtBottom =
                scrollTop > 0 &&
                docHeight > windowHeight &&
                Math.ceil(scrollTop + windowHeight) >= docHeight;

            if (isAtBottom) {
                setActiveSection("contact");
            } else if (currentSection !== null) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeSection;
}
