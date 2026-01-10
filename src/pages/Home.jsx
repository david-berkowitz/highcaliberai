import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesOverview from "../components/home/ServicesOverview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TrustedBySection from "../components/home/TrustedBySection";
import BookSection from "../components/home/BookSection";
import PreFooterCTA from "../components/home/PreFooterCTA";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <BookSection />
      <TrustedBySection />
      <PreFooterCTA />
    </div>
  );
}