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
        | "office";
}

const IconSquare: FC<IconSquareProps> = ({ icon = "light-bulb" }) => {
    return (
        <div className="bg-amber-100 rounded-md p-2 flex items-center justify-center border-4 border-amber-200 w-12 h-12 mb-4">
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
        </div>
    );
};

export default IconSquare;
