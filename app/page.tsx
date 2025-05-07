'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
import CTA from './components/CTA';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Footer from './components/Footer';
import axios from 'axios';
import WhyChooseUs from './components/WhyChooseUs';
import AIUseCases from './components/AIUseCases';
import './lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMobileAlt, faLaptopCode, faCheckCircle, faMapMarkerAlt, faEnvelope, faPhoneAlt, faPaperPlane, faArrowRight, faQuoteLeft, faLightbulb, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAngular, faVuejs, faNodeJs, faAws, faDocker, faPython, faJava, faPhp, faSwift, faAndroid, faFigma, faLinkedinIn, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Using local images from assets folder
import background from './assets/background.jpg';
import hero from './assets/bg.jpg';
import aboutUs from './assets/about us.jpg';
import AiUseCasesSection from './components/AiUseCasesSection';
import BlogSection from './components/BlogSection';
import OurProcessSection from './components/our process/OurProcess';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const chartElement = document.getElementById('timeline-chart');
    if (chartElement) {
      const myChart = echarts.init(chartElement);
      const option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2020', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
          axisLine: {
            lineStyle: {
              color: '#e5e7eb'
            }
          },
          axisLabel: {
            color: '#4b5563'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#e5e7eb'
            }
          },
          axisLabel: {
            color: '#4b5563'
          },
          splitLine: {
            lineStyle: {
              color: '#e5e7eb'
            }
          }
        },
        series: [
          {
            name: 'Growth',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            data: [10, 25, 45, 60, 75, 95, 120, 150],
            itemStyle: {
              color: '#6366f1'
            },
            lineStyle: {
              width: 4,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#6366f1' },
                  { offset: 1, color: '#8b5cf6' }
                ]
              }
            },
            areaStyle: {
              opacity: 0.3,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#6366f1' },
                  { offset: 1, color: 'rgba(99, 102, 241, 0)' }
                ]
              }
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c} clients',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderWidth: 0,
          textStyle: {
            color: '#fff'
          }
        }
      };
      myChart.setOption(option);
      const resizeHandler = () => {
        myChart.resize();
      };
      window.addEventListener('resize', resizeHandler);
      return () => {
        window.removeEventListener('resize', resizeHandler);
        myChart.dispose();
      };
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: faBrain,
      title: "AI Solutions Development",
      description: "Cutting-edge artificial intelligence solutions including machine learning models, natural language processing, and computer vision applications tailored to your business needs.",
      image: "https://readdy.ai/api/search-image?query=Modern%20AI%20and%20machine%20learning%20illustration%20showing%20neural%20networks%2C%20data%20processing%2C%20and%20artificial%20intelligence%20concepts%20in%20blue%20and%20purple%20gradient%20style%20with%20clean%20white%20background&width=600&height=400&seq=service1&orientation=landscape"
    },
    {
      icon: faMobileAlt,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices, with focus on performance and user engagement.",
      image: "https://readdy.ai/api/search-image?query=Mobile%20app%20development%20illustration%20with%20smartphone%20screens%20showing%20UI%20designs%2C%20app%20wireframes%2C%20and%20development%20tools%20in%20blue%20and%20purple%20gradient%20style%20with%20clean%20white%20background&width=600&height=400&seq=service2&orientation=landscape"
    },
    {
      icon: faLaptopCode,
      title: "Web Development",
      description: "Full-stack web development services delivering scalable, secure, and responsive applications using the latest technologies and best practices.",
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20development%20illustration%20with%20code%20editor%2C%20responsive%20layouts%2C%20and%20programming%20elements%20in%20blue%20and%20purple%20gradient%20style%20with%20clean%20white%20background&width=600&height=400&seq=service3&orientation=landscape"
    },
    // {
    //   icon: faCheckCircle,
    //   title: "QA and Testing",
    //   description: "Comprehensive quality assurance and testing services ensuring your software meets the highest standards of reliability, performance, and user satisfaction.",
    //   image: "https://readdy.ai/api/search-image?query=Software%20testing%20and%20quality%20assurance%20illustration%20with%20testing%20tools%2C%20bug%20tracking%2C%20and%20automated%20testing%20concepts%20in%20blue%20and%20purple%20gradient%20style%20with%20clean%20white%20background&width=600&height=400&seq=service4&orientation=landscape"
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#e9d5ff,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#c7d2fe,_transparent_70%)]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 max-w-4xl relative z-10"
        >
          {/* Content */}
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-100"
              >
                <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-indigo-800 font-medium">AI-Powered Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              >
                Transforming Ideas into{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Intelligent Digital Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl"
              >
                We craft scalable Web & Mobile Applications, powered by Generative AI, 
                for startups and enterprises alike.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get your AI Strategy
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-indigo-600 border-purple-100 px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    projectsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* AI Use Cases Section */}
      <AiUseCasesSection />

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gray-50 text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 text-sm rounded-full cursor-pointer">
                Our Services
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mt-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              Comprehensive IT Solutions for Modern Business
            </motion.h2>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
            >
              We offer a wide range of IT services designed to help your business thrive in the digital age. Our expert team delivers tailored solutions to meet your specific needs.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.3 + index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-none">
                    <div className="h-48 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-top"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FontAwesomeIcon icon={service.icon} className="w-5 h-5" />
                        </motion.div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 text-sm rounded-full cursor-pointer">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">We're a team of digital innovators</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, TechSphere has grown from a small startup to a leading IT solutions provider. We combine technical expertise with creative thinking to deliver exceptional results for our clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to empower businesses through technology, helping them navigate the digital landscape with confidence and achieve their goals. We believe in building long-term partnerships based on trust, transparency, and results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
                  <p className="text-gray-600">Experts Team Members</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
                  <p className="text-gray-600">Web Apps Delivered</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
                  <p className="text-gray-600">Mobile Apps</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">05+</div>
                  <p className="text-gray-600">GenAI Tools</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
                onClick={() => window.open("https://calendly.com/transergllp/transerg-llp-saas-meeting", "_blank")}
              >
                <span className="mr-2">Get Started With Us</span>
                <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-5 -right-5 w-24 h-24 bg-purple-200 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-indigo-200 rounded-full filter blur-3xl opacity-50"></div>
                <div className="bg-white p-6 rounded-xl shadow-xl">
                  <Image
                  src={aboutUs}
                    alt="Our Team at Work"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                    <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
                  </div>
                  <h4 className="font-medium">Innovation</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                    <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                  </div>
                  <h4 className="font-medium">Collaboration</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                    <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
                  </div>
                  <h4 className="font-medium">Excellence</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 text-black bg-gray-50">
<div className="container mx-auto px-6 max-w-7xl">
<div className="text-center max-w-3xl mx-auto mb-16">
<Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 text-sm rounded-full cursor-pointer">
Our Projects
</Badge>
<h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Featured Case Studies</h2>
<p className="text-gray-600">Explore our portfolio of successful projects that showcase our expertise and the transformative impact of our solutions.</p>
</div>
<Tabs defaultValue="ai" className="mb-12">
<TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 h-auto gap-4">
<TabsTrigger value="ai" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer">AI Solutions</TabsTrigger>
<TabsTrigger value="all" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer">Featured Projects</TabsTrigger>
<TabsTrigger value="web" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer">Web Development</TabsTrigger>
<TabsTrigger value="mobile" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white !rounded-button whitespace-nowrap cursor-pointer">Mobile Apps</TabsTrigger>
</TabsList>
<TabsContent value="ai" className="mt-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "SuperSalesMind – AI Sales Co-Pilot",
category: "Sales Intelligence",
description: "Advanced AI-powered sales assistant that analyzes customer interactions, predicts buying patterns, and provides real-time recommendations to sales teams.",
image: "https://readdy.ai/api/search-image?query=Modern%20AI%20sales%20dashboard%20showing%20data%20visualization%2C%20predictive%20analytics%2C%20and%20sales%20performance%20metrics%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-sales-ai&orientation=landscape"
},
{
title: "Resume Shortlisting Engine",
category: "HR Technology",
description: "Intelligent resume parsing and ranking system using NLP to match candidate profiles with job requirements, streamlining recruitment processes.",
image: "https://readdy.ai/api/search-image?query=AI%20powered%20resume%20analysis%20interface%20showing%20candidate%20matching%2C%20skill%20assessment%2C%20and%20recruitment%20analytics%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-resume-ai&orientation=landscape"
},
{
title: "Customer Sentiment Analyzer",
category: "Customer Intelligence",
description: "Real-time sentiment analysis tool that processes customer feedback across multiple channels to provide actionable insights for business improvement.",
image: "https://readdy.ai/api/search-image?query=Customer%20sentiment%20analysis%20dashboard%20showing%20emotion%20tracking%2C%20feedback%20analysis%2C%20and%20trend%20visualization%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-sentiment-ai&orientation=landscape"
},
// {
// title: "Chatbot for Finance FAQs",
// category: "Financial Services",
// description: "Intelligent conversational AI system designed to handle complex financial queries, providing accurate information and guidance to customers 24/7.",
// image: "https://readdy.ai/api/search-image?query=Financial%20chatbot%20interface%20showing%20conversation%20flow%2C%20automated%20responses%2C%20and%20banking%20information%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-chatbot-ai&orientation=landscape"
// }
].map((project, index) => (
<Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
<div className="h-48 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>
</div>
<CardContent className="p-6">
<Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
{project.category}
</Badge>
<h3 className="text-xl font-bold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a href="#" className="text-indigo-600 font-medium flex items-center space-x-1 group-hover:underline cursor-pointer">
{/* <span>View case study</span> */}
<i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
</a>
</CardContent>
</Card>
))}
</div>
</TabsContent>
<TabsContent value="all" className="mt-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "AI-Powered SmartDoc System",
category: "AI Solutions",
description: "Intelligent document processing system with advanced OCR and machine learning capabilities for automated document classification and data extraction.",
image: "https://readdy.ai/api/search-image?query=Modern%20AI%20document%20processing%20system%20interface%20showing%20document%20scanning%2C%20data%20extraction%2C%20and%20machine%20learning%20analysis%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-smartdoc&orientation=landscape"
},
{
title: "QwikPay Mobile Wallet",
category: "FinTech",
description: "Secure and intuitive mobile payment solution with advanced encryption and real-time transaction processing capabilities.",
image: "https://readdy.ai/api/search-image?query=Mobile%20wallet%20application%20interface%20showing%20payment%20processing%2C%20transaction%20history%2C%20and%20security%20features%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-qwikpay&orientation=landscape"
},
{
title: "HireFlex CRM",
category: "Enterprise Solutions",
description: "Custom web-based CRM with real-time analytics, automated workflow management, and comprehensive reporting capabilities.",
image: "https://readdy.ai/api/search-image?query=Modern%20CRM%20dashboard%20showing%20customer%20analytics%2C%20workflow%20management%2C%20and%20reporting%20tools%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-hireflex&orientation=landscape"
}
].map((project, index) => (
<Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
<div className="h-48 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>
</div>
<CardContent className="p-6">
<Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
{project.category}
</Badge>
<h3 className="text-xl font-bold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a href="#" className="text-indigo-600 font-medium flex items-center space-x-1 group-hover:underline cursor-pointer">
<span>View case study</span>
<i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
</a>
</CardContent>
</Card>
))}
</div>
</TabsContent>
<TabsContent value="web" className="mt-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "Custom CRM Dashboard",
category: "Enterprise Solutions",
description: "Comprehensive customer relationship management system with advanced analytics and reporting capabilities.",
image: "https://readdy.ai/api/search-image?query=Modern%20CRM%20dashboard%20interface%20showing%20customer%20analytics%2C%20sales%20pipeline%2C%20and%20reporting%20tools%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-crm&orientation=landscape"
},
{
title: "Online Appointment System",
category: "Healthcare",
description: "Sophisticated appointment scheduling platform with resource management and automated notifications.",
image: "https://readdy.ai/api/search-image?query=Online%20appointment%20booking%20system%20showing%20calendar%20interface%2C%20scheduling%20tools%2C%20and%20notification%20system%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-appointment&orientation=landscape"
},
{
title: "E-Commerce Admin Panel",
category: "E-Commerce",
description: "Feature-rich administration dashboard for managing products, orders, and customer relationships.",
image: "https://readdy.ai/api/search-image?query=E-commerce%20admin%20dashboard%20showing%20product%20management%2C%20order%20processing%2C%20and%20analytics%20tools%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-ecommerce&orientation=landscape"
}
].map((project, index) => (
<Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
<div className="h-48 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>
</div>
<CardContent className="p-6">
<Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
{project.category}
</Badge>
<h3 className="text-xl font-bold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a href="#" className="text-indigo-600 font-medium flex items-center space-x-1 group-hover:underline cursor-pointer">
<span>View case study</span>
<i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
</a>
</CardContent>
</Card>
))}
</div>
</TabsContent>
<TabsContent value="mobile" className="mt-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "Healthcare Mobile App",
category: "Healthcare",
description: "Comprehensive healthcare management app with appointment scheduling, telehealth services, and medical records access.",
image: "https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20interface%20showing%20medical%20appointments%2C%20telehealth%20consultation%2C%20and%20patient%20records%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-healthcare&orientation=landscape"
},
{
title: "Smart Logistics Tracker",
category: "Logistics",
description: "Real-time fleet management and shipment tracking application with route optimization and delivery analytics.",
image: "https://readdy.ai/api/search-image?query=Logistics%20tracking%20mobile%20app%20showing%20real-time%20fleet%20management%2C%20route%20optimization%2C%20and%20delivery%20analytics%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-logistics&orientation=landscape"
},
{
title: "EdTech Learning Companion",
category: "Education",
description: "Interactive learning platform with personalized content delivery, progress tracking, and collaborative features.",
image: "https://readdy.ai/api/search-image?query=Educational%20mobile%20app%20interface%20showing%20interactive%20learning%20modules%2C%20progress%20tracking%2C%20and%20collaborative%20features%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-edtech&orientation=landscape"
},
{
title: "Retail Loyalty Wallet",
category: "Retail",
description: "Digital loyalty program management app with rewards tracking, personalized offers, and seamless redemption.",
image: "https://readdy.ai/api/search-image?query=Retail%20loyalty%20app%20interface%20showing%20rewards%20tracking%2C%20personalized%20offers%2C%20and%20digital%20wallet%20features%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project-retail&orientation=landscape"
}
].map((project, index) => (
<Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
<div className="h-48 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>
</div>
<CardContent className="p-6">
<Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
{project.category}
</Badge>
<h3 className="text-xl font-bold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a href="#" className="text-indigo-600 font-medium flex items-center space-x-1 group-hover:underline cursor-pointer">
<span>View case study</span>
<i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
</a>
</CardContent>
</Card>
))}
</div>
</TabsContent>
<TabsContent value="cloud" className="mt-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
title: "E-commerce Cloud Migration",
category: "Cloud Solutions",
description: "Seamless migration of a large-scale e-commerce platform to AWS, improving performance and reducing operational costs by 35%.",
image: "https://readdy.ai/api/search-image?query=Cloud%20architecture%20diagram%20showing%20e-commerce%20platform%20infrastructure%20with%20servers%2C%20databases%2C%20and%20network%20connections%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project3&orientation=landscape"
},
{
title: "Banking Infrastructure Modernization",
category: "Cloud Solutions",
description: "Complete overhaul of legacy banking systems to a cloud-native architecture, enhancing security and scalability.",
image: "https://readdy.ai/api/search-image?query=Banking%20cloud%20infrastructure%20diagram%20showing%20secure%20financial%20systems%2C%20data%20processing%2C%20and%20API%20connections%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project11&orientation=landscape"
},
{
title: "Media Streaming Platform",
category: "Cloud Solutions",
description: "Scalable cloud architecture for a video streaming service, handling millions of concurrent users with minimal latency.",
image: "https://readdy.ai/api/search-image?query=Media%20streaming%20cloud%20architecture%20showing%20content%20delivery%20network%2C%20video%20processing%2C%20and%20user%20management%20in%20blue%20and%20purple%20color%20scheme%20on%20clean%20white%20background&width=600&height=400&seq=project12&orientation=landscape"
}
].map((project, index) => (
<Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
<div className="h-48 overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
/>
</div>
<CardContent className="p-6">
<Badge className="mb-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
{project.category}
</Badge>
<h3 className="text-xl font-bold mb-2">{project.title}</h3>
<p className="text-gray-600 mb-4">{project.description}</p>
<a href="#" className="text-indigo-600 font-medium flex items-center space-x-1 group-hover:underline cursor-pointer">
<span>View case study</span>
<i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
</a>
</CardContent>
</Card>
))}
</div>
</TabsContent>
</Tabs>
</div>
</section>

      <div id="our-process">
        <OurProcessSection />
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 text-sm rounded-full cursor-pointer">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">Don't just take our word for it. Hear from some of our satisfied clients about their experience working with us.</p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonial-swiper"
          >
            {[
              // {
              //   name: "Aarav Mehta",
              //   role: "Head of Business Development, B2B SaaS Firm",
              //   image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20male%20executive%20with%20confident%20smile%2C%20corporate%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial1&orientation=squarish",
              //   quote: "\"Game-Changer for Our Sales Team\" SuperSalesMind by Transerg completely transformed our outbound strategy. We went from manual prospecting to fully automated outreach within weeks. Our reply rates tripled, and our team now spends time closing, not chasing."
              // },
              {
                name: "Dr. Shweta Kulkarni",
                role: "Founder, MedBridge Healthtech",
                image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20female%20doctor%20with%20confident%20smile%2C%20medical%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial2&orientation=squarish",
                quote: "\"Top-Notch Development Partner\" Working with Transerg was seamless. They understood our vision for the mobile healthcare app and brought it to life with precision. Their communication, speed, and attention to detail were unmatched."
              },
              {
                name: "Raghav Jain",
                role: "Operations Lead, QSR Chain",
                image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20male%20operations%20executive%20with%20confident%20smile%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial3&orientation=squarish",
                quote: "\"Reliable, Scalable, Efficient\" Our franchise management platform needed rapid scaling. Transerg's web app solution allowed us to manage 50+ outlets from a single dashboard. They delivered beyond expectations."
              },
              {
                name: "Pooja Shah",
                role: "HR Director, TalentSync",
                image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20female%20HR%20executive%20with%20confident%20smile%2C%20corporate%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial4&orientation=squarish",
                quote: "\"Great Experience from Start to Finish\" Transerg helped us build an AI-powered resume shortlisting engine that reduced our hiring time drastically. Their team was proactive, innovative, and incredibly responsive throughout the project."
              },
              {
                name: "Ankit Rathi",
                role: "CTO, Retail360",
                image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20male%20CTO%20with%20confident%20smile%2C%20tech%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial5&orientation=squarish",
                quote: "\"Perfect Blend of Innovation & Execution\" From ideation to delivery, the Transerg team brought deep technical expertise and creativity to our eCommerce dashboard project. The end product was not just functional — it was beautiful and scalable."
              },
              // {
              //   name: "Neha Verma",
              //   role: "Product Manager, FinEdge Solutions",
              //   image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20female%20product%20manager%20with%20confident%20smile%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=testimonial6&orientation=squarish",
              //   quote: "\"Our Go-To Tech Partner for AI & Automation\" Transerg has been instrumental in building and scaling our internal AI tools. Their ability to turn complex requirements into simple, powerful solutions is impressive. We consider them an extension of our own team."
              // }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-4xl text-indigo-200 mb-6">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p className="text-gray-600 italic mb-8 flex-grow">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-4 cursor-pointer">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div id="blog">
        <BlogSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 text-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 text-sm rounded-full cursor-pointer">
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Let's Discuss Your Project</h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your business with cutting-edge technology solutions? Get in touch with our team to discuss your project requirements and how we can help you achieve your goals.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600">A-1, Chetana Towers, New Sheryanagar, Zambad Estate, Aurangabad - 431005</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">amit.dabe@transergllp.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 85529 48957</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/transerg-llp" target='_blank' className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://x.com/TransergLLP" target='_blank' className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                {/* <a href="https://www.instagram.com/supersalesmind/" target='_blank' className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}
              </div>
            </div>
            <div>
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 min-h-[120px]"
                        required
                      />
                    </div>
                    {submitStatus && (
                      <div className={`p-3 rounded-md ${
                        submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <span className="mr-2">Send Message</span>
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      {/* <CTA /> */}

      {/* Blog Section */}

    </div>
  );
}
