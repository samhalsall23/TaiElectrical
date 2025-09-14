import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
    "z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "border-2 border-yellow bg-yellow text-primary-foreground shadow hover:bg-primary/90 text-zinc-800",
                outline:
                    "border-2 border-zinc-800 text-zinc-800 bg-background shadow-sm",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                md: "h-8 xl:h-8 rounded-md px-4 xl:px-8 py-6 text-md lg:text-lg xl:text-xl",
                lg: "h-8 xl:h-10 rounded-md px-6 xl:px-12 py-6 text-lg lg:text-xl xl:text-2xl",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    hasArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            hasArrow = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}>
                {props.children}
                {hasArrow && (
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
