import React from 'react';
import AiUseCaseCard from './AiUseCaseCard';
import { Button } from './ui/button';
import { FileText, FileCode, Shield, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AiUseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Software License Cost Optimization",
      description: "AI-driven software license optimization for significant cost savings.",
      metric: "Up to 30% cost reduction",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: <FileCode className="h-6 w-6 text-green-600" />,
      title: "Intelligent Document Processing",
      description: "AI-driven document processing automation with improved accuracy.",
      metric: "Up to 40% cost reduction",
      bgColor: "bg-green-100",
      borderColor: "border-green-200"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Automated Compliance Assessment",
      description: "Real-time assessment of regulatory updates for internal processes.",
      metric: "50% faster compliance cycles",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Agentic Workflow Automation",
      description: "Intelligent AI agents that autonomously execute complex business processes.",
      metric: "60% efficiency improvement",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white text-black container mx-auto px-6 max-w-7xl"
    >
      <div className="flex items-center justify-between ">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-12'
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4"
          >
            AI Use Cases
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Optimize Your Business Processes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl"
          >
            Discover our powerful AI solutions for measurable cost savings and efficiency gains.
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-right"
        >
          <Link href="/use-cases">
            <Button variant="outline" className="group">
              View all use cases
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <AiUseCaseCard
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              metric={useCase.metric}
              bgColor={useCase.bgColor}
              borderColor={useCase.borderColor}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AiUseCasesSection;