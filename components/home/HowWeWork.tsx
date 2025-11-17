'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your vision, goals, and challenges to define a tailored strategy that aligns with your brand and market.',
  },
  {
    icon: Users,
    title: 'Creative & AI Integration',
    description: 'Our team of designers and AI specialists collaborate to bring your ideas to life, leveraging cutting-edge AI to enhance creativity and impact.',
  },
  {
    icon: Rocket,
    title: 'Development & Refinement',
    description: 'We build and refine your digital assets with pixel-perfect execution. Iterative feedback loops ensure the final product exceeds expectations.',
  },
  {
    icon: CheckCircle,
    title: 'Launch & Optimization',
    description: 'Your solution goes live! We continuously monitor performance, gather insights, and optimize campaigns for sustained growth.',
  },
];

const Step = ({ step, index }: { step: any; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { icon: Icon } = step;
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, delay: 0.3, type: 'spring', stiffness: 300, damping: 20 } },
  };

  return (
    <div ref={ref} className={`relative flex w-full ${isEven ? 'justify-start' : 'justify-end'} font-bricolage `}>
      {/* Mobile view */}
      <div className="lg:hidden w-full flex items-start">
        <div className="relative w-1/6 flex justify-center">
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="absolute top-0 -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-2xl z-10"
            >
              <Icon className="w-7 h-7 text-purple-500" />
            </motion.div>
        </div>
        <motion.div
          className="w-5/6"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 bg-white dark:bg-gradient-to-br from-gray-900 to-[#1c0f2a] rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 w-full max-w-sm cursor-pointer">
            <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex w-full items-center">
        {isEven ? (
          <>
            <motion.div
              className="w-5/12 justify-end flex"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 bg-white dark:bg-gradient-to-br from-gray-900 to-[#1c0f2a] rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 w-full max-w-sm cursor-pointer">
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
            <div className="relative w-1/6 flex justify-center">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-2xl z-10"
              >
                <Icon className="w-7 h-7 text-purple-500" />
              </motion.div>
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            <div className="w-5/12"></div>
            <div className="relative w-1/6 flex justify-center">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500 shadow-2xl z-10"
              >
                <Icon className="w-7 h-7 text-purple-500" />
              </motion.div>
            </div>
            <motion.div
              className="w-5/12 justify-start flex"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 bg-white dark:bg-gradient-to-br from-gray-900 to-[#1c0f2a] rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 w-full max-w-sm cursor-pointer">
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

const HowWeWork = () => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const backgroundClass = theme === 'dark'
    ? 'bg-gradient-to-b from-[#0d0d0d] via-[#240840] to-[#0d0d0d]'
    : 'bg-gradient-to-b from-white to-gray-100';

  return (
    <section id="how-we-work" className={`py-16 md:py-24 ${backgroundClass} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A streamlined approach to transform your vision into digital reality.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-1/6 lg:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Step key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;