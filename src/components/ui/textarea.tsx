import * as React from "react";

import { cn } from "@/lib/utils";

const TextArea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea"> & { isError?: boolean }
>(({ className, isError, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "bg-white text-zinc-900 placeholder:text-zinc-600",
                "flex min-h-[80px] w-full rounded-md border border-zinc-300 px-3 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus:border-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 resize-none md:text-sm",
                isError &&
                    "border-red-600 focus-visible:ring-red-600 text-red-600 placeholder:text-red-600",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
TextArea.displayName = "TextArea";

export { TextArea };
