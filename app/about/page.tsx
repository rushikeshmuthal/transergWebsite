'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Header';
import { Award, Users, Globe2, Lightbulb, MapPin, Clock, Building2, Heart } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import CTA from '../components/CTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faAward, 
  faUsers, 
  faHandshake, 
  faChartLine, 
  faHeart,
  faMapMarkerAlt,
  faClock,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Using Unsplash images
const images = {
  aboutUs: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  mission: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description: "Visionary leader with 15+ years in tech innovation"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description: "Expert in AI and cloud architecture"
  },
  {
    name: "Mike Johnson",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description: "Full-stack development specialist"
  }
];

const AboutPage = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Global Clients' },
    { number: '100+', label: 'AI Solutions' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge AI and technology solutions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client Partnership',
      description: 'Building lasting relationships through collaboration and trust'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project we undertake'
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Global Impact',
      description: 'Creating solutions that make a difference worldwide'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-[#f8f7ff]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e9d5ff,_transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#c7d2fe,_transparent_70%)]"></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 rounded-full">
                    <span className="text-indigo-800 font-medium text-sm">OUR STORY</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Transforming Business Through
                    <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Intelligent Innovation
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We're not just another technology company. We're a team of innovators, 
                    problem-solvers, and visionaries dedicated to revolutionizing how 
                    businesses operate in the digital age.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 bg-white rounded-2xl shadow-sm"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600">
                            {value.icon}
                          </div>
                          <h3 className="font-semibold text-gray-800">
                            {value.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          {value.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                  <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 rounded-full">
                  <span className="text-indigo-800 font-medium text-sm">OUR JOURNEY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Humble Beginnings to
                  <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Industry Leaders
                  </span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Founded in 2020 by a team of passionate technologists, Transerg started with a simple mission: 
                  to help businesses harness the power of technology to solve complex problems and drive growth.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  What began as a small startup has grown into a leading technology solutions provider, 
                  serving clients across various industries. Our journey has been marked by continuous 
                  learning, innovation, and a commitment to excellence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={images.team}
                  alt="Our Team"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <img
                  src={images.mission}
                  alt="Our Mission"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 rounded-full">
                  <span className="text-indigo-800 font-medium text-sm">OUR MISSION & VISION</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Driving Digital
                  <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-lg">
                      To empower businesses with innovative technology solutions that drive growth, 
                      efficiency, and competitive advantage. We strive to be a trusted partner in 
                      our clients' digital transformation journey.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 text-lg">
                      To be a global leader in technology innovation, known for delivering 
                      exceptional solutions that transform businesses and create lasting value 
                      for our clients and communities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 rounded-full">
                  <span className="text-indigo-800 font-medium text-sm">OUR OFFICE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Where Innovation
                  <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Happens
                  </span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Our modern office space in Aurangabad is designed to foster creativity and collaboration. 
                  It's where our team comes together to solve complex problems and create innovative solutions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                      <p className="text-gray-600">A-1, Chetana Towers, New Sheryanagar, Zambad Estate, Aurangabad - 431005</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={images.office}
                  alt="Our Office"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
    </div>
  );
};

export default AboutPage;
