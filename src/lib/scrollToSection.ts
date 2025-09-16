import { NAVBAR_HEIGHT } from "./constants";

export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const elementPosition = element.offsetTop - NAVBAR_HEIGHT;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    }
};
