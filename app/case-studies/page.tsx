'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from "../components/ui/badge";
import CTA from '../components/CTA';

const featuredProjects = [
  {
    id: "01",
    title: "AI-Powered SmartDoc System",
    industry: "Healthcare",
    challenge: "Manual data entry and inefficiencies in medical documentation",
    solution: "Implemented Generative AI to automate patient record summarization and assist with diagnostics.",
    results: "Reduced operational time by 60%, increasing staff efficiency and improving patient care outcomes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techStack: ["Python", "TensorFlow", "React", "Node.js"]
  },
  {
    id: "02",
    title: "QwikPay Mobile Wallet",
    industry: "Fintech",
    challenge: "Low user engagement and high churn rate in existing payment app",
    solution: "Redesign of UI/UX, integration of biometric security, and rewards program.",
    results: "Achieved 40K downloads within 3 months, with an average rating of 4.8⭐.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techStack: ["React Native", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: "03",
    title: "HireFlex CRM",
    industry: "HR Technology",
    challenge: "Inefficient recruitment workflows and fragmented processes in mid-sized businesses",
    solution: "Developed a custom web-based CRM with real-time analytics and automated interview scheduling.",
    results: "Reduced hiring cycle by 35% and enhanced collaboration across teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    techStack: ["Vue.js", "Django", "PostgreSQL", "Docker"]
  }
];

const projectCategories = [
  {
    title: "📱 Mobile Applications",
    description: "Innovative mobile solutions that transform user experiences",
    projects: [
      {
        title: "Healthcare Mobile App",
        description: "Developed a HIPAA-compliant mobile healthcare application to enhance the doctor-patient experience. Features include appointment booking, real-time report updates, medication tracking, and in-app video consultations.",
        impact: "Improved patient engagement by 40% and reduced appointment no-shows through automated reminders.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        color: "from-blue-500 to-cyan-500"
      }
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Case Studies Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white text-indigo-600 hover:bg-indigo-50 px-3 py-1 text-sm rounded-full cursor-pointer">
              🚀 Our Projects
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Empowering Innovation, One Project at a Time
            </h1>
            <p className="text-xl text-indigo-100">
              At Transerg LLP, we pride ourselves on delivering groundbreaking solutions that drive transformation across industries. Each project showcases our expertise in AI, SaaS, and custom digital solutions — creating measurable impact for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🔍 Featured Projects</h2>
            <p className="text-xl text-gray-600">Discover our most impactful solutions</p>
          </div>
          {featuredProjects.map((project, index) => (
            <div key={index} className={`mb-24 ${index !== featuredProjects.length - 1 ? 'border-b border-gray-200 pb-24' : ''}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-8 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">{project.id}</span>
                      <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                        {project.industry}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">🎯 Challenge:</h4>
                        <p className="text-gray-600">{project.challenge}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">💡 Solution:</h4>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-700 mb-2">📈 Results:</h4>
                        <p className="text-gray-600">{project.results}</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">🛠️ Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge key={i} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {category.projects.map((project, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-indigo-600 font-medium">
                        <span className="font-bold">Impact:</span> {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] opacity-10"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-indigo-100">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-indigo-100">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-indigo-100">Tech Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-cube text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold">Transerg</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading provider of AI-powered technology solutions. We help businesses leverage artificial intelligence to drive innovation and growth.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/transerg-llp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/TransergLLP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">AI Solutions</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Web Development</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mobile App Development</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">QA and Testing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2023 TransergLLp. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};