import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow Step 1"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Web Solution
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  Web solutions encompass a broad range of services and technologies used to create, develop, and manage websites and online applications. This includes website development, web design, SEO optimization, hosting, as well as e-commerce solutions and content management systems.
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
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow Step 2"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Software Development
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  With us, software development focuses on creating reliable and scalable solutions for any operating system, browser, and device. We combine deep industry expertise and the latest technical advancements to deliver customized solutions and products that perfectly align with the needs and behaviors of their users.
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
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow Step 3"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm bg-gray-800/40 text-indigo-500">
                    Data analysis
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                  When it comes to digital business models, data is your most important resource. At MMPG Softwares, we understand this and, since our inception, have been working to deliver services to our clients and partners that will help them optimize their data efforts. Have you ever dreamed of an integrated data structure where all your sales, KPIs, and metrics are gathered on a beautiful live dashboard.
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
