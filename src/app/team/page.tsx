import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import teamData from "@/constants/team.json";

interface TeamMember {
  name: string;
  fileName: string;
  bio: string;
  role: string;
}

export default function Team() {
  // Define portfolio groupings
  const portfolios = [
    {
      name: "Leadership",
      roles: ["Co-President"]
    },
    {
      name: "Marketing Portfolio",
      roles: ["Vice President Marketing", "Design Director", "Visual Media Director", "Marketing Director"]
    },
    {
      name: "Corporate Relations Portfolio", 
      roles: ["Vice President Corporate Relations", "Corporate Relations Director", "Partnerships Director"]
    },
    {
      name: "Events Portfolio",
      roles: ["Vice President Events", "Logistics Director"]
    },
    {
      name: "Tech Portfolio",
      roles: ["Vice President Tech", "Tech Director"]
    },
    {
      name: "Finance Portfolio",
      roles: ["Vice President Finance"]
    },
    {
      name: "Internal Portfolio",
      roles: ["Vice President Internal"]
    },
    {
      name: "Studios Portfolio",
      roles: ["Vice President Studios", "Studios Director"]
    },
    {
      name: "Advisors",
      roles: ["Advisor"]
    }
  ];

  // Group members by role
  const groupedMembers = teamData.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    // Map "file-name" from JSON to "fileName" for TeamMember type
    const mappedMember: TeamMember = {
      name: member.name,
      fileName: member["file-name"],
      bio: member.bio,
      role: member.role,
    };
    acc[member.role].push(mappedMember);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-ma-red/5 to-white py-24">
        <div className="lg:mx-48 mx-8 pt-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-black">
              Meet Our <span className="text-ma-red">Team</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
              Get to know the passionate individuals who make the UBC Marketing Association 
              a thriving community for students to learn, grow, and excel in marketing.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="lg:mx-48 mx-8 my-24">
        <div className="space-y-16">
          {portfolios.map((portfolio) => {
            // Get all members for this portfolio
            const portfolioMembers = portfolio.roles.flatMap(role => 
              groupedMembers[role] || []
            );

            // Skip if no members in this portfolio
            if (portfolioMembers.length === 0) return null;

            return (
              <section key={portfolio.name} className="space-y-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-black">
                  {portfolio.name}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                  {portfolioMembers.map((member) => (
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
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-white to-ma-red/5 py-24">
        <div className="lg:mx-48 mx-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Become part of our community and start your journey in marketing excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.ubcma.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ma-red hover:bg-ma-red hover:brightness-90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Become a Member
              </a>
              <a 
                href="mailto:hello@ubcma.ca"
                className="border border-ma-red text-ma-red hover:bg-ma-red hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}