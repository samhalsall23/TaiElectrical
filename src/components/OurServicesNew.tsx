import IconSquare, { IconSquareIconType } from "./icons/IconSquare";
import { InViewSection } from "./InViewSection";
import { SlashHeader } from "./SlashHeader";
import { Button } from "./ui/button";

const services = [
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
];

function ServiceCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: IconSquareIconType;
}) {
    return (
        <div className="bg-white p-8 rounded-2xl h-full flex flex-col shadow-sm border border-gray-100">
            <div className="mb-6">
                <IconSquare icon={icon} />
            </div>
            <h6 className="text-xl font-bold text-gray-900 mb-4">{title}</h6>
            <p className="text-gray-600 flex-grow leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export function OurServicesNew() {
    return (
        <section className="relative w-100 pt-8 bg-gray-50">
            {/* Curved transition from white to gray */}
            <div
                className="absolute top-0 left-0 w-full h-16 bg-white"
                style={{
                    clipPath: "ellipse(100% 100% at 50% 0%)",
                }}></div>

            <div className="container mx-auto space-y-8 px-6 relative z-10 pt-20">
                <InViewSection className="space-y-8 ">
                    <div className="flex justify-between items-start ">
                        <div className="space-y-8 flex flex-col me-1">
                            <SlashHeader text="WHAT WE DO" />
                            <h2 className="h2-heading-text">
                                Dedicated to offering a wide range of services
                            </h2>
                            <Button
                                size={"md"}
                                className="md:hidden mt-2 font-semibold rounded-full w-fit group hover:border-amber-400 hover:bg-amber-400"
                                hasArrow={true}>
                                Get a Quote
                            </Button>
                        </div>
                        <Button
                            size={"md"}
                            className="hidden md:flex mt-6 font-semibold rounded-full group w-full sm:w-auto hover:border-amber-400 hover:bg-amber-400"
                            hasArrow={true}>
                            Get a Quote
                        </Button>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 pt-2">
                    {services.map((service, index) => (
                        <InViewSection
                            key={index}
                            className={`delay-[${(index + 1) * 100}ms]`}>
                            <ServiceCard
                                title={service.title}
                                description={service.text}
                                icon={service.icon as IconSquareIconType}
                            />
                        </InViewSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
