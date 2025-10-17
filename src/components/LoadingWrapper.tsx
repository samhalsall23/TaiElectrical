// components/LoadingWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { LoadingOverlay } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [overlayVisible, setOverlayVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setOverlayVisible(false), 1800);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <LoadingOverlay />

            <AnimatePresence>
                {!overlayVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
