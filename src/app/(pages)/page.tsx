import { LoadingWrapper } from "@/components/shared";
import {
    AboutUs,
    BelowHero,
    ContactForm,
    ContactInfoDivider,
    HeroSection,
    OurProcess,
    OurServices,
    Projects,
    Reviews,
} from "@/components/sections";

export default function Home() {
    return (
        <LoadingWrapper>
            <HeroSection />
            <BelowHero />
            <AboutUs />
            <OurProcess />
            <OurServices />
            <ContactInfoDivider />
            <Reviews />
            <Projects />
            <ContactForm />
        </LoadingWrapper>
    );
}
