import Footer from "@/components/Footer";
import HeroSection from "@/components/studios-page/HeroSection";
import RequestConsultationSection from "@/components/studios-page/RequestConsultationSection";
import MissionSection from "@/components/studios-page/MissionSection";

export default function Studios () {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <RequestConsultationSection />
            <MissionSection />
            <Footer />
        </div>
    );
}