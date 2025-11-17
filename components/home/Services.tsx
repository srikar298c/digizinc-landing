'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { servicesData } from '@/lib/services-data';

const Services: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('branding');
  const [activeCategory, setActiveCategory] = useState('all');
  const [tabClicked, setTabClicked] = useState(false);

  const activeService = servicesData.find(service => service.id === activeTab) || servicesData[0];

  useEffect(() => {
    if (tabClicked) {
      const isMobileOrTablet = window.innerWidth < 1024;
      if (isMobileOrTablet && contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeTab, tabClicked]);

  const handleTabClick = (serviceId: string) => {
    setActiveTab(serviceId);
    setTabClicked(true);
  };

  const serviceCategories = [
    { id: "all", name: "All Services" },
    { id: "branding", name: "Branding & Identity" },
    { id: "marketing", name: "Marketing & Advertising" },
    { id: "digital-experience", name: "Digital Experience" },
    { id: "visual-content", name: "Visual Content" },
  ];

  return (
    <section id="services" className="font-bricolage py-12 md:py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-bricolage font-bricolage-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h2>
          <p className="font-bricolage text-lg text-black dark:text-white">
            Comprehensive end-to-end media solutions powered by AI for every industry
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[400px]">
          <div className="lg:w-1/3 flex flex-col">
            <div className="rounded-xl p-4 sticky top-24 flex-1" 
            style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}>
              <h3 className="font-heading text-lg font-semibold dark:text-white mb-4 text-black">
                Explore by Category
              </h3>
              <nav className="flex flex-wrap gap-2 mb-6">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-gradient-primary text-white shadow-md'
                        : 'bg-gray-200 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-secondary-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
              <h3 className="font-bricolagetext-lg font-semibold dark:text-white mb-4 text-black">
                Service Categories
              </h3>
              <nav className="flex flex-col space-y-1 font-bricolage">
                {servicesData
                  .filter(service => activeCategory === 'all' || service.category === activeCategory)
                  .map(service => (
                    <button
                      key={service.id}
                      onClick={() => handleTabClick(service.id)}
                      className={`flex font-bricolage items-center px-4 py-3 rounded-lg text-left transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary-800 ${
                        activeTab === service.id
                          ? 'bg-gradient-primary text-white shadow-lg scale-[1.02]'
                          : 'hover:bg-gray-100 hover:scale-[1.01]'
                      }`}
                    >
                      <span className="mr-3 transition-transform group-hover:scale-110">{service.icon}</span>
                      <span className="font-bricolage">{service.title}</span>
                    </button>
                  ))}
              </nav>
            </div>
          </div>

          <div ref={contentRef} className="lg:w-2/3 flex flex-col">
            <div className="rounded-2xl py-6 md:py-8 shadow-lg border border-gray-100/10 dark:border-secondary-800 flex-1 flex flex-col font-bricolage "
            style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}>
              <div className="overflow-y-auto">
                <div className="flex justify-center items-center mb-8">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center mr-4 transform hover:scale-110 transition-transform shadow-sm font-bricolage"
                  >
                    {activeService.icon}
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold font-bricolage font-bricolage  text-black dark:text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>
                <p className="text-black dark:text-white p-3 px-8 font-medium text-base leading-relaxed w-full">
                  {activeService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 mb-10">
                  {activeService.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-gray-50 dark:bg-secondary-800/60 hover:bg-secondary-700
                        border border-primary-500 hover:border-primary-500
                        group hover:shadow-xl hover:scale-[1.025] transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 group-hover:text-white transition-colors" />
                        <p className="text-black dark:text-white group-hover:text-white transition-colors text-sm">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex justify-left px-6 pt-4">
                <Link href={`/services/${activeService.slug}`} passHref legacyBehavior>
                  <a className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Learn more about {activeService.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;