import Image from "next/image";

import { SlashHeader } from "./SlashHeader";
import IconSquare from "./icons/IconSquare";
import { InViewSection } from "./InViewSection";

const aboutUsDotPoints = [
    "Residental, Commercial, Industrial Services",
    "24/7 Emergency Services Available",
    "Free Consultations and Estimates",
];

export function AboutUsDotPoint({ text }: { text: string }) {
    return (
        <li className="text-zinc-600 flex items-center gap-3 py-2 ms-4">
            <IconSquare icon="check" size="md" />
            <p className="text-base leading-relaxed">{text}</p>
        </li>
    );
}

export function AboutUsNew() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <InViewSection className="space-y-8">
                            <SlashHeader text="WHO WE ARE" />
                            <h2 className="h2-heading-text">
                                Over 10 years of experience in the field
                            </h2>
                            <p className="p-heading-text">
                                We are committed to providing high-quality
                                electrical services to our clients. Our team of
                                experienced professionals is dedicated to
                                ensuring your satisfaction with every project we
                                undertake.
                            </p>
                        </InViewSection>
                        <InViewSection>
                            <ul className="space-y-1">
                                {aboutUsDotPoints.map((point, index) => (
                                    <AboutUsDotPoint text={point} key={index} />
                                ))}
                            </ul>
                        </InViewSection>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <InViewSection className="aspect-[4/3] relative">
                                <Image
                                    src={"/assets/male-electrician-working.jpg"}
                                    alt="Professional Electrician"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </InViewSection>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
