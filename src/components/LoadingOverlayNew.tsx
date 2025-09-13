"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingOverlayNew() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1800);
        return () => clearTimeout(timeout);
    }, []);

    const svgIconVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(252, 211, 77, 0)",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(252, 211, 77, 1)",
        },
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-32 h-32 stroke-amber-500 stroke-[1.5]">
                        <motion.path
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                            variants={svgIconVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: {
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 0.5,
                                },
                                fill: {
                                    duration: 1.5,
                                    ease: "easeIn",
                                    delay: 0.8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 0.5,
                                },
                            }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
