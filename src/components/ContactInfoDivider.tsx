import { InViewSection } from "./InViewSection";
import { Button } from "./ui/button";

function ContactCard({ title, text }: { title: string; text: string }) {
    return (
        <div>
            <h6 className="text-sm font-medium text-gray-600 tracking-wide mb-3">
                {title}
            </h6>
            <h3 className="text-xl font-bold text-gray-900">{text}</h3>
        </div>
    );
}

export function ContactInfoDivider() {
    return (
        <div className="w-full py-10  md:py-16 bg-gray-200">
            <div className="container mx-auto px-6 md:flex space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-8/12 space-y-8">
                    <InViewSection>
                        <h2 className="h2-heading-text">
                            Request a quote today for your next project!
                        </h2>
                    </InViewSection>
                    <InViewSection>
                        <Button
                            className="rounded-full group"
                            size={"lg"}
                            hasArrow={true}>
                            Get a Quote
                        </Button>
                    </InViewSection>
                </div>
                <div className="space-y-8 md:w-4/12 flex flex-col">
                    <InViewSection>
                        <ContactCard title="Call Us" text={"0456 365 633"} />
                    </InViewSection>
                    <InViewSection>
                        <ContactCard
                            title="Email Us"
                            text={"info@example.com"}
                        />
                    </InViewSection>
                </div>
            </div>
        </div>
    );
}
