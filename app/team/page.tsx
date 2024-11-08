import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import kaml from "@/public/picdev/kamal.svg";
import zakaria from '@/public/picdev/zakaria2.svg';
import zakaria2 from '@/public/picdev/zakaria.svg';
import mostafa from '@/public/picdev/mostafa.svg';
import annas from '@/public/picdev/anass.svg';
import ayoub from '@/public/picdev/ayoub.svg';
import omar from '@/public/picdev/omar.svg';

export const metadata = {
  title: "Our Team - Open PRO",
  description: "Meet the team behind our projects",
};
import Footer from '@/components/ui/footer';
export default function Team() {
  const teamMembers = [
    { 
      name: "KAMAL", 
      role: "Senior Developer", 
      description: "Specializes in creating beautiful and responsive interfaces.", 
      imgSrc: kaml, 
      github: "https://github.com/kamal", 
      linkedin: "https://www.linkedin.com/in/kamal" 
    },
    { 
      name: "ZAKARIA BAOUALI", 
      role: "Full stack Developer", 
      description: "Focuses on building robust and scalable APIs.", 
      imgSrc: zakaria, 
      github: "https://github.com/ZAKARYA123J", 
      linkedin: "https://www.linkedin.com/in/zakaria-baouali-92b217333/" 
    },
    { 
      name: "ENNACHOUM ZAKARIA", 
      role: "Full stack Developer", 
      description: "Designs intuitive and engaging user experiences.", 
      imgSrc: zakaria2, 
      github: "https://github.com/Umbrator", 
      linkedin: "https://www.linkedin.com/in/ennachoum-zakaria-264134231/" 
    },
    { 
      name: "MOSTAFA AKAJDID", 
      role: "Full stack Developer", 
      description: "Ensures projects are on track and meet deadlines.", 
      imgSrc: mostafa, 
      github: "https://github.com/mostafa", 
      linkedin: "https://www.linkedin.com/in/mostafa" 
    },
    { 
      name: "ANASS ZARIOH", 
      role: "Full stack Developer", 
      description: "Ensures projects are on track and meet deadlines.", 
      imgSrc: annas, 
      github: "https://github.com/anass", 
      linkedin: "https://www.linkedin.com/in/anass" 
    },
    { 
      name: "AYOUB BOUNAGA", 
      role: "Full stack Developer", 
      description: "Ensures projects are on track and meet deadlines.", 
      imgSrc: ayoub, 
      github: "https://github.com/ayoub", 
      linkedin: "https://www.linkedin.com/in/ayoub" 
    },
    // { 
    //   name: "Omar ELKADDOURI", 
    //   role: "Full stack Developer", 
    //   description: "Ensures projects are on track and meet deadlines.", 
    //   imgSrc: omar, 
    //   github: "https://github.com/omar", 
    //   linkedin: "https://www.linkedin.com/in/omar" 
    // },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.black),theme(colors.violet.500),theme(colors.gray.900),theme(colors.violet.600),theme(colors.black))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet Our Team
            </h1>
            <p className="text-sm text-violet-300 mt-3">
              Passionate developers dedicated to building top-notch solutions.
            </p>
          </div>
          {/* Team cards */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg p-6 text-center shadow-md bg-gradient-to-b from-black to-violet-900">
                <Image
                  src={member.imgSrc}
                  alt={`${member.name} profile picture`}
                  width={156}
                  height={156}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-sm text-violet-300">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.description}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-600"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-600"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
