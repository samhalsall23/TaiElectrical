"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    CALL_US_LINK,
    SITE_INSTAGRAM,
    SITE_PHONE_NUMBER,
} from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { scrollToSection } from "@/lib/scrollToSection";
import { useIsScrolled } from "@/hooks";
import { useLogoVisibility } from "@/contexts/LogoVisibilityContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMobileMenuResize } from "@/hooks/useMobileMenuResize";

const Navbar: React.FC = () => {
    // === STATE ===
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // === HOOKS ===
    const isScrolled = useIsScrolled();
    const { showLogo, isReady } = useLogoVisibility();
    const activeSection = useActiveSection();

    useMobileMenuResize({
        isMobileMenuOpen,
        setIsMobileMenuOpen,
    });

    // === HANDLERS ===
    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        document.body.style.overflow = newState ? "hidden" : "unset";
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);

        document.body.style.overflow = "unset";
    };

    const scrollToSectionAndCloseMenu = (id: string) => {
        scrollToSection(id);
        closeMobileMenu();
    };

    // === UI CLASSES ===
    const linkClass =
        "relative hover:text-yellow transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full";

    const getLinkClass = (sectionId: string) => {
        const isActive = activeSection === sectionId;
        return `${linkClass} ${isActive ? "text-yellow after:w-full" : ""}`;
    };

    const getMobileLinkClass = (sectionId: string) => {
        const isActive = activeSection === sectionId;
        const baseClass =
            "block ps-4 text-xl font-medium transition-colors duration-300 py-2 text-left w-full";
        return `${baseClass} ${
            isActive ? "text-yellow" : "text-zinc-800 hover:text-yellow"
        }`;
    };

    return (
        <>
            <nav
                className={`text-black h-20 sticky top-0 bg-gray-50 flex justify-center z-50 ${
                    isScrolled ? "border-b border-gray-300 shadow-md" : ""
                }`}>
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
                    {/* Logo */}
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="pt-1 flex items-center">
                        <Image
                            className={`transition-opacity duration-300 ${
                                isReady && showLogo
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            src={"/assets/tai-electrical-logo.png"}
                            alt="Tai Electrical Logo"
                            width={100}
                            height={100}
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="text-lg lg:text-xl 2xl:text-2xl font-medium space-x-6 lg:space-x-12 hidden md:flex">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("about");
                            }}
                            className={getLinkClass("about")}>
                            About
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("services");
                            }}
                            className={getLinkClass("services")}>
                            Services
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("projects");
                            }}
                            className={getLinkClass("projects")}>
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("contact");
                            }}
                            className={getLinkClass("contact")}>
                            Contact
                        </a>
                    </div>

                    {/* Desktop Social/Contact Links */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        <Link
                            href={SITE_INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border-2 border-yellow rounded-full hover:bg-yellow hover:text-white shadow-md hover:shadow-lg transition-all duration-150 hover:scale-110">
                            <FaInstagram
                                className="text-black group-hover:scale-110 transition-transform duration-150"
                                size={16}
                            />
                        </Link>

                        <Link
                            href={CALL_US_LINK}
                            className="group bg-yellow h-8 lg:h-10 px-2 lg:px-5 flex items-center justify-between rounded-full shadow-md transition-all duration-300">
                            <FiPhone
                                className="text-black self-center transition-transform duration-300 group-hover:translate-x-1"
                                size={16}
                            />
                            <span className="text-black text-md lg:text-lg px-2 lg:px-3 py-1 lg:py-2">
                                {SITE_PHONE_NUMBER}
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button and Phone */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <Link
                            href={`tel:${SITE_PHONE_NUMBER}`}
                            className="bg-yellow h-8 px-3 flex items-center space-x-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                            <FiPhone className="text-black" size={16} />
                            <span className="text-black text-sm font-medium">
                                {SITE_PHONE_NUMBER}
                            </span>
                        </Link>

                        <button
                            onClick={toggleMobileMenu}
                            className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-300">
                            {isMobileMenuOpen ? (
                                <FiX size={24} />
                            ) : (
                                <FiMenu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay and Content */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}>
                {/* Background Overlay with darkening animation */}
                <div
                    className={`absolute inset-0 transition-all duration-500 ${
                        isMobileMenuOpen ? "bg-black/60" : "bg-black/0"
                    }`}
                    onClick={closeMobileMenu}
                />

                {/* Sliding Menu Panel */}
                <div
                    className={`absolute top-16 left-0 right-0 bg-gray-50 border-b border-gray-300 shadow-lg transform transition-all duration-300 ease-out ${
                        isMobileMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0"
                    }`}>
                    <div className="container mx-auto py-6 space-y-4">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("about");
                            }}
                            className={getMobileLinkClass("about")}>
                            About
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("services");
                            }}
                            className={getMobileLinkClass("services")}>
                            Services
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("projects");
                            }}
                            className={getMobileLinkClass("projects")}>
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSectionAndCloseMenu("contact");
                            }}
                            className={getMobileLinkClass("contact")}>
                            Contact
                        </a>

                        <div className="pt-4 border-t border-gray-300">
                            <Link
                                href={SITE_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex ps-4 items-center space-x-3 text-lg font-medium text-zinc-800 hover:text-yellow transition-colors duration-300 py-2">
                                <FaInstagram size={20} />
                                <span>Follow us on Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
