import { cn } from "@/lib/utils";
import LightBulbIcon from "./icons/LightBulbIcon";

const classListItems = cn([
    "flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl",
]);
const classHeading = cn(["text-lg font-semibold text-gray-800 mb-2"]);
const classText = cn(["text-gray-600"]);

export function HomePageServices() {
    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className={classListItems}>
                        <LightBulbIcon icon="van" />
                        <h3 className={classHeading}>24/7 Emergency Service</h3>
                        <p className={classText}>
                            We offer a wide range of residential electrical
                            services, including installations, repairs, and
                            maintenance.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="tools" />
                        <h3 className={classHeading}>
                            General Electrical Work
                        </h3>
                        <p className={classText}>
                            Our team is equipped to handle all your commercial
                            electrical needs, from wiring to lighting solutions.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="light-bulb" />
                        <h3 className={classHeading}>Lighting</h3>
                        <p className={classText}>
                            We specialize in industrial electrical services,
                            ensuring safety and efficiency in your operations.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="cable" />
                        <h3 className={classHeading}>
                            Data Cabling & Communications
                        </h3>
                        <p className={classText}>
                            We specialize in industrial electrical services,
                            ensuring safety and efficiency in your operations.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="screwdriver" />
                        <h3 className={classHeading}>
                            Appliance Installations
                        </h3>
                        <p className={classText}>
                            We specialize in industrial electrical services,
                            ensuring safety and efficiency in your operations.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="home" />
                        <h3 className={classHeading}>Renovations</h3>
                        <p className={classText}>
                            We specialize in industrial electrical services,
                            ensuring safety and efficiency in your operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageServices;
