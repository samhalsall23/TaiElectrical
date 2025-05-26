export function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-6">
            <div className="container mx-auto text-center">
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
