import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

export function GetStarted({
    onClickContactUs,
}: {
    onClickContactUs: () => void;
}) {
    return (
        <section className="relative py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-slate-100 ">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-yellow-100 opacity-40 blur-3xl z-0"
                aria-hidden="true"
            />
            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight mb-6">
                Ready to Get Started?
            </h2>
            <p className="relative z-10 text-lg md:text-2xl text-gray-700 text-center mb-8 max-w-2xl">
                Call us on{" "}
                <span className="font-bold text-black">0444 444 444</span> or
                get a fast, free quote now.
            </p>

            <Button
                onClick={onClickContactUs}
                className="relative z-10 bg-yellow text-black font-bold py-6 px-10 rounded-full text-2xl flex items-center gap-3 shadow-md hover:shadow-2xl hover:bg-yellow transition-all duration-200 group transform hover:scale-105">
                Request Quote
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
        </section>
    );
}
