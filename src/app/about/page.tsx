import HeroSection from "@/components/about-page/HeroSection";
import StatementSection from "@/components/about-page/StatementSection";
import Footer from "@/components/Footer";
import VideoSection from "@/components/about-page/VideoSection";
import CultureSection from "@/components/about-page/CultureSection";

export default function About () {
    return (
        <div>
            <HeroSection />
            <StatementSection />
            <VideoSection />
            <CultureSection />
            <Footer />
        </div>
    );
}