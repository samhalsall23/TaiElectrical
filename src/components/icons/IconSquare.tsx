import { FC } from "react";

import { VscTools } from "react-icons/vsc";
import { LuCable } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { PiScrewdriverLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { PiVan } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";
import { PiFactory } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface IconSquareProps {
    icon?:
        | "light-bulb"
        | "home"
        | "tools"
        | "cable"
        | "screwdriver"
        | "van"
        | "house"
        | "factory"
        | "office"
        | "check";
    size?: "md" | "lg";
}

const IconSquare: FC<IconSquareProps> = ({
    icon = "light-bulb",
    size = "lg",
}) => {
    const isSize = (s: "md" | "lg") => s === size;

    const divClass = cn([
        "bg-amber-100 rounded-md flex items-center justify-center",
        isSize("md") && "w-8 h-8 p-2.5",
        isSize("lg") && "w-12 h-12 p-2 mb-4 border-4 border-amber-200 ",
    ]);
    return (
        <div className={divClass}>
            {icon === "light-bulb" && (
                <FaRegLightbulb className="text-black" size={24} />
            )}
            {icon === "home" && (
                <IoHomeOutline className="text-black" size={24} />
            )}
            {icon === "tools" && <VscTools className="text-black" size={24} />}
            {icon === "cable" && <LuCable className="text-black" size={24} />}
            {icon === "screwdriver" && (
                <PiScrewdriverLight className="text-black" size={24} />
            )}
            {icon === "van" && <PiVan className="text-black" size={24} />}
            {icon === "house" && <BsHouse className="text-black" size={24} />}
            {icon === "factory" && (
                <PiFactory className="text-black" size={24} />
            )}
            {icon === "office" && (
                <HiOutlineOfficeBuilding className="text-black" size={24} />
            )}
            {icon === "check" && (
                <FaCheck className="text-amber-500 " size={24} />
            )}
        </div>
    );
};

export default IconSquare;
