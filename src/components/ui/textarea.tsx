import * as React from "react";
import { FaRegCommentDots } from "react-icons/fa"; // Example icon for the textarea

import { cn } from "@/lib/utils";

interface TextAreaProps extends React.ComponentProps<"textarea"> {
    isError?: boolean; // Add isError prop
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, isError, ...props }, ref) => {
        return (
            <div className="relative flex w-full bg-transparent">
                <textarea
                    className={cn(
                        "flex w-full h-24 transition-colors bg-transparent text-black placeholder:text-black focus:outline-none border-b-2 pr-10 resize-none", // Add padding-right for the icon
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
                    <FaRegCommentDots size={20} />
                </div>
            </div>
        );
    }
);
TextArea.displayName = "TextArea";

export { TextArea };
