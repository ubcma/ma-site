import Image from "next/image";

interface ProfileProps {
  name: string;
  imageURL: string;
  bio: string;
  role: string;
}

const Profile = ({ name, imageURL, bio, role }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out cursor-pointer w-full md:w-[30%]">
      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200">
        <Image
          src={imageURL}
          alt={`${name} headshot`}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-ma-red">
          {name}
        </h3>
        
        <p className="text-base font-medium text-black">
          {role}
        </p>
        
        <p className="text-sm text-neutral-600 leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default Profile;