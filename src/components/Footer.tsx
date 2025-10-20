export function Footer() {
    return (
        <footer className="bg-gray-100 text-zinc-600 pt-6 pb-2">
            <div className="container mx-auto text-center font-bold">
                <div className="flex justify-center mb-4 gap-3">
                    <p className="text-sm">REC - 35937</p>
                    <p className="text-sm"> | </p>
                    <p className="text-sm">ABN - 21710191697</p>
                </div>
                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} Tai Electrical. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
