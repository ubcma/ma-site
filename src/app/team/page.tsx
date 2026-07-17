import Footer from "@/components/Footer";
import HeroSection from "@/components/team-page/HeroSection";
import StatementSection from "@/components/team-page/StatementSection";
import Leadership from "@/components/team-page/Leadership";
import Marketing from "@/components/team-page/Marketing";
import CorporateRelations from "@/components/team-page/CorporateRelations";
import Events from "@/components/team-page/Events";
import Tech from "@/components/team-page/Tech";
import Finance from "@/components/team-page/Finance";
import Internal from "@/components/team-page/Internal";
import Studios from "@/components/team-page/Studios";
import Advisors from "@/components/team-page/Advisors";
import CallToAction from "@/components/team-page/CallToAction";

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatementSection />

      {/* Team Members */}
      <div className="lg:mx-48 mx-8 mb-24">
        <div className="space-y-16">
          <Leadership />
          <Marketing />
          <CorporateRelations />
          <Events />
          <Tech />
          <Finance />
          <Internal />
          <Studios />
          <Advisors />
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
}
