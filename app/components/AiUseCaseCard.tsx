import React from 'react';
import { cn } from '../lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface AiUseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  bgColor: string;
  borderColor: string;
}

const AiUseCaseCard: React.FC<AiUseCaseCardProps> = ({
  icon,
  title,
  description,
  metric,
  bgColor,
  borderColor,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative overflow-hidden rounded-xl p-6 h-full border-2 shadow-lg transition-all duration-300",
        borderColor
      )}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("absolute top-0 right-0 w-40 h-40 rounded-full -mr-20 -mt-20", bgColor)} 
      />
      
      <div className="relative z-10">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn("p-3 rounded-lg inline-flex items-center justify-center mb-4", bgColor)}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-bold mb-3"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 mb-6"
        >
          {description}
        </motion.p>
        
        <div className="flex flex-col space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-2 text-emerald-600 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{metric}</span>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ x: 5 }}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AiUseCaseCard;