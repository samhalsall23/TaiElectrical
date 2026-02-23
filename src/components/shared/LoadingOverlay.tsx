"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingOverlay() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1800);
        return () => clearTimeout(timeout);
    }, []);

    const svgIconVariants = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 215, 0, 0)", // transparent bright yellow (#FFD700)
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 215, 0, 1)", // solid bright yellow
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
                        className="w-32 h-32 stroke-yellow-400 stroke-[2]"
                        style={{ stroke: "#FFD700" }} // override Tailwind stroke color for pure gold
                    >
                        <motion.path
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                            variants={svgIconVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                },
                                fill: {
                                    duration: 0.8,
                                    ease: "easeIn",
                                    delay: 0.6,
                                },
                            }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
