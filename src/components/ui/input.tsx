import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input"> & { isError?: boolean }
>(({ className, type, isError, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "bg-white text-zinc-900 placeholder:text-zinc-600",
                "flex h-12 w-full rounded-md border border-zinc-300 px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus:border-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                isError &&
                    "border-red-600 focus-visible:ring-red-600 text-red-600 placeholder:text-red-600",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
