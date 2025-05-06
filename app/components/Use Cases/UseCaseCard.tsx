'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface Benefit {
  text: string;
}

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: Benefit[];
  iconBgColor: string;
}

const UseCaseCard = ({
  icon,
  title,
  description,
  benefits,
  iconBgColor
}: UseCaseProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6 rounded-xl border border-purple-300/30 bg-white p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className={cn("flex h-14 w-14 items-center justify-center rounded-full", iconBgColor)}>
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      
      <div>
        <p className="mb-6 mt-5 text-gray-700 pl-[4.75rem] border-l-2 border-[#E5DEFF]">{description}</p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 pl-[4.75rem]">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-700">
              <div className="bg-[#E5DEFF] rounded-full p-1">
                <Check size={14} className="text-[#8B5CF6]" />
              </div>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pl-[4.75rem]">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center">
            Learn more <ChevronDown size={16} className="ml-1 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;
