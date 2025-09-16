import { cn } from "@/lib/utils";

type SlashHeaderProps = {
    text: string;
    center?: boolean;
};

export function SlashHeader({ text, center = false }: SlashHeaderProps) {
    const slashHeaderDivClass = cn([
        "flex items-center",
        center ? "justify-center lg:justify-start" : "justify-start",
        "gap-2",
    ]);

    return (
        <div className={slashHeaderDivClass}>
            <h3 className="text-md sm:text-lg md:text-xl text-yellow font-black">
                {"//"}
            </h3>
            <h3 className="ps-2 text-md sm:text-lg md:text-xl font-black text-zinc-800 tracking-wide">
                {text}
            </h3>
        </div>
    );
}
