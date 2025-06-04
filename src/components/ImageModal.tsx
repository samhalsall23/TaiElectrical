import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface ImageModalProps {
    images: string[];
    isOpen: boolean;
    initialIndex?: number;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    images,
    isOpen,
    initialIndex = 0,
    onClose,
}) => {
    const [current, setCurrent] = useState(initialIndex);

    if (!isOpen) return null;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}>
            <div
                className="relative flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={handlePrev}
                    className="absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-amber-300/40 hover:bg-amber-300/70 hover:scale-110 text-gray-900 rounded-full p-2 shadow-lg transition"
                    aria-label="Previous image">
                    <ArrowLeft size={32} />
                </button>
                <div className="relative">
                    <Image
                        src={images[current]}
                        alt={`Image ${current + 1}`}
                        width={900}
                        height={600}
                        className="object-contain max-h-[80vh] max-w-[90vw] rounded-lg"
                        priority
                    />
                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-300/40 hover:bg-amber-300/70 hover:scale-110 text-gray-900 rounded-full p-2 shadow-lg transition"
                    aria-label="Next image">
                    <ArrowRight size={32} />
                </button>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white/70 hover:bg-white/90 text-gray-900 rounded-full p-2 shadow-lg transition"
                    aria-label="Close modal">
                    <X size={28} />
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
