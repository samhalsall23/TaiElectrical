"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertDialog, AlertDialogContent } from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface PixieCertificationClientProps {
    certificateImageSrc: string;
    children: React.ReactNode;
}

export function PixieCertificationClient({
    certificateImageSrc,
    children,
}: PixieCertificationClientProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button
                onClick={openModal}
                className="font-semibold text-zinc-800 cursor-pointer transition-colors duration-200 underline-offset-2 hover:underline text-left"
                aria-label="View Pixie Smart Installer Certificate">
                {children}
            </button>

            <AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
                <AlertDialogContent className="bg-white border-none rounded-lg max-w-4xl w-[90vw] max-h-[90vh]">
                    <div className="relative w-full h-[60vh] flex items-center justify-center">
                        <Image
                            src={certificateImageSrc}
                            alt="Pixie Certified Smart Installer Certificate"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button size="lg" onClick={closeModal}>
                            Close
                        </Button>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
