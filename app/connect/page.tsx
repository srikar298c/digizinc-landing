'use client';
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin,   Mail, Share2 } from 'lucide-react';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const DigitalBusinessCard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [showSharePrompt, setShowSharePrompt] = useState(false);
  const [sharerName, setSharerName] = useState('');
  const [sharerPhone, setSharerPhone] = useState('');

  // Founder and Company Details (Replace with your actual information)
  const founder = {
    name: "Bhargava Raj", // Replace with founder's name
    title: "Founder & CEO",
    photo: "/founder-image.jpg", // Replace with path to founder's photo in public folder (e.g., /images/john-doe.jpg)
    social: {
      twitter: "https://twitter.com/raj", // Replace with founder's Twitter
      linkedin: "https://www.linkedin.com/in/raj", // Replace with founder's LinkedIn
      email: "Raj@digizinc.com", // Replace with founder's email
    },
  };

  const company = {
    name: "Digizinc",
    logoLight: "/digizinc-header-logo-dark.png", // Replace with path to light logo in public folder
    logoDark: "/digizinc-header-logo-light.png",   // Replace with path to dark logo in public folder
    address: "123 AI Street, Tech City, 500081 Hyderabad, Telangana, India",
    phone: "+91 98765 43210", // Replace with actual phone number
    social: {
      twitter: "https://twitter.com/digizinc_ai", // Replace with Digizinc Twitter
      linkedin: "https://www.linkedin.com/company/digizinc", // Replace with Digizinc LinkedIn
      email: "info@digizinc.com", // Replace with Digizinc email
      website:'https://saaviksolutins.com'
    },
  };

  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:${company.name}
TITLE:${founder.title}
TEL;TYPE=WORK,VOICE:${company.phone}
ADR;TYPE=WORK,PREF:;;${company.address}
EMAIL;TYPE=INTERNET,WORK,PREF:${founder.social.email}
URL;type=linkedin:${company.social.linkedin}
URL;type=linkedin:${founder.social.linkedin}
X-SOCIALPROFILE;type=twitter:${founder.social.twitter}
X-SOCIALPROFILE;type=twitter:${company.social.twitter}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${founder.name.replace(/\s/g, '_')}_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShareContact = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send sharerName and sharerPhone to a backend
    // or use Web Share API if applicable (though sharing VCF directly is complex)
    console.log(`Sharing contact with Name: ${sharerName}, Phone: ${sharerPhone}`);
    alert(`Thank you, ${sharerName}! We've noted your interest in sharing.`);
    // Optionally, hide the prompt after sharing
    setShowSharePrompt(false);
    setSharerName('');
    setSharerPhone('');
  };

  useEffect(() => {
    // Automatically download VCF on component mount
    generateVCard();

    // Show the share prompt after a short delay
    const timer = setTimeout(() => {
      setShowSharePrompt(true);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Empty dependency array means this runs once on mount

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 dark:bg-[#f22ee5]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 dark:bg-[#902ef2]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>

      <motion.div
        className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/60 dark:to-pink-900/60 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-sm border border-white/20 dark:border-white/10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Company Logo */}
        <Link href="/" >
          <Image
            src="/digizinc-header-logo-light.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className="h-auto w-auto block dark:hidden mx-auto my-4 object-contain"
          />
          <Image
            src="/digizinc-header-logo-dark.png"
            alt="Digizinc Logo"
            width={120}
            height={30}
            className=" w-auto hidden dark:block mx-auto h-auto my-4 object-contain"
          />
        </Link>

        {/* Founder Photo and Details */}
        <motion.div variants={itemFadeIn} className="text-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-md">
            <Image
              src={founder.photo}
              alt={founder.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
            {founder.name}
          </h1>
          <p className="text-lg text-primary-700 dark:text-primary-300 mb-4">{founder.title}</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemFadeIn} className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <Phone className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`tel:${company.phone}`} className="hover:underline transition-colors duration-200">
              {company.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
            <a href={`mailto:${founder.social.email}`} className="hover:underline transition-colors duration-200">
              {founder.social.email}
            </a>
          </div>
        </motion.div>

        {/* Location Information */}
        <div className="flex place-items-start justify-center text-gray-800 dark:text-gray-200">
          <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
          <span>{company.address}</span>
        </div>

        {/* Founder Social Handles */}
        <motion.div variants={itemFadeIn} className="flex justify-center gap-6 m-8">
          {founder.social.twitter && (
            <a
              href={founder.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's Twitter"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
          )}
          {founder.social.linkedin && (
            <a
              href={founder.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Founder's LinkedIn"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          )}
        </motion.div>

        {/* Digizinc Social Handles */}
       

        {/* Add to Contacts Button */}
        <motion.div variants={itemFadeIn} className="text-center mb-8">
          <button
            onClick={generateVCard}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#f22ee5] to-[#902ef2] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
          >
            <Phone className="w-5 h-5 mr-3" /> Add to Contacts
          </button>
        </motion.div>

        {/* Share Contact Prompt */}
        {showSharePrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-6 bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-inner border border-white/20 dark:border-gray-700/30 backdrop-blur-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Share My Contact
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Would you like to share your details so I can connect with you?
            </p>
            <form onSubmit={handleShareContact} className="space-y-4">
              <div>
                <label htmlFor="sharerName" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="sharerName"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
                  value={sharerName}
                  onChange={(e) => setSharerName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="sharerPhone" className="sr-only">Your Mobile Number</label>
                <input
                  type="tel"
                  id="sharerPhone"
                  placeholder="Your Mobile Number"
                   className="w-full px-3 py-2 bg-white dark:bg-secondary-900 border border-gray-200 dark:border-secondary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all duration-200"
                  value={sharerPhone}
                  onChange={(e) => setSharerPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#f22ee5] to-[#902ef2] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
              >
                <Share2 className="w-5 h-5 mr-3" /> Share My Contact
              </button>
            </form>
          </motion.div>
        )}
      </motion.div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(-10%, 20%) scale(1.1);
          }
          60% {
            transform: translate(15%, -10%) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DigitalBusinessCard;