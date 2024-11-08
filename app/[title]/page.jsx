'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/ui/footer";
function ServicePage() {
  const { title } = useParams();

  // Comprehensive service content with additional details
  const serviceContent = {
    UIUX: {
      title: 'UI/UX Design',
      description: 'Crafting user-friendly interfaces that start with requirement analysis and end with usability testing.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'User Interface Design',
        'Usability Testing',
      ],
      image: '/images/ux.jpeg',
      benefits: [
        'Enhanced user satisfaction and engagement',
        'Improved usability and accessibility',
        'Streamlined user journeys and conversions',
      ],
      callToAction: 'Elevate your product experience with our UI/UX design services.',
    },
    Web_Development: {
      title: 'Web Development',
      description: 'Building custom web solutions with seamless CMS integration and internal system compatibility.',
      features: [
        'Custom CMS Solutions',
        'E-commerce Development',
        'Responsive Web Design',
        'API Integrations',
      ],
      image: '/images/Development.jpeg',
      benefits: [
        'Optimized for all devices and screen sizes',
        'Scalable and easy-to-maintain platforms',
        'Seamless integration with existing systems',
      ],
      callToAction: 'Build a powerful online presence with our web development solutions.',
    },
    Applications_Development: {
      title: 'Applications Development',
      description: 'Modular, high-performance web applications built with modern, robust technology stacks.',
      features: [
        'Modular Architecture',
        'High Performance',
        'Secure and Scalable',
        'Cross-Platform Support',
      ],
      image: '/images/application.jpeg',
      benefits: [
        'Fast, reliable applications',
        'Customizable and scalable',
        'Enhanced security and privacy',
      ],
      callToAction: 'Take your business to the next level with custom application development.',
    },
    Mobile_Development: {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android, optimized for user experience.',
      features: [
        'Cross-Platform Compatibility',
        'Optimized for Performance',
        'User-Friendly Interface',
        'Enhanced Security Features',
      ],
      image: '/images/mobile.jpeg',
      benefits: [
        'Reach users on both iOS and Android',
        'Efficient and engaging mobile experiences',
        'Secure mobile solutions',
      ],
      callToAction: 'Engage your audience with a seamless mobile experience.',
    },
    Hardware_Software_Sales: {
      title: 'Hardware And Software Sales',
      description: 'Providing essential hardware and software for robust, efficient IT infrastructure.',
      features: [
        'Network Equipment (Switches, Routers)',
        'Storage Solutions',
        'Telecommunication Devices (PABX, Videoconferencing)',
        'Comprehensive Technical Support',
      ],
      image: '/images/Hardware.jpeg',
      benefits: [
        'Reliable network infrastructure',
        'Efficient and scalable storage options',
        'Full support for setup and troubleshooting',
      ],
      callToAction: 'Equip your business with the best hardware and software solutions.',
    },
    IT_Systems_Deployment_Optimization: {
      title: 'IT Systems Deployment And Optimization',
      description: 'Comprehensive IT systems deployment, from cloud servers to cybersecurity solutions.',
      features: [
        'Cloud Server Setup',
        'Network & Connectivity Optimization',
        'Cybersecurity Implementations',
        'VOIP and Telecommunications',
      ],
      image: '/images/it.jpeg',
      benefits: [
        'Enhanced security and data protection',
        'Seamless network performance',
        'Scalable IT infrastructure',
      ],
      callToAction: 'Optimize your IT systems with our deployment and security solutions.',
    },
    Security_Surveillance: {
      title: 'Security & Surveillance',
      description: 'Integrated CCTV, access control, and surveillance solutions for enhanced security.',
      features: [
        'CCTV Surveillance (Dome, Thermal, etc.)',
        'Access Control Systems',
        'External Storage Solutions',
        'Consultation and Technical Assistance',
      ],
      image: '/images/Security.jpeg',
      benefits: [
        'Comprehensive security solutions',
        'Real-time monitoring and access control',
        'Customized surveillance setup',
      ],
      callToAction: 'Protect your business with top-notch security and surveillance.',
    },
  };

  const currentService = serviceContent[title] || {};
  const pageTitle = `${currentService.title} | Your Company Name`;
  const pageDescription = currentService.description;
  return (
    <>
    <div className="p-6 max-w-6xl mx-auto text-indigo-200">
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={currentService.image} />
          <meta property="og:type" content="website" />
        </Head>

        <h1 className="text-5xl font-bold mb-6 text-violet-500">{currentService.title || 'Service Not Found'}</h1>

        <div className="lg:flex lg:space-x-8 mb-6">
          {/* Card-style Text Section */}
          <div className="lg:w-1/2 p-6 border border-violet-500 rounded-lg shadow-lg">
            <p className="text-lg mb-6">{currentService.description || 'The service you are looking for does not exist.'}</p>

            {/* Features Section */}
            {currentService.features && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-violet-500">Key Features</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="text-indigo-200/80">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits Section */}
            {currentService.benefits && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-violet-500">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {currentService.benefits.map((benefit, index) => (
                    <li key={index} className="text-indigo-200/80">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image Section */}
          {currentService.image && (
            <div className="lg:w-1/2 lg:flex lg:justify-end lg:items-start">
              <Image src={currentService.image} width={800} height={400} alt={`${currentService.title} Image`} className="rounded-lg shadow-lg border border-violet-500" />
            </div>
          )}
        </div>

    {/* Call to Action Section */}
    <div className="p-6 rounded-lg text-center mt-8 shadow-lg">
    <Link href={'/contact'} className="px-6 py-2  bg-black text-violet-500 rounded-md border border-violet-500 hover:bg-violet-500 hover:text-black transition">
          Contact Us
        </Link>
        </div>
    {/* {currentService.callToAction && (
          <div className="p-6 bg-violet-800 rounded-lg text-center mt-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-200 mb-2">Get Started</h2>
            <p className="text-lg mb-4 text-white">{currentService.callToAction}</p>
         
      </div>
    )} */}
  </div>
  <Footer/>
  </>
  );
}

export default ServicePage;
