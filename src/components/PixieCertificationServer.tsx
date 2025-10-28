// Server-side component for SEO-friendly rendering
import { PixieCertificationClient } from "./PixieCertification";
import { LuArrowUpRight } from "react-icons/lu";

interface PixieCertificationProps {
    certificateImageSrc: string;
}

export function PixieCertification({
    certificateImageSrc,
}: PixieCertificationProps) {
    return (
        <span>
            <PixieCertificationClient certificateImageSrc={certificateImageSrc}>
                <span>Pixie Certified</span>
                <span className="text-zinc-800 font-bold">
                    <LuArrowUpRight
                        size={12}
                        className="inline-block mb-3 ml-0.5"
                        strokeWidth={3}
                    />
                </span>
            </PixieCertificationClient>{" "}
            Smart Home Installer
        </span>
    );
}
