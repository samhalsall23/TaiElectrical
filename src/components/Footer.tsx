export function Footer() {
    return (
        <footer className="bg-gray-100 text-zinc-600 pt-6 pb-2">
            <div className="container mx-auto text-center font-bold">
                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} Tai Electrical. All rights
                    reserved.
                </p>
                <div className="flex justify-center">
                    <p className="text-sm mb-4">REC - 35937</p>
                </div>
            </div>
        </footer>
    );
}
