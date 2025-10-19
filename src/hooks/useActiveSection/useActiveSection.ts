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

                    const activeThreshold = window.innerHeight * 0.8;

                    if (rect.top <= activeThreshold && rect.bottom >= 0) {
                        if (distanceFromTop < minDistanceFromTop) {
                            minDistanceFromTop = distanceFromTop;
                            currentSection = id as ActionSectionType;
                        }
                    }
                }
            });

            // Only update if we found a section, otherwise keep the previous active section
            if (currentSection !== null) {
                setActiveSection(currentSection);
            }
            // If no section is found and we haven't set an active section yet, 
            // check if we're past all sections and set the last one as active
            else if (currentSection === null) {
                // Check if we've scrolled past all sections
                const lastSection = document.getElementById(SECTION_IDS[SECTION_IDS.length - 1]);
                if (lastSection) {
                    const lastRect = lastSection.getBoundingClientRect();
                    // If the last section is above the viewport, keep it as active
                    if (lastRect.bottom < 0) {
                        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeSection;
}
