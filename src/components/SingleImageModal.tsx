"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface SingleImageModalProps {
    isOpen: boolean;
    imageSrc: string;
    imageAlt?: string;
    onClose: () => void;
}

export function SingleImageModal({
    isOpen,
    imageSrc,
    imageAlt = "Modal Image",
    onClose,
}: SingleImageModalProps) {
    // === STATE ===
    const [imageLoading, setImageLoading] = useState(false);

    // === EFFECTS ===
    useEffect(() => {
        if (isOpen && imageSrc) {
            setImageLoading(true);
        }
    }, [isOpen, imageSrc]);

    // === HANDLERS ===
    const handleImageLoad = () => {
        setImageLoading(false);
    };

    // === RENDER ===
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 h-screen w-screen bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}>
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all animate-in slide-in-from-top-2 duration-500"
                    aria-label="Close modal">
                    <X className="w-6 h-6 text-white" />
                </button>
                <div
                    className="relative w-full h-full max-w-6xl max-h-[90vh] animate-in zoom-in-50 duration-500 ease-out"
                    onClick={(e) => e.stopPropagation()}>
                    {/* Loading spinner */}
                    {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className={`object-contain transition-opacity duration-300 ${
                            imageLoading ? "opacity-0" : "opacity-100"
                        }`}
                        quality={100}
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>
        </div>
    );
}
