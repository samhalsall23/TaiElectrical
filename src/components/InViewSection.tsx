// components/InViewSection.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function InViewSection({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-200 transform",
                isVisible
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 translate-y-6 scale-95 invisible",
                className
            )}>
            {children}
        </div>
    );
}
