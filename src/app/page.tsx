import Footer from "@/components/Footer";
import { getFilenames, getEventIcons } from "@/lib/getFilenames";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import HeroSection from "@/components/home-page/HeroSection";
import StatementSection from "@/components/home-page/StatementSection";
import MissionSection from "@/components/home-page/MissionSection";
import NumbersSection from "@/components/home-page/NumbersSection";
import EventsSection from "@/components/home-page/EventsSection";
import PartnersSection from "@/components/home-page/PartnersSection";
import StudiosSection from "@/components/home-page/StudiosSection";
import InboxSection from "@/components/home-page/InboxSection";

export default async function Home() {
  const filenames = await getFilenames();
  const eventIcons = await getEventIcons();

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatementSection />
      <MissionSection />
      <NumbersSection />
      <EventsSection />

      {/* Events Scroll Section */}
       <section id="events-scroll" className="scroll-mt-48 py-20 md:mx-20 mx-8">
           <Marquee speed={50} gradient className="bg-white">
             {eventIcons.map((file) => (
               <Image
                 key={file}
                 src={`/image/home-page/event-icons/${file}`}
                 alt={file}
                 width={190}
                 height={190}
                 className="m-2 object-contain"
               />
             ))}
           </Marquee>
           <Marquee speed={50} direction="right" gradient className="bg-white">
             {eventIcons.map((file) => (
               <Image
                 key={file}
                 src={`/image/home-page/event-icons/${file}`}
                 alt={file}
                 width={190}
                 height={190}
                 className="m-2 object-contain"
               />
             ))}
           </Marquee>
       </section>
       <InboxSection />

      {/* Will enable inbox section once api logic for persisting email subscribers is created */}
      {/* <InboxSection /> */}
      <PartnersSection />


      {/* Partners Scroll Section */}
      <section id="partners-scroll" className="py-20 space-y-2 scroll-mt-48">
          <Marquee speed={50} gradient className="bg-white">
            {filenames.map((file) => (
              <Image
                key={file}
                src={`/company-logos/${file}`}
                alt={file}
                width={150}
                height={150}
                className="mx-4 h-24 object-contain"
              />
            ))}
          </Marquee>
      </section>

      <StudiosSection />
      <Footer />
    </div>
  );
}
