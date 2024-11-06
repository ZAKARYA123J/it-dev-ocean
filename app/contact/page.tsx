export const metadata = {
  title: "Contact Us - Open PRO",
  description: "Contact page description",
};

import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Get in Touch
            </h1>
          </div>

          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-input w-full"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Send Message
              </button>
            </div>
          </form>

          {/* Contact options */}
          <div className="mt-8 text-center">
            <h2 className="text-lg font-medium text-indigo-200/65 mb-4">Other ways to reach us:</h2>
            <div className="flex justify-center space-x-4">
              <Link href="https://wa.me/+212663116836" className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" />
                Contact via WhatsApp
              </Link>
              <Link href="mailto:zakaryabaouali255@gmail.com" className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="mr-2" />
                Contact via Email
              </Link>
            </div>
          </div>

          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Prefer talking to us directly?{" "}
            <Link className="font-medium text-indigo-500" href="/contact-info">
              Contact Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
