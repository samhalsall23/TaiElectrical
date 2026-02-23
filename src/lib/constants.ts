export const SITE_INSTAGRAM = "https://www.instagram.com/taielectrical/";
export const SITE_PHONE_NUMBER = "0468 567 310";
export const SITE_EMAIL_ADDRESS = "tony@taielectrical.com.au";

export const QUOTE_BUTTON_TEXT = "Get a Quote";
export const VIEW_SERVICES_TEXT = "View Services";
export const CALL_US_LINK = `tel:${SITE_PHONE_NUMBER.replace(/\s+/g, "")}`;

export const NAVBAR_HEIGHT = 80;

export const ABN_NUMBER = "21710191697";
export const REC_NUMBER = "35937";

export const PROCESS_STEPS = [
    {
        stepNumber: 1,
        title: "Initial Consultation",
        description:
            "We start by understanding your needs and assessing the project requirements.",
    },
    {
        stepNumber: 2,
        title: "Planning & Design",
        description:
            "Our team creates a tailored plan and design to meet your specific needs and budget.",
    },
    {
        stepNumber: 3,
        title: "Execution & Support",
        description:
            "We implement the plan with precision and provide ongoing support to ensure satisfaction.",
    },
] as const;

export const SERVICES = [
    {
        icon: "van",
        title: "24/7 Emergency Service",
        text: "We offer a wide range of residential electrical services, including installations, repairs, and maintenance.",
    },
    {
        icon: "tools",
        title: "General Electrical Work",
        text: "Our team is equipped to handle all your commercial electrical needs, from wiring to lighting solutions.",
    },
    {
        icon: "light-bulb",
        title: "Lighting",
        text: "We specialize in industrial electrical services, ensuring safety and efficiency in your operations.",
    },
    {
        icon: "cable",
        title: "Data Cabling & Communications",
        text: "Structured cabling and network setup for homes and businesses.",
    },
    {
        icon: "screwdriver",
        title: "Appliance Installations",
        text: "Efficient and safe installation of ovens, cooktops, and more.",
    },
    {
        icon: "home",
        title: "Renovations",
        text: "Electrical upgrades for your home improvement projects.",
    },
] as const;
