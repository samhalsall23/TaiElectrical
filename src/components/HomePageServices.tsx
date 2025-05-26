import { cn } from "@/lib/utils";
import IconSquare from "./icons/IconSquare";

const classListItems = cn([
    "flex flex-col items-start text-left p-6 transition-transform transform hover:scale-105 hover:shadow-xl",
]);
const classHeading = cn(["text-2xl font-semibold text-gray-800 mb-2"]);
const classText = cn(["text-gray-600 text-lg"]);

export function HomePageServices() {
    return (
        <>
            {/* <div className="bg-amber-200 py-8">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-4xl text-center text-gray-900">
                        Our Services
                    </h2>
                    <h3 className="text-lg text-center text-gray-800 mt-2">
                        Tai Eletrical is a leading provider of electrical
                        services
                    </h3>
                </div>
            </div> */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-5xl font-extrabold text-center ">
                            <span className="text-gray-900">Welcome to </span>
                            <span className="text-gray-900">
                                Tai Electrical
                            </span>
                        </h2>
                        <h3 className="text-lg text-center text-gray-800 mt-2">
                            Your Trusted Partner for All Electrical Needs
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={classListItems}>
                            <IconSquare icon="van" />
                            <h3 className={classHeading}>
                                24/7 Emergency Service
                            </h3>
                            <p className={classText}>
                                We offer a wide range of residential electrical
                                services, including installations, repairs, and
                                maintenance.
                            </p>
                        </div>
                        <div className={classListItems}>
                            <IconSquare icon="tools" />
                            <h3 className={classHeading}>
                                General Electrical Work
                            </h3>
                            <p className={classText}>
                                Our team is equipped to handle all your
                                commercial electrical needs, from wiring to
                                lighting solutions.
                            </p>
                        </div>
                        <div className={classListItems}>
                            <IconSquare icon="light-bulb" />
                            <h3 className={classHeading}>Lighting</h3>
                            <p className={classText}>
                                We specialize in industrial electrical services,
                                ensuring safety and efficiency in your
                                operations.
                            </p>
                        </div>
                        <div className={classListItems}>
                            <IconSquare icon="cable" />
                            <h3 className={classHeading}>
                                Data Cabling & Communications
                            </h3>
                            <p className={classText}>
                                We specialize in industrial electrical services,
                                ensuring safety and efficiency in your
                                operations.
                            </p>
                        </div>
                        <div className={classListItems}>
                            <IconSquare icon="screwdriver" />
                            <h3 className={classHeading}>
                                Appliance Installations
                            </h3>
                            <p className={classText}>
                                We specialize in industrial electrical services,
                                ensuring safety and efficiency in your
                                operations.
                            </p>
                        </div>
                        <div className={classListItems}>
                            <IconSquare icon="home" />
                            <h3 className={classHeading}>Renovations</h3>
                            <p className={classText}>
                                We specialize in industrial electrical services,
                                ensuring safety and efficiency in your
                                operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePageServices;
