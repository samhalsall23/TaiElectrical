import { RefObject } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";
export function ContactForm({
    nameRef,
}: {
    nameRef: RefObject<HTMLInputElement>;
}) {
    return (
        <div className="flex bg-yellow flex-col p-8 rounded-md">
            {" "}
            <h2 className="text-3xl md:text-4xl text-black font-black">
                Get A Free Quote
            </h2>
            <form>
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2">
                        <div>
                            <Input
                                ref={nameRef}
                                type="text"
                                id="name"
                                name="name"
                                icon="name"
                                placeholder="Your Name"
                                className="mt-1 w-full"
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                icon="email"
                                placeholder="Your Email"
                                className="mt-1 w-full"
                            />
                        </div>
                        <div>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                icon="phone"
                                placeholder="Your Phone Number"
                                className="mt-1 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <TextArea
                            className="w-full h-24 md:h-full"
                            placeholder="Your Message"></TextArea>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="mt-4 bg-black text-yellow font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition w-full md:w-auto">
                    Submit
                </Button>
            </form>
        </div>
    );
}
