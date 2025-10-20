import { ABN_NUMBER, REC_NUMBER } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-gray-100 text-zinc-600 pt-6 pb-2">
            <div className="container mx-auto text-center font-bold">
                <div className="flex justify-center mb-4 gap-3">
                    <p className="text-sm">{`REC - ${REC_NUMBER}`}</p>
                    <p className="text-sm"> | </p>
                    <p className="text-sm">{`ABN - ${ABN_NUMBER}`}</p>
                </div>
                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} Tai Electrical. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
