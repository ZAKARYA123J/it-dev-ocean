import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import img from '@/public/images/hard.jpg'
import Image from 'next/image';
export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
          {/* Video on the left */}
         
          {/* Text on the right */}
          <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            >
              Transforming Ideas into Digital Solutions
            </h1>
            <div className="max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Our team crafts seamless websites and mobile applications that
                elevate user experience and drive growth. Let us help you bring
                your vision to life.
              </p>
              <div className="flex justify-center md:justify-start">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#services"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Services
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600} className="ml-4">
                  <Link href="/contact">
                    <button
                      className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div 
  className="w-full md:w-1/2 p-4 rounded-lg shadow-lg" 
  data-aos="fade-right"
  style={{ transition: 'all 0.3s ease-in-out' }} // Violet background color
>
  <Image
    src={img}
    alt="Developer working on a project"
    layout="responsive"
    className="rounded-md"
    style={{
      objectFit: 'cover',
      border: '2px solid #8A2BE2',
    }}
  />
</div>

        </div>
      </div>
    </section>
  );
}