'use client'
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Hero from "@/components/home/Hero";
import ConfettiToggle from '@/components/ConfettiToggle';
import Solutions from "@/components/home/Solutions";
import IndustryTabs from "@/components/home/IndustryTabs";

const DynamicTestimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: false });
const DynamicDigitalPartners = dynamic(() => import("@/components/home/DigitalPartners"), { ssr: false });
const DynamicCTA = dynamic(() => import("@/components/home/CTA"), { ssr: false });
const DynamicServices = dynamic(() => import("@/components/home/Services"), { ssr: false });
const DynamicPackages = dynamic(() => import("@/components/home/Packages"), { ssr: false });
const DynamicHowWeWork = dynamic(() => import("@/components/home/HowWeWork"), { ssr: false });

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionAnimation}
    style={{ willChange: 'transform, opacity' }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const handleToggleChange = (isOn: boolean) => {
    console.log('Confetti toggle is now:', isOn);
    // Here you would trigger your actual confetti animation
    // For example: if (isOn) { triggerConfetti(); }
  };

  return (
    <main className="bg-background">
      <Hero />

      <SectionWrapper>
        <Solutions />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicServices />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicPackages />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicHowWeWork />
      </SectionWrapper>

      <SectionWrapper>
        <IndustryTabs />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicDigitalPartners />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicTestimonials />
      </SectionWrapper>

      <SectionWrapper>
        <DynamicCTA />
      </SectionWrapper>
    </main>
  );
}