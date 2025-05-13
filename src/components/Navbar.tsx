"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";

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
            className={`text-black h-24 sticky top-0 bg-white z-50 ${
                isScrolled ? "border-b border-gray-300 shadow-md" : ""
            }`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="pt-1 flex items-center">
                    <Image
                        src={"/assets/tai-electrical-logo.jpg"}
                        alt="Tai Electrical Logo"
                        width={150}
                        height={150}
                    />
                </Link>
                <div className="flex items-between space-x-4">
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border-2 border-yellow rounded-full hover:bg-yellow hover:text-white shadow-md hover:shadow-lg transition-all duration-300">
                        <FaInstagram className="text-black" size={20} />
                    </Link>

                    <Link
                        href="tel:0444444444"
                        className="bg-yellow h-10 px-3 flex items-center justify-between rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                        <FaPhone className="text-black self-center" size={20} />
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
