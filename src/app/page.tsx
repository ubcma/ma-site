import CopyTextButton from "@/components/CopyTextButton";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getFilenames } from "@/lib/getFilenames";
import {
  Globe,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-end py-24 bg-black text-white overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/team-pic.jpg')",
        }}
      />

      <div className="relative z-10 text-left lg:px-24 px-8">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          UBC Marketing Association
        </h1>
        <p className="text-xl  md:text-2xl mb-6 text-neutral-100">
          Marketing starts here.
        </p>
        <div className="flex flex-row gap-2">
          <Link href="https://app.ubcma.ca/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-ma-red hover:bg-ma-red hover:brightness-90"
            >
              Become a Member
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="text-ma-red hover:text-ma-red hover:brightness-90"
            >
              {" "}
              Get in touch{" "}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-ma-red/10 to-ma-red/80 " />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/30 to-black/50 " />
      <div className="absolute inset-0 z-0 bg-ma-red/30 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]" />
    </main>
  );
};

export default async function Home() {
  const filenames = await getFilenames();

  return (
    <div>
      <HeroSection />

      <div className="lg:mx-48 mx-8 my-48 space-y-32">
        <section id="our-mission" className="scroll-mt-48">
          <div className="container mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl lg:text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-md lg:text-lg text-primary">
                The UBC Marketing Association is dedicated to empowering
                students with the skills and knowledge needed to excel in the
                field of marketing. We provide a platform for learning,
                networking, and professional development.
              </p>
              <p className="text-md lg:text-lg text-primary">
                Our mission is simple: <strong>Educate</strong>,{" "}
                <strong>Engage</strong>, and <strong>Execute</strong>. Our goal is
                to execute events that educate students about marketing and
                engage students to apply the knowledge they&apos;ve learned.
              </p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <Image
                src="/image/mission-1.jpeg"
                alt="UBC Marketing Association Team"
                width={500}
                height={500}
                className="w-auto h-auto aspect-square bg-gray-200 rounded-lg object-cover rotate-1"
              />
              <Image
                src="/image/mission-2.jpg"
                alt="UBC Marketing Association Team"
                width={500}
                height={500}
                className="w-auto h-auto aspect-square bg-gray-200 rounded-lg object-cover -rotate-1"
              />
              <Image
                src="/image/mission-3.jpg"
                alt="UBC Marketing Association Team"
                width={500}
                height={500}
                className="w-auto h-auto aspect-square bg-gray-200 rounded-lg object-cover rotate-1"
              />
              <Image
                src="/image/mission-4.jpg"
                alt="UBC Marketing Association Team"
                width={500}
                height={500}
                className="w-auto h-auto aspect-square bg-gray-200 rounded-lg object-cover -rotate-1"
              />
            </div>
          </div>
        </section>

        <section id="partners" className="space-y-2 scroll-mt-48">
          <h3 className="w-full text-center font-medium text-md text-neutral-500">
            We are proud to connect students with leading companies in the
            marketing industry.
          </h3>
          <Marquee speed={50} gradient className="bg-white mt-8">
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

        <section id="studios" className="space-y-2 scroll-mt-48">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-16">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-6xl lg:text-8xl font-bold"> UBCMA </h1>
              <h1 className="text-6xl lg:text-8xl font-bold text-ma-red"> Studios </h1>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p>
                The first and only marketing consultancy run by students at UBC.
                Studios aims to empower your brand through playful and effective
                marketing strategies that break traditional norms.
              </p>
              <Button
                size="lg"
                className="bg-ma-red hover:bg-ma-red hover:brightness-90 mt-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-40 space-y-4">
          <h2 className="text-xl lg:text-3xl font-bold">Contact Us</h2>
          <p className="text-md lg:text-lg text-primary mb-8">
            Get in touch with us for any inquiries, support, or
            membership-related questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-neutral-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-md font-semibold">
                <GraduationCap className="w-5 h-5" />
                Students
              </div>
              <p className="text-neutral-400 text-sm">
                For students with general questions or concerns.
              </p>
              <CopyTextButton text="hello@ubcma.ca" label="Copy Email" />
            </div>

            <div className="border border-neutral-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-md font-semibold">
                <Handshake className="w-5 h-5" />
                Partners & Sponsors
              </div>
              <p className="text-neutral-400 text-sm">
                For inquiries related to partnerships, sponsorships, or
                collaborations.
              </p>
              <CopyTextButton text="nealsian700@gmail.com" label="Copy Email" />
            </div>

            <div className="border border-neutral-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-md font-semibold">
                <Globe className="w-5 h-5" />
                Studios
              </div>
              <p className="text-neutral-400 text-sm">
                For businesses looking for marketing consultancy services
              </p>
              <CopyTextButton
                text="arianazhassuzak@gmail.com"
                label="Copy Email"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
