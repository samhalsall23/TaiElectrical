// context/LogoVisibilityContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type LogoVisibilityContextType = {
    showLogo: boolean;
    setShowLogo: (visible: boolean) => void;
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

    return (
        <LogoVisibilityContext.Provider value={{ showLogo, setShowLogo }}>
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
