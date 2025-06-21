"use client";

import { copyTextToClipboard } from "@/lib/utils";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ma-red text-white py-16 px-16 rounded-t-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left column */}
        <div className="md:col-span-2 col-span-1">
          <h4 className="text-sm uppercase mb-2 text-white/70">Contact Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            UBC's only marketing focused club
          </h2>

          <Link
            href="https://app.ubcma.ca"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-neutral-700 font-semibold hover:bg-white/90 transition mb-4 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Membership Portal <ArrowUpRight className="w-4 h-4" />
          </Link>

          <p className="text-sm uppercase text-white/70 mb-2 mt-6">
            Email us at
          </p>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors duration-200"
            onClick={() => copyTextToClipboard("hello@ubcma.ca")}
          >
            hello@ubcma.ca
            <Copy className="w-4 h-4" />
          </button>
        </div>

        <div>
          <h4 className="text-sm uppercase mb-4 text-white/70">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-white transition-all duration-200">
            <li>
              <Link
                href="/#our-mission"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Our Mission
              </Link>
            </li>
            <li>
              <Link
                href="/#partners"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/#studios"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Studios
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase mb-4 text-white/70">Contact</h4>
          <ul className="flex flex-col gap-2 text-white transition-all duration-200">
            <li>
              <Link
                href="https://www.facebook.com/UBCMA/"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/ubcma/"
                target="blank"
                className="hover:text-white hover:underline"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/ubcma/"
                target="blank"
                className="hover:text-white hover:underline"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase mb-4 text-white/70">Information</h4>
          <ul className="flex flex-col gap-2 text-white/90">
            <li>
              <Link href="#" className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white hover:underline">
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/70">
        <p>© UBC Marketing Association 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}
