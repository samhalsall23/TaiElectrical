import * as React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: "name" | "email" | "phone";
    isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, isError = false, ...props }, ref) => {
        return (
            <div className="relative flex w-full bg-transparent">
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full transition-colors bg-transparent text-black placeholder:text-black focus:outline-none border-b-2 pr-10", // Add padding-right for the icon
                        isError ? "border-red-700" : "border-black",
                        className
                    )}
                    ref={ref}
                    {...props}
                />

                <div
                    className={`absolute right-2 bottom-2 ${
                        isError ? "text-red-700" : "text-black"
                    }`}>
                    {icon === "name" && <FaRegUser size={20} />}
                    {icon === "email" && <MdOutlineMail size={20} />}
                    {icon === "phone" && <FiPhone size={20} />}
                </div>
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
