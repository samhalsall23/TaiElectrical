// app/page.tsx

import LoadingWrapper from "@/components/LoadingWrapper";
import { AboutUsNew } from "@/components/AboutUsNew";
import { BelowHero } from "@/components/BelowHero";
import { ContactFormNew } from "@/components/ContactFormNew";
import { ContactInfoDivider } from "@/components/ContactInfoDivider";
import { NewHeroSection } from "@/components/NewHeroSection";
import { OurProcessTest } from "@/components/OurProcessTest";
import { OurServicesNew } from "@/components/OurServicesNew";
import { ProjectsNew } from "@/components/ProjectsNew";
import { ReviewsNew } from "@/components/ReviewsNew";

export default function Home() {
    return (
        <LoadingWrapper>
            <NewHeroSection />
            <BelowHero />
            <AboutUsNew />
            <OurProcessTest />
            <OurServicesNew />
            <ContactInfoDivider />
            <ReviewsNew />
            <ProjectsNew />
            <ContactFormNew />
        </LoadingWrapper>
    );
}
