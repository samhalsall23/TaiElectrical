"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
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
                            src={"/assets/tai-electrical-logo.jpg"}
                            alt="Tai Electrical Logo"
                            width={100}
                            height={100}
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="text-xl lg:text-2xl font-medium space-x-6 lg:space-x-8 hidden md:flex">
                        <Link
                            href="#about"
                            className="relative hover:text-yellow transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
                            About
                        </Link>
                        <Link
                            href="#services"
                            className="relative hover:text-yellow transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
                            Services
                        </Link>
                        <Link
                            href="#projects"
                            className="relative hover:text-yellow transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="relative hover:text-yellow transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Social/Contact Links */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        <Link
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border-2 border-yellow rounded-full hover:bg-yellow hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <FaInstagram className="text-black" size={16} />
                        </Link>

                        <Link
                            href="tel:0444444444"
                            className="bg-yellow h-8 lg:h-10 px-2 lg:px-3 flex items-center justify-between rounded-full shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <FiPhone
                                className="text-black self-center"
                                size={16}
                            />
                            <span className="text-black text-md lg:text-lg px-2 lg:px-3 py-1 lg:py-2">
                                0463 932 842
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button and Phone */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <Link
                            href="tel:0444444444"
                            className="bg-yellow h-8 px-3 flex items-center space-x-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                            <FiPhone className="text-black" size={16} />
                            <span className="text-black text-sm font-medium">
                                0463 932 842
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

            {isMobileMenuOpen && (
                <div className="px-auto fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeMobileMenu}
                    />
                    <div className="absolute top-16 left-0 right-0 bg-gray-50 border-b border-gray-300 shadow-lg">
                        <div className="container mx-auto py-6 space-y-4">
                            <Link
                                href="#about"
                                onClick={closeMobileMenu}
                                className="block ps-4 text-xl font-medium text-zinc-800 hover:text-yellow transition-colors duration-300 py-2">
                                About
                            </Link>
                            <Link
                                href="#services"
                                onClick={closeMobileMenu}
                                className="block ps-4 text-xl font-medium text-zinc-800 hover:text-yellow transition-colors duration-300 py-2">
                                Services
                            </Link>
                            <Link
                                href="#projects"
                                onClick={closeMobileMenu}
                                className="block ps-4 text-xl font-medium text-zinc-800 hover:text-yellow transition-colors duration-300 py-2">
                                Projects
                            </Link>
                            <Link
                                href="#contact"
                                onClick={closeMobileMenu}
                                className="block ps-4 text-xl font-medium text-zinc-800 hover:text-yellow transition-colors duration-300 py-2">
                                Contact
                            </Link>

                            <div className="pt-4 border-t border-gray-300">
                                <Link
                                    href="https://www.instagram.com"
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
            )}
        </>
    );
};

export default Navbar;
