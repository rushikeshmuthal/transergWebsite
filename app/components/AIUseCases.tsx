'use client';
import React from 'react';
import { FileText, Bot, Scale, Workflow } from 'lucide-react';
import { Button } from "./ui/button";

const AIUseCases: React.FC = () => {
  const useCases = [
    {
      icon: <FileText className="w-12 h-12 text-blue-100" />,
      title: "Software License Cost Optimization",
      description: "AI-driven software license optimization for significant cost savings.",
      benefit: "Up to 30% cost reduction",
      color: "bg-blue-600"
    },
    {
      icon: <Bot className="w-12 h-12 text-emerald-100" />,
      title: "Intelligent Document Processing",
      description: "AI-driven document processing automation with improved accuracy.",
      benefit: "Up to 40% cost reduction",
      color: "bg-emerald-600"
    },
    {
      icon: <Scale className="w-12 h-12 text-purple-100" />,
      title: "Automated Compliance Assessment",
      description: "Real-time assessment of regulatory updates for internal processes.",
      benefit: "50% faster compliance cycles",
      color: "bg-purple-600"
    },
    {
      icon: <Workflow className="w-12 h-12 text-orange-100" />,
      title: "Agentic Workflow Automation",
      description: "Intelligent AI agents that autonomously execute complex business processes.",
      benefit: "60% efficiency improvement",
      color: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-indigo-600 font-semibold">AI Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">Optimize Your Business Processes</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Discover our powerful AI solutions for measurable cost savings and efficiency gains.
            </p>
          </div>
          <Button variant="outline" className="hidden md:block">
            View all use cases
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className={`${useCase.color} p-6`}>
                <div className="mb-4">{useCase.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ {useCase.benefit}
                </div>
                <div className="mt-4">
                  <Button variant="link" className="text-indigo-600 hover:text-indigo-700 p-0">
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline">
            View all use cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIUseCases; 