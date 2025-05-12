import * as React from "react";
import { FaRegCommentDots } from "react-icons/fa"; // Example icon for the textarea

import { cn } from "@/lib/utils";

const TextArea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    return (
        <div className="relative flex w-full bg-transparent">
            <textarea
                className={cn(
                    "flex w-full h-24 transition-colors bg-transparent text-black placeholder:text-black focus:outline-none border-b-2 border-black pr-10 resize-none", // Add padding-right for the icon
                    className
                )}
                ref={ref}
                {...props}
            />

            <div className="absolute right-2 bottom-2 text-black">
                <FaRegCommentDots size={20} />
            </div>
        </div>
    );
});
TextArea.displayName = "TextArea";

export { TextArea };
