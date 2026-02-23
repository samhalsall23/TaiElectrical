import { QUOTE_BUTTON_TEXT, SERVICES } from "@/lib/constants";
import { IconSquare, IconSquareIconType } from "@/components/icons";
import { InViewSection, SlashHeader } from "@/components/shared";
import { Button } from "@/components/ui";

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
            <h6 className="text-xl font-bold text-zinc-800 mb-4">{title}</h6>
            <p className="text-zinc-600 flex-grow leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export function OurServices() {
    return (
        <section id="services" className="relative w-full pt-8 bg-gray-50">
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
                                hasArrow={true}
                                buttonType="quote">
                                {QUOTE_BUTTON_TEXT}
                            </Button>
                        </div>
                        <Button
                            size={"md"}
                            className="hidden md:flex mt-6 font-semibold rounded-full group w-full sm:w-auto hover:border-amber-400 hover:bg-amber-400"
                            hasArrow={true}
                            buttonType="quote">
                            {QUOTE_BUTTON_TEXT}
                        </Button>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 pt-2">
                    {SERVICES.map((service, index) => (
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
