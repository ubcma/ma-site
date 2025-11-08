"use client";

import { copyTextToClipboard } from "@/lib/utils";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ma-red text-white py-16 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left column */}
        <div className="md:col-span-2 col-span-1">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            {`Have a question, idea, or opportunity?`}
          </h2>

          <p className="text-sm uppercase text-white/70 mb-2 mt-6">
            We're all ears. Reach out to the right team here and we'll get back to you soon!
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-white">Contact Us</h4>
          <ul className="flex flex-col gap-2 text-white transition-all duration-200">
            <li>
              <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors duration-200"
              onClick={() => copyTextToClipboard("hello@ubcma.ca")}
              >
              Students
              <Copy className="w-4 h-4" />
              </button>
            </li>
            <li>
              <button
              className="inline-flex items-center whitespace-nowrap gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors duration-200"
              onClick={() => copyTextToClipboard("corporaterelations@ubcma.ca")}
              >
              Partners & Sponsors
              <Copy className="w-4 h-4" />
              </button>
            </li>
            <li>
              <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors duration-200"
              onClick={() => copyTextToClipboard("studios@ubcma.ca")}
              >
              Studios
              <Copy className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase mb-4 text-white">Social Media</h4>
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
            <li>
              <Link
                href="https://www.tiktok.com/@ubcma.official"
                target="blank"
                className="hover:text-white hover:underline"
              >
                TikTok
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
