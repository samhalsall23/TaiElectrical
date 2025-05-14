import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export function ProjectsSection() {
    return (
        <div className="bg-gray-50 pt-10 flex justify-center min-h-screen">
            <div className="text-center w-3/5">
                <h2 className="text-gray-900 text-3xl font-extrabold mb-8">
                    Our Projects
                </h2>
                <div className="container mx-auto">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="bg-white flex w-full">
                                <div className="flex flex-col w-1/2 p-8 text-left">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        Project 1
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        All electrical work has been completed
                                        at Viewbank, including:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                3x double power points installed
                                                for the benchtops
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                New power points for the fridge,
                                                freezer, microwave, dishwasher,
                                                and cooktop
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Power supply for the rangehood
                                                install
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Oven and microwave installed and
                                                ready for use
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Existing kitchen fluorescent
                                                batten light replaced with a new
                                                LED light fitting (supplied by
                                                owner)
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Old batten holder replaced with
                                                a small pendant light (also
                                                supplied by owner)
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-yellow mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                Existing oven circuit updated to
                                                include a safety switch
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-1/2 relative">
                                    <Image
                                        src="/assets/office-building.jpg"
                                        fill
                                        alt="Project 1"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex flex-col items-center justify-center h-96 bg-gray-200 rounded-lg shadow-lg p-6 m-4">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Project 2
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Description of project 2.
                                    </p>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                                        View Details
                                    </button>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
