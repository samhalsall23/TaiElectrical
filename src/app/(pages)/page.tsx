import {
    GetStarted,
    HeroSection,
    HomePageServices,
    ProjectsSection,
    ReviewsSection,
    AboutUs,
} from "@/components";

export default function Home() {

    return (
        <>
            <HeroSection />
            <HomePageServices />
            <AboutUs />
            <ProjectsSection />
            <ReviewsSection />
            <div className="py-12 bg-gray-50"></div>
            <GetStarted />
        </>
    );
}
