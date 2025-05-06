'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Header';
import { Sparkles, Code, Smartphone, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
}

const ServiceCard = ({
  title,
  description,
  icon,
  keyPoints
}: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            {icon}
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-5 text-sm">{description}</p>
        
        <div>
          <ul className="space-y-1.5">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div className="h-4 w-4 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 p-3 bg-gradient-to-r from-indigo-50 to-purple-50">
        <a href="#" className="flex items-center justify-center gap-1 text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm">
          Learn more <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

function ServicesPage() {
  const services = [
    {
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: <Sparkles className="h-5 w-5" />,
      keyPoints: [
        "Custom machine learning models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision integration"
      ]
    },
    {
      title: "Web Applications",
      description: "Scalable and responsive web applications for your business",
      icon: <Code className="h-5 w-5" />,
      keyPoints: [
        "React & Next.js development", 
        "Progressive web apps",
        "API integrations",
        "Cloud deployment"
      ]
    },
    {
      title: "Mobile Applications",
      description: "Powerful cross-platform mobile experiences for iOS & Android",
      icon: <Smartphone className="h-5 w-5" />,
      keyPoints: [
        "React Native & Flutter",
        "Offline capabilities",
        "Push notifications",
        "App Store optimization"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing to ensure flawless performance",
      icon: <Shield className="h-5 w-5" />,
      keyPoints: [
        "Automated testing",
        "Performance optimization",
        "Security audits",
        "Continuous integration"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-[#f8f7ff]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/ac937566-451e-4e06-baa4-b4e68a3faff9.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f8f7ff]/90"></div>
          
          <div className="container relative mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block mb-3 px-4 py-1 bg-indigo-100 rounded-full">
                <span className="text-indigo-800 font-medium text-sm">OUR SERVICES</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Comprehensive <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technology</span> Solutions
              </h1>
              
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 mx-auto"></div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer a wide range of technology services to help businesses innovate, grow, 
                and succeed in the digital age.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  keyPoints={service.keyPoints}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Transformation?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative IT solutions. Let's build something amazing together.
              </p>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-[#111827] text-gray-300 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white mr-3">
                  <span className="font-bold">T</span>
                </div>
                <span className="text-2xl font-bold text-white">Transerg</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading provider of AI-powered technology solutions. We help businesses leverage artificial intelligence to drive innovation and growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
                <li><a href="/services" className="text-indigo-400 font-medium">Services</a></li>
                <li><a href="/use-cases" className="text-gray-400 hover:text-indigo-400 transition-colors">Use Cases</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">AI Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">QA and Testing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Transerg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
