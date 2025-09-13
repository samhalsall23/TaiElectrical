type SlashHeaderProps = {
    text: string;
};

export function SlashHeader({ text }: SlashHeaderProps) {
    return (
        <div className="flex items-center justify-center lg:justify-start gap-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-yellow font-black">
                {"//"}
            </h3>
            <h3 className="ps-2 text-lg sm:text-xl lg:text-2xl font-black text-zinc-800 tracking-wide">
                {text}
            </h3>
        </div>
    );
}
