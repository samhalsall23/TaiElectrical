import { useEffect } from "react";

interface UseMobileMenuResizeProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    breakpoint?: number;
}

export function useMobileMenuResize({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    breakpoint = 768,
}: UseMobileMenuResizeProps) {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= breakpoint && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "unset";
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobileMenuOpen, setIsMobileMenuOpen, breakpoint]);
}
