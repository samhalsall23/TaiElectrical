import IconSquare, { IconSquareIconType } from "./icons/IconSquare";
import { InViewSection } from "./InViewSection";
import { SlashHeader } from "./SlashHeader";

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
        <div className="bg-white p-6 rounded-lg">
            <IconSquare icon={icon} />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export function OurServicesNew() {
    return (
        <section className="w-100 bg-gray-100">
            <div className="container">
                <SlashHeader text="WHAT WE DO" />
                <h2 className="h2-heading-text">
                    Dedicated to offering a wide range of services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
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
