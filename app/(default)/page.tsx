import React from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

const MemoizedPageIllustration = React.memo(PageIllustration);
const MemoizedHero = React.memo(Hero);
const MemoizedWorkflows = React.memo(Workflows);
const MemoizedFeatures = React.memo(Features);
const MemoizedCta = React.memo(Cta);

export const metadata = {
  title: "Home - ocean connecting developer",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <MemoizedPageIllustration />
      <MemoizedHero />
      <section id="services">
        <MemoizedWorkflows />
      </section>
      <MemoizedFeatures />
      {/* <Testimonials /> */}
      <MemoizedCta />
    </>
  );
}
