import Image from "next/image";
import { SlashHeader } from "./SlashHeader";
import { InViewSection } from "./InViewSection";

const processSteps = [
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
];

function ProcessStep({
    stepNumber,
    title,
    description,
    isLast,
}: {
    stepNumber: number;
    title: string;
    description: string;
    isLast: boolean;
}) {
    return (
        <div className="relative flex items-start gap-4">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-amber-300 to-amber-100"></div>
            )}

            {/* Step Number Circle */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full  from-amber-300 to-amber-400 text-gray-900 font-bold text-lg shadow-lg bg-amber-300">
                {stepNumber}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
                <h3 className="text-gray-900 text-lg font-bold mb-1 leading-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function OurProcessTest() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 lg:items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1 w-full lg:w-1/2">
                        <InViewSection>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <div className="aspect-square lg:aspect-[4/3] relative">
                                    <Image
                                        src={"/assets/office-building.jpg"}
                                        alt="Electrical Process"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </InViewSection>
                    </div>

                    {/* Steps Section */}
                    <div className="order-1 lg:order-2 w-full lg:w-1/2 space-y-10">
                        <InViewSection className="space-y-10">
                            <SlashHeader text="WHAT TO EXPECT" />
                            <h2 className="h2-heading-text">
                                Our simple and effective 3-step process
                            </h2>
                        </InViewSection>

                        <div className="space-y-2">
                            {processSteps.map((step, index) => (
                                <InViewSection
                                    key={step.stepNumber}
                                    className={`delay-[${index * 150}ms]`}>
                                    <ProcessStep
                                        stepNumber={step.stepNumber}
                                        title={step.title}
                                        description={step.description}
                                        isLast={
                                            index === processSteps.length - 1
                                        }
                                    />
                                </InViewSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
