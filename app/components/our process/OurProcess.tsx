
import React from 'react';
import ProcessStepCard from './ProcessStepCard';
import { motion } from 'framer-motion';

const OurProcessSection: React.FC = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "Understand your goals and create a tailored strategy.",
      substeps: [
        { text: "Deep-dive into your business objectives and pain points" },
        { text: "Identify high-impact opportunities for innovation" },
        { text: "Craft a roadmap aligned with your goals" }
      ]
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description: "UI/UX that combines beauty and functionality.",
      substeps: [
        { text: "Wireframing key user journeys" },
        { text: "Designing clean, intuitive interfaces" },
        { text: "Validating ideas through clickable prototypes" }
      ]
    },
    {
      number: 3,
      title: "Development & Integration",
      description: "Agile development cycles with continuous feedback.",
      substeps: [
        { text: "Build core features in iterative sprints" },
        { text: "Integrate with your existing systems" },
        { text: "Gather and act on user feedback in real-time" }
      ]
    },
    {
      number: 4,
      title: "Launch & Scale",
      description: "Deploy, monitor, and improve based on real user insights.",
      substeps: [
        { text: "Seamless product launch" },
        { text: "Track performance and usage patterns" },
        { text: "Optimize and scale based on data" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-3 px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
              <span className="text-indigo-600 dark:text-indigo-300 font-medium text-sm">OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-600 dark:bg-clip-text">
              A Transparent Process. Tangible Results
            </h2>
            
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              We follow a transparent, structured approach that turns your vision into reality. 
              With clarity at every step, our team ensures you see measurable results—fast.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step) => (
            <ProcessStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              substeps={step.substeps}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
