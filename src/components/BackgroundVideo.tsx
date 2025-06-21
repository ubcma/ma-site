"use client";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/gateways.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
