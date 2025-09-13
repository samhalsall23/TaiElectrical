import { ArrowRight, ArrowDown } from "lucide-react";
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
}: {
    stepNumber: number;
    title: string;
    description: string;
}) {
    return (
        <InViewSection>
            <li className="relative flex flex-col md:flex-row md:items-start p-8  lg:p-10  xl:p-16 bg-gray-50">
                <div className="flex flex-col flex-1">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-300 text-gray-900 font-bold text-xl mb-6">
                        {stepNumber}
                    </div>
                    <h3 className="text-gray-900 text-xl md:text-2xl font-bold mb-4 leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed me-8 ">
                        {description}
                    </p>
                </div>
                {processSteps.length !== stepNumber && (
                    <>
                        {/* Desktop Arrow (Right) */}
                        <ArrowRight className="hidden lg:block text-yellow ml-4 h-8 w-8 mt-8" />
                        {/* Mobile Arrow (Down) */}
                        <ArrowDown className="lg:hidden text-yellow h-8 w-8 absolute bottom-4 right-4" />
                    </>
                )}
            </li>
        </InViewSection>
    );
}

export function OurProcess() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 space-y-8">
                <InViewSection className="space-y-8">
                    <SlashHeader text="WHAT TO EXPECT" />
                    <h2 className="h2-heading-text mt-4">
                        Our simple and effective 3-step process
                    </h2>
                </InViewSection>
                <ul className="mt-10 space-y-4 md:space-y-0 md:grid lg:grid-cols-3 md:gap-0.5">
                    {processSteps.map((step) => (
                        <ProcessStep
                            key={step.stepNumber}
                            stepNumber={step.stepNumber}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
