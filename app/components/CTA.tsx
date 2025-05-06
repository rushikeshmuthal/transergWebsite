'use client';
import React from 'react';
import { Button } from "./ui/button";

interface CTAProps {
  title?: string;
  description?: string;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Start Your Digital Transformation?",
  description = "Join hundreds of satisfied clients who have transformed their businesses with our innovative IT solutions. Let's build something amazing together.",
  secondaryButtonText = "Schedule a Consultation",
  onSecondaryClick
}) => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-indigo-100 max-w-3xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-indigo-700 px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer"
            onClick={() => window.open("https://calendly.com/transergllp/transerg-llp-saas-meeting", "_blank")}          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 