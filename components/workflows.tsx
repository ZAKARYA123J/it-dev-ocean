import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import ux from '@/public/images/ux.jpeg'
import dev from '@/public/images/Development.jpeg'
import application from '@/public/images/application.jpeg'
import mobile from '@/public/images/mobile.jpeg'
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import Hardware from '@/public/images/Hardware.jpeg'
import it from '@/public/images/it.jpeg'
import Security from '@/public/images/Security.jpeg'
export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Your success, our target.
            </h2>
            <p className="text-lg text-indigo-200/65">
            Our service portfolio covers the entire software development life cycle while meeting your business needs.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                 className="object-cover h-[300px] w-full"
                  src={ux}
                  width={480}
                  height={288}
                  alt="Workflow Step 1"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    UI/UX Design
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  UI/UX design involves crafting user-friendly interfaces. Our process begins with thorough system requirement analysis, proceeds through prototyping and meticulous UI design, and culminates in rigorous usability testing.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                 className="object-cover h-[300px] w-full"
                  src={dev}
                  width={380}
                  height={288}
                  alt="Workflow Step 2"
                
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Web Development
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS, and can be seamlessly integrated with your existing internal systems.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                className="object-cover h-[300px] w-full"
                  src={mobile}
                  width={480}
                  height={288}
                  alt="Workflow Step 3"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Applications Development
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  We are experienced in building modular, high-performance web applications for corporate clients and startups. Utilizing modern and robust technology stacks.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                 className="object-cover h-[300px] w-full"
                  src={application}
                  width={480}
                  height={288}
                  alt="Workflow Step 3"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Mobile Development
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  We're dedicated to building cross-platform mobile applications that deliver outstanding user experiences on both iOS and Android platforms.
                  </p>
                </div>
              </div>
            </a>
           
          </Spotlight>
        </div>
      </div>

      {/*  IT services */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Our IT services
              </span>
            </div>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="object-cover h-[300px] w-full"
                  src={Hardware}
                  width={480}
                  height={288}
                  alt="Workflow Step 1"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Hardware And Software Sales
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  Computer networks: switches, hubs, routers and network accessories
Data: Servers, storage bay
Telecommunications: PABX, Videoconferencing Telephone Switchboards, etc.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="object-cover h-[300px] w-full"
                  src={it}
                  width={480}
                  height={288}
                  alt="Workflow Step 2"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    IT Systems Deployment And Optimization
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  Server: cloud, virtualization, backup, messaging…
Networks & connectivity: MLPS, GIS, SD WAN, PROXY…
Cyber Security: Firewall, VPN, Access management…
Telecommunications: VOIP, ROIP, PBX…
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="object-cover h-[300px] w-full"
                  src={Security}
                  width={480}
                  height={288}
                  alt="Workflow Step 3"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Security & Surveillance
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  CCTV: Surveillance Cameras (mini dome, speed dome, thermal, etc.), DVR, NVR, External Storage, Advice and Technical Assistance
                  Access control: Access Management, Zoning, turnstile, clocking, patrol control, etc.
                  </p>
                </div>
              </div>
            </a>
         
           
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
