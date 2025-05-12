import { cn } from "@/lib/utils";
import { VscTools } from "react-icons/vsc";
import { LuCable } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { PiScrewdriverLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import LightBulbIcon from "./icons/LightBulbIcon";

const classListItems = cn(["py-4 flex flex-col items-start px-8"]);
const classHeading = cn([
    "text-xl font-semibold text-charcoal",
    "text-center",
    "mb-2",
]);
const classText = cn(["text-charcoal", "mb-2"]);

export function HomePageServices() {
    return (
        <div className="bg-zinc-50">
            <div className="container mx-auto py-10 px-20">
                <h2 className="text-4xl font-bold text-center text-black mb-10">
                    Our Services
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className={classListItems}>
                        <LightBulbIcon icon="van" />
                        <h3 className={classHeading}>
                            24/7 hour emergency service
                        </h3>
                        <p className={classText}>
                            We offer a wide range of residential electrical
                            services, including installations, repairs, and
                            maintenance.
                        </p>
                    </div>
                    <div className={classListItems}>
                        <LightBulbIcon icon="tools" />
                        <h3 className={classHeading}>
                            General electrical work
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
                            Data cabling and communications
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
