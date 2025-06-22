import BulbIcon from "./icons/BulbIcon";
import IconSquare from "./icons/IconSquare";
import { InViewSection } from "./InViewSection";

export function AboutUs() {
    return (
        <div className="bg-gray-50 pb-5">
            <InViewSection>
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex items-center text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col items-center w-4/5 md:w-3/5">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                                One Stop Solution For Your Electrical Repairs,
                                Installisation and 24/7 Maintenance
                            </h3>
                            <p className="text-gray-600">
                                We are a team of experienced electricians
                                dedicated to providing top-notch electrical
                                services for residential and commercial
                                properties. Our mission is to ensure your
                                electrical systems are safe, efficient, and up
                                to code.
                            </p>
                            <ul className="grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10 px-4 hidden xs:grid">
                                <li className="flex gap-3 items-center">
                                    <IconSquare icon="house" />
                                    <span className="text-gray-700 font-semibold">
                                        Domestic
                                    </span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <IconSquare icon="office" />
                                    <span className="text-gray-700 font-semibold">
                                        Commercial
                                    </span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <IconSquare icon="factory" />
                                    <span className="text-gray-700 font-semibold">
                                        Industrial
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 md:w-2/5 flex justify-end -me-44">
                            <BulbIcon width="300px" height="300px" />
                        </div>
                    </div>
                </div>
                <div className="container block xs:hidden mx-auto px-6 lg:px-20 mt-10 bg-gray-50">
                    <ul className="grid grid-cols-2 gap-6 w-full mt-10 px-4">
                        <li className="flex gap-3 items-center">
                            <IconSquare icon="house" />
                            <span className="text-gray-700 font-semibold">
                                Domestic
                            </span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <IconSquare icon="office" />
                            <span className="text-gray-700 font-semibold">
                                Commercial
                            </span>
                        </li>
                        <li className="flex gap-3 items-center justify-center col-span-2">
                            <IconSquare icon="factory" />
                            <span className="text-gray-700 font-semibold">
                                Industrial
                            </span>
                        </li>
                    </ul>
                </div>
            </InViewSection>
        </div>
    );
}
