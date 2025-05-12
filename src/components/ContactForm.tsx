import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";

export function ContactForm() {
    return (
        <div className="flex bg-yellow flex-col p-8 rounded-md">
            <h2 className="text-4xl text-black font-black">Get A Free Quote</h2>
            <form>
                <div className="flex gap-6 w-full">
                    <div className="flex w-1/2 flex-col gap-4">
                        <div>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="mt-1 w-full"
                            />
                        </div>

                        <div>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="mt-1 w-full"
                            />
                        </div>

                        <div>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="mt-1 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2">
                        <TextArea
                            className="h-full"
                            placeholder="Your Message"></TextArea>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="mt-4 bg-black text-yellow font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition">
                    Submit
                </Button>
            </form>
        </div>
    );
}
