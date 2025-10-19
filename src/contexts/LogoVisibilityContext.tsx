// context/LogoVisibilityContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type LogoVisibilityContextType = {
    showLogo: boolean;
    setShowLogo: (visible: boolean) => void;
    isReady: boolean;
    setIsReady: (ready: boolean) => void;
};

const LogoVisibilityContext = createContext<
    LogoVisibilityContextType | undefined
>(undefined);

export const LogoVisibilityProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [showLogo, setShowLogo] = useState(false);
    const [isReady, setIsReady] = useState(false);

    return (
        <LogoVisibilityContext.Provider
            value={{ showLogo, setShowLogo, isReady, setIsReady }}>
            {children}
        </LogoVisibilityContext.Provider>
    );
};

export const useLogoVisibility = () => {
    const context = useContext(LogoVisibilityContext);
    if (!context) {
        throw new Error(
            "useLogoVisibility must be used within a LogoVisibilityProvider"
        );
    }
    return context;
};
