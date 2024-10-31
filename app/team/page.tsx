import Image from 'next/image';
import kaml from "@/public/picdev/kamal.svg";
import zakaria from '@/public/picdev/zakaria2.svg'
import zakaria2 from '@/public/picdev/zakaria.svg'
import mostafa from '@/public/picdev/mostafa.svg'
import annas from '@/public/picdev/anass.svg'
import ayoub from '@/public/picdev/ayoub.svg'
import omar from '@/public/picdev/omar.svg'
export const metadata = {
  title: "Our Team - Open PRO",
  description: "Meet the team behind our projects",
};

export default function Team() {
  const teamMembers = [
    { name: "Kamal", role: "Senior Developer", description: "Specializes in creating beautiful and responsive interfaces.", imgSrc: kaml },
    { name: "Zakaria baouali", role: "Full stack Developer", description: "Focuses on building robust and scalable APIs.", imgSrc: zakaria },
    { name: "ENNACHOUM ZAKARIA", role: "Full stack Developer", description: "Designs intuitive and engaging user experiences.", imgSrc: zakaria2 },
    { name: "Tom Brown", role: "Full stack Developerr", description: "Ensures projects are on track and meet deadlines.", imgSrc: mostafa },
    { name: "Tom Brown", role: "Full stack Developer", description: "Ensures projects are on track and meet deadlines.", imgSrc: annas },
    { name: "AYOUB BOUNAGA", role: "Full stack Developer", description: "Ensures projects are on track and meet deadlines.", imgSrc: ayoub },
    { name: "Omar Elkaddouri", role: "Full stack Developer", description: "Ensures projects are on track and meet deadlines.", imgSrc: omar },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet Our Team
            </h1>
            <p className="text-sm text-indigo-200/65 mt-3">
              Passionate developers dedicated to building top-notch solutions.
            </p>
          </div>
          {/* Team cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg p-6 text-center shadow-md bg-gradient-to-b from-gray-800 to-gray-700">
                <Image
                  src={member.imgSrc}
                  alt={`${member.name} profile picture`}
                  width={96}
                  height={96}
                  className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-sm text-indigo-200/65">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
