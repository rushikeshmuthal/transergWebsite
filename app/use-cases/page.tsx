import React from 'react';
import Navbar from '@/app/components/Header';
import UseCaseCard from '@/app/components/Use Cases/UseCaseCard';
import { FileText, Shield, Users, File } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function UseCases() {
  const useCases = [
    {
      icon: <File className="h-7 w-7 text-white" />,
      title: "Software License Cost Optimization",
      description: "AI-powered analysis and optimization of software licenses to reduce over-licensing and ensure compliance requirements.",
      benefits: [
        { text: "Reduce license costs by up to 30%" },
        { text: "Avoid compliance risks and audit penalties" }
      ],
      iconBgColor: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    {
      icon: <FileText className="h-7 w-7 text-white" />,
      title: "Intelligent Document Processing (IDP)",
      description: "AI-driven Intelligent Document Processing automates the extraction, classification, and processing of complex documents, significantly reducing manual efforts and improving accuracy.",
      benefits: [
        { text: "Reduce manual processing costs by up to 70%" },
        { text: "Improve document processing speed by up to 85%" }
      ],
      iconBgColor: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    {
      icon: <Shield className="h-7 w-7 text-white" />,
      title: "Automated Regulation Impact Assessment",
      description: "Real-time AI-driven assessment of regulatory updates mapped directly to internal SOPs and operational processes.",
      benefits: [
        { text: "Reduce compliance review and update cycles by up to 50%" },
        { text: "Lower the risk of compliance breaches and related penalties" }
      ],
      iconBgColor: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    {
      icon: <Users className="h-7 w-7 text-white" />,
      title: "Agentic Workflow Automation",
      description: "Intelligent AI agents that autonomously execute complex business processes, delivering substantial efficiency improvements across your organization.",
      benefits: [
        { text: "60% efficiency improvement" },
        { text: "Streamline operations across departments" }
      ],
      iconBgColor: "bg-gradient-to-r from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-[#f8f7ff] py-20">
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                AI <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Use Cases</span> for Business
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
              <p className="mx-auto text-xl text-gray-600">
                Explore our comprehensive collection of AI automation solutions designed to 
                optimize your business processes and drive growth.
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              {useCases.map((useCase, index) => (
                <UseCaseCard 
                  key={index}
                  icon={useCase.icon}
                  title={useCase.title}
                  description={useCase.description}
                  benefits={useCase.benefits}
                  iconBgColor={useCase.iconBgColor}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                Schedule Your AI Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
     
    </div>
  );
};
