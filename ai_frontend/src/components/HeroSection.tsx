
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 -z-10"></div>
      
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Create stunning <span className="gradient-text">presentations</span> with AI
            </h1>
            <p className="text-xl text-gray-600">
              Transform your ideas into beautiful slide decks in seconds with our AI-powered presentation tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/create">
                <Button className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg">
                  Create Presentation
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="outline" className="w-full sm:w-auto border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-6 text-lg">
                  Explore Templates
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Presentation example"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
