import React from 'react';
import { Brain, Rocket, MessageSquareText, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Deep AI & SaaS Expertise",
      description: "Years of hands-on experience delivering scalable AI and SaaS solutions tailored to real-world business needs, across multiple industries."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Fast Delivery with Agile Teams",
      description: "Lean, agile squads that move fast—turning ideas into production-ready solutions in record time, with continuous iteration and improvement."
    },
    {
      icon: <MessageSquareText className="w-12 h-12" />,
      title: "Transparent Communication",
      description: "Clear, consistent updates at every stage. No surprises, just alignment and clarity through open, proactive collaboration."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Data-Driven Decision Making",
      description: "We rely on insights—not guesswork—to guide strategies, optimize results continuously, and ensure measurable business impact."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Transerg
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with strategic insight to deliver transformative solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/20"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ rotate: -10 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600">
                    {feature.icon}
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 