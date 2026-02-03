import Profile from "@/components/Profile";
import teamData from "@/constants/team.json";

interface TeamMember {
  name: string;
  fileName: string;
  bio: string;
  role: string;
}

const ROLES = ["VP Internal", "First Year Representative"];

export default function Internal() {
  const members: TeamMember[] = teamData
    .filter((member) => ROLES.includes(member.role))
    .map((member) => ({
      name: member.name,
      fileName: member["file-name"],
      bio: member.bio,
      role: member.role,
    }));

  if (members.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="h-px bg-gradient-to-r from-transparent via-ma-red to-transparent" />
      <h2 className="text-2xl lg:text-3xl font-black text-ma-red">
        Internal Portfolio:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Profile
            key={member.name}
            name={member.name}
            imageURL={`/team/${member.fileName}`}
            bio={member.bio}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
}
