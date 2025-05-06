
import React from 'react';


import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

interface SubStep {
  text: string;
}

interface ProcessStepCardProps {
  number: number;
  title: string;
  description: string;
  substeps: SubStep[];
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  number,
  title,
  description,
  substeps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: number * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={`step-${number}`} className="border border-gray-100 dark:border-indigo-900 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden mb-4">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center text-left gap-4 w-full">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold dark:bg-indigo-500">
                {number}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-foreground">{title}</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">{description}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-2">
            <div className="pl-16">
              <h4 className="font-medium mb-3 text-gray-800 dark:text-foreground">Substeps:</h4>
              <ul className="space-y-2">
                {substeps.map((substep, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                    </div>
                    <span className="text-gray-700 dark:text-foreground">{substep.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default ProcessStepCard;
