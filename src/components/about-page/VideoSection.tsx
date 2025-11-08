"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";


export default function VideoSection() {
    return (
        <section id="video">
            <div className="flex md:flex-row flex-col items-center justify-between gap-16 md:mx-48 mx-8 py-20">
                <div className="w-[305px] h-[478px] bg-ma-red rounded-lg shadow-lg">
                    <iframe
                        src="https://www.instagram.com/p/DOGxV-SkZXj/embed"
                        width="305"
                        height="478"
                        frameBorder="0"
                        scrolling="no"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center space-y-8 w-full">
                    <h1 className="md:text-5xl text-3xl text-ma-red font-black">
                        More than just a club
                    </h1>
                    <p>
                    Since <span className="italic font-bold">1995</span>, we've been the launchpad for students who want more than just textbook knowledge. We're where theory meets practice, where ambition meets opportunity, and where curiosity meets community.
                    </p>
                    <p>
                    From hosting <span className="italic font-bold">Western Canada's largest marketing conference</span> to running UBC's only <span className="italic font-bold">student-led marketing consultancy</span>, UBCMA is where you'll find the tools, connections, and experiences to launch your marketing career—and have a damn good time doing it.

                    </p>

                </div>
            </div>
        </section>
    );
}