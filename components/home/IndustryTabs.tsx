// components/IndustryTabs.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Briefcase, Building2, GraduationCap, HeartPulse,
  Home, ShoppingCart, Users, Landmark, FilmIcon, Triangle
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useContactModal } from '../ClientWrapper'
 // Import the custom hook

interface Industry {
  id: string
  icon: React.ReactNode
  name: string
  description: string
  benefits: string[]
  image: string
}

const industries: Industry[] = [
  // ... your industries array ...
  {
    id: 'education',
    icon: <GraduationCap size={24} />,
    name: 'Education',
    description: 'Revolutionize learning experiences with AI-powered content creation and personalized educational materials.',
    benefits: [
      'AI-generated educational content and curriculum materials',
      'Personalized learning experiences based on student needs',
      'Interactive learning modules and assessments',
      'Engaging video content and animations for complex topics'
    ],
    image: '/images/industriesimage/education.png'
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={24} />,
    name: 'E-Commerce',
    description: 'Enhance online shopping experiences with AI-driven product descriptions, marketing content, and customer engagement.',
    benefits: [
      'Compelling product descriptions that convert',
      'AI-generated marketing campaigns and promotional content',
      'Personalized shopping experiences and recommendations',
      'Engaging social media content to showcase products'
    ],
    image: '/images/industriesimage/shopping.png'
  },
  {
    id: 'realestate',
    icon: <Home size={24} />,
    name: 'Real Estate',
    description: 'Transform property marketing with AI-generated listings, virtual tours, and targeted content campaigns.',
    benefits: [
      'Captivating property descriptions and listings',
      'Virtual staging and enhanced property visualization',
      'Targeted marketing campaigns for specific properties',
      'Engaging video tours and property showcases'
    ],
    image: '/images/industriesimage/realestate.png'
  },
  {
    id: 'healthcare',
    icon: <HeartPulse size={24} />,
    name: 'Healthcare',
    description: 'Enhance patient communication and medical content with AI-powered solutions while maintaining compliance.',
    benefits: [
      'Clear and accessible patient education materials',
      'Engaging health campaign content and visuals',
      'Compliant marketing for healthcare services',
      'Professional branding for medical practices'
    ],
    image: '/images/industriesimage/Health.png'
  },
  {
    id: 'nonprofit',
    icon: <Users size={24} />,
    name: 'Non-Profit',
    description: 'Amplify your mission with compelling storytelling, fundraising campaigns, and impactful visual content.',
    benefits: [
      'Emotional storytelling that connects with donors',
      'Effective fundraising campaign materials',
      'Impactful visual content showcasing your work',
      'Consistent branding across all touchpoints'
    ],
    image: '/images/industriesimage/nonprofit.png'
  },
  {
    id: 'tech',
    icon: <Briefcase size={24} />,
    name: 'IT & Product',
    description: 'Simplify complex tech concepts with clear messaging, engaging visuals, and compelling product stories.',
    benefits: [
      'Clear technical content that simplifies complex concepts',
      'Engaging product demonstrations and explainers',
      'Compelling case studies and success stories',
      'Professional sales and marketing materials'
    ],
    image: '/images/industriesimage/itsector.png'
  },
  {
    id: 'finance',
    icon: <Landmark size={24} />,
    name: 'Finance',
    description: 'Translate complex financial concepts into clear, engaging content that builds trust and credibility.',
    benefits: [
      'Clear explanations of complex financial services',
      'Trust-building content and visual identity',
      'Professional marketing materials for financial products',
      'Educational content that positions you as an authority'
    ],
    image: '/images/industriesimage/finance.png'
  },
  {
    id: 'entertainment',
    icon: <FilmIcon size={24} />,
    name: 'Entertainment',
    description: 'Create captivating content for the entertainment industry with our advanced creative solutions.',
    benefits: [
      'Engaging promotional materials for films and shows',
      'Eye-catching posters and digital marketing assets',
      'Compelling trailers and video teasers',
      'Consistent branding across multiple platforms'
    ],
    image: '/images/industriesimage/entertainment.png'
  },
  {
    id: 'corporate',
    icon: <Building2 size={24} />,
    name: 'Corporate',
    description: 'Elevate your corporate communications with professional content that reflects your brand values.',
    benefits: [
      'Professional corporate communications',
      'Consistent branding across all touchpoints',
      'Engaging presentations and annual reports',
      'Impactful internal and external communications'
    ],
    image: '/images/industriesimage/corporate.png'
  }
]

export default function IndustryTabs() { // No props needed here anymore
  const [activeIndustry, setActiveIndustry] = useState('education')
  const { openContactModal } = useContactModal(); // Use the hook here!

  const selectedIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0]
  const { theme } = useTheme()

  const isDark = theme === "dark"
  const overlayGradientFrom = isDark ? "from-secondary-900/70" : "from-primary/70"
  const overlayGradientTo = isDark ? "to-secondary-700/40" : "to-primary/40"

  const handleGetSolutionsClick = (industryName: string) => {
    openContactModal(industryName); // Call the openContactModal from context
  };

  return (
    <section id="industries" className="font-bricolage py-12 md:py-16 "
     style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}> {/* Reduced from py-16 md:py-24 */}
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-3xl mx-auto text-center mb-10"> {/* Reduced from mb-16 */}
          <h2 className="font-bricolage font-bricolage-heading text-3xl md:text-4xl font-bold text-foreground mb-3"> {/* Reduced from mb-4 */}
            Industries We <span className="text-transparent bg-clip-text bg-gradient-primary">Transform</span>
          </h2>
          <p className="text-foreground text-lg">
            Digizinc creates custom solutions for a wide range of industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 mb-8"
       
       > {/* Reduced gap-3 to gap-2 and mb-12 to mb-8 */}
          {industries.map(industry => {
            const isActive = activeIndustry === industry.id
            return (
                <button
                  key={industry.id}
                  suppressHydrationWarning
                onClick={() => setActiveIndustry(industry.id)}
                aria-pressed={isActive}
                className={`relative flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 border-2 
                  ${isActive
                    ? 'text-white border-transparent shadow-lg shadow-primary/20'
                    
                    : 'bg-card text-foreground border-primary/30 dark:border-primary/20 hover:border-transparent hover:bg-gradient-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10'
                  }`
                }
                style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}
              >
                <span className="mb-2 transition-transform group-hover:scale-110">{industry.icon}</span>
                <span className="text-sm font-medium text-center">{industry.name}</span>
              </button>
            )
          })}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-border transition-all"

        style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}>
          <div className="grid grid-cols-1 lg:grid-cols-2"
          style={{
    background: "linear-gradient(153.75deg, rgba(64, 25, 103, 0.12) 7.22%, rgba(127, 50, 205, 0.12) 96.19%)"
  }}>

            <div className="p-6 md:p-8 order-2 lg:order-1">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {selectedIndustry.name}
              </h3>
              <p className="text-foreground mb-6">
                {selectedIndustry.description}
              </p>

              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                How We Help:
              </h4>
              <ul className="space-y-3 mb-8">
                {selectedIndustry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 shrink-0">
                      <Triangle size={12} fill="currentColor" />
                    </span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                suppressHydrationWarning
                onClick={() => handleGetSolutionsClick(selectedIndustry.name)}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Get {selectedIndustry.name} Solutions
              </button>
            </div>

            <div className="h-64 lg:h-auto relative order-1 lg:order-2">
              <Image
                src={selectedIndustry.image}
                alt={`${selectedIndustry.name} industry`}
                className="absolute inset-0 w-full h-full object-cover"
                fill
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradientFrom} ${overlayGradientTo} mix-blend-multiply`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <span className="text-4xl mb-2 inline-block">{selectedIndustry.icon}</span>
                  <h3 className="text-2xl font-bold font-heading">{selectedIndustry.name}</h3>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* Remove the modal rendering from here as it's now in ClientWrapper */}
    </section>
  )
}