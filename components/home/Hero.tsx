'use client'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useContactModal } from "../ClientWrapper";
import { Button } from "@/components/ui/button";
import ToggleSwitch from "@/components/ui/toggle-switch"; 
import { useToast } from '@/hooks/use-toast';
import { useConfetti } from '@/contexts/ConfettiContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
}

const HeroGrowth = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { openContactModal } = useContactModal();
  
  const { toast } = useToast();
  const { showConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);

  const starColor = theme === 'dark' ? '#fff' : '#333';

  return (
    <section
  className="relative text-white bg-cover bg-center bg-no-repeat p-4 pb-0 sm:p-6 lg:p-8 lg:pb-0 overflow-hidden"
  style={{ backgroundImage: "url('/Maskgroup.png')" }}
>
      
      
      {/* Overlay gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,255,0.3),_transparent_50%)] opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bricolage font-bricolage-heading md:text-6xl font-bold leading-tight max-w-4xl">
          We build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
            AI-Powered
          </span>{" "}
          Designs that delivers.
        </h1>

        {/* Subtext */}
        <p className="mt-4 font-bricolage text-gray-300 max-w-2xl">
          From scroll-stopping visuals to smart campaigns—we deliver
          data-backed creativity for brands that want more than likes.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 font-bricolage rounded-full bg-gradient-to-r from-white/20 to-white/50 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg transition-all">
          Explore Services
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 pb-0 overflow-hidden max-h-[345px]">
  {/* Left Column */}
  <div className="flex flex-col gap-4">
    {/* Visible on all screens */}
    <div className="hidden sm:block rounded-3xl overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-all shadow-lg shadow-secondary/20 bg-[#ffffff]/40 p-1 mt-4">
      <img
  src="images/herosectionimage/Rectangle11631.jpeg"
  alt="AI Code Interface with Flowing Data"
  className="w-full h-[120px] object-cover rounded-3xl"
/>
    </div>
    {/* Hide on small screens, show from md and up */}
    <div className="hidden sm:block rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-1">
      <img 
        src="images/herosectionimage/Rectangle11632.jpeg"
        alt="E-commerce Shopping Cart with Neon Effects" 
        className="w-full h-[180px] object-cover rounded-3xl"
      />
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-4">
    {/* Always visible */}
    <div className="hidden sm:block rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-1">
      <img 
        src="images/herosectionimage/Rectangle11683.jpeg"
        alt="Digital Books with Holographic Effects" 
        className="w-full h-[160px] object-cover rounded-3xl"
      />
    </div>

    {/* Only visible on lg and up */}
    <div className="hidden sm:block rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all shadow-lg shadow-primary/20 bg-[#ffffff]/40 p-1">
      <img 
        src="images/herosectionimage/Rectangle11635.jpeg"
        alt="Neon City Skyline" 
        className="w-full h-[160px] object-cover rounded-3xl"
      />
    </div>
  </div>

  {/* Right Column */}
  {/* Visible only on lg and up */}
  <div className="rounded-3xl overflow-hidden border-2 border-secondary/20 hover:border-secondary/50 transition-all shadow-lg shadow-secondary/20 bg-[#ffffff]/40 p-1">
    <img 
      src="images/herosectionimage/Rectangle11634.jpeg"
      alt="DNA Technology Visualization" 
      className="w-full h-[340px] object-cover rounded-3xl"
    />
  </div>
</div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        
      </a>
    </section>
  )
}

export default HeroGrowth;