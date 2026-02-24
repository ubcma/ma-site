"use client";

import Image from "next/image";

interface ProfileProps {
  name: string;
  imageURL: string;
  bio: string;
  role: string;
}

const Profile = ({ name, imageURL, bio, role }: ProfileProps) => {
  return (
    <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
      {/* Profile Image */}
      <Image
        src={imageURL}
        alt={`${name} headshot`}
        fill
        className="object-cover transition-all duration-300 group-hover:brightness-50"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Default state: Name and Role at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-md opacity-90">{role}</p>
      </div>

      {/* Hover state: Bio/Description */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="px-4 text-md leading-relaxed">{bio}</p>
      </div>

      {/* Gradient overlay - changes on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/100 to-black/30 to-transparent" />
    </div>
  );
};

export default Profile;
