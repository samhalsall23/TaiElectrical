import { InViewSection } from "./InViewSection";
import { SlashHeader } from "./SlashHeader";

export function ReviewsNew() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="space-y-8">
                    <InViewSection className="space-y-8">
                        <SlashHeader text="OUR CLIENTS"></SlashHeader>
                        <h2 className="h2-heading-text">
                            What our clients have to say about our services
                        </h2>
                    </InViewSection>
                    <InViewSection className="w-full border-8 border-gray-200 h-96 rounded-xl flex items-center justify-center ">
                        <p className="text-2xl text-zinc-900">
                            Future Google Review will go here
                        </p>
                        {/* Placeholder for future reviews carousel */}
                    </InViewSection>
                </div>
            </div>
        </section>
    );
}
