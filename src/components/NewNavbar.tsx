"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <nav
            className={`text-black h-20 sticky top-0 bg-gray-50 flex justify-center z-50 ${
                isScrolled ? "border-b border-gray-300 shadow-md" : ""
            }`}>
            <div className="container mx-auto flex justify-between items-center">
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
                <div className="text-2xl font-medium space-x-8 hidden md:flex">
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
                <div className="flex items-between space-x-4">
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-yellow rounded-full hover:bg-yellow hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <FaInstagram className="text-black" size={20} />
                    </Link>

                    <Link
                        href="tel:0444444444"
                        className="bg-yellow h-10 px-3 flex items-center justify-between rounded-full shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <FiPhone className="text-black self-center" size={20} />
                        <span className="text-black text-lg px-3 py-2">
                            0444 444 444
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
