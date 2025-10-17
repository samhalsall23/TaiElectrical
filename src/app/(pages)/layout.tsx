import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Footer } from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import { LogoVisibilityProvider } from "@/contexts/LogoVisibilityContext";

// Load the Inter font
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap", // Ensures the font swaps quickly for better performance
});

export const metadata: Metadata = {
    title: "Tai Electrical | Professional Electrical Services Melbourne",
    description:
        "Professional electrical services for homes and businesses in Melbourne. Licensed electricians offering installations, repairs, maintenance, and emergency services. Call today for a free quote!",
    keywords: [
        "electrician Melbourne",
        "electrical services",
        "home electrical",
        "commercial electrical",
        "electrical repairs",
        "electrical installation",
        "emergency electrician",
        "licensed electrician",
        "electrical maintenance",
        "Melbourne electrician",
    ],
    authors: [{ name: "Tai Electrical" }],
    creator: "Tai Electrical",
    publisher: "Tai Electrical",
    metadataBase: new URL("https://taielectrical.com.au"), // Replace with your actual domain
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Tai Electrical | Professional Electrical Services Melbourne",
        description:
            "Professional electrical services for homes and businesses in Melbourne. Licensed electricians offering installations, repairs, maintenance, and emergency services.",
        url: "https://taielectrical.com.au", // Replace with your actual domain
        siteName: "Tai Electrical",
        images: [
            {
                url: "/assets/tai-electrical-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Tai Electrical - Professional Electrical Services Melbourne",
            },
        ],
        locale: "en_AU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tai Electrical | Professional Electrical Services Melbourne",
        description:
            "Professional electrical services for homes and businesses in Melbourne. Licensed electricians offering installations, repairs, maintenance, and emergency services.",
        images: ["/assets/tai-electrical-logo.jpg"],
        // creator: "@taielectrical", // Replace with your actual Twitter handle if you have one
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // google: "your-google-verification-code", // Add your Google Search Console verification code
        // yandex: "your-yandex-verification-code", // If you use Yandex
        // yahoo: "your-yahoo-verification-code", // If you use Yahoo
    },
    category: "Electrical Services",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
                {" "}
                <LogoVisibilityProvider>
                    <NewNavbar />
                    {children}
                </LogoVisibilityProvider>
                <Footer />
            </body>
        </html>
    );
}
