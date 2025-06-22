import { cn } from "@/lib/utils";
import IconSquare from "./icons/IconSquare";
import { InViewSection } from "./InViewSection";

const classListItems = cn([
    "flex flex-col items-start text-left p-6 transition-transform transform hover:scale-105 hover:shadow-xl",
]);
const classHeading = cn(["text-2xl font-semibold text-gray-800 mb-2"]);
const classText = cn(["text-gray-600 text-lg"]);

export function HomePageServices() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-20">
                <InViewSection>
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900">
                            Welcome to <br className="sm:hidden" />
                            <span className="text-gray-900">
                                Tai Electrical
                            </span>
                        </h2>
                        <h3 className="text-lg text-center text-gray-800 mt-2">
                            Your Trusted Partner for All Electrical Needs
                        </h3>
                    </div>
                </InViewSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
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
                    ].map((item, index) => (
                        <InViewSection
                            key={index}
                            className={`delay-[${(index + 1) * 100}ms]`}>
                            <div className={classListItems}>
                                <IconSquare icon={item.icon} />
                                <h3 className={classHeading}>{item.title}</h3>
                                <p className={classText}>{item.text}</p>
                            </div>
                        </InViewSection>
                    ))}
                </div>
            </div>
        </div>
    );
}
