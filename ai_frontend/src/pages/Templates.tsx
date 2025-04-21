import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutTemplateIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const templates = [
  {
    title: "Business Pitch",
    description: "Professional templates for pitch decks and business presentations",
    category: "Business",
    slides: 12
  },
  {
    title: "Educational Course",
    description: "Engaging layouts for educational content and lessons",
    category: "Education",
    slides: 15
  },
  {
    title: "Marketing Plan",
    description: "Strategic templates for marketing campaigns and plans",
    category: "Marketing",
    slides: 10
  },
  {
    title: "Portfolio Showcase",
    description: "Creative layouts to showcase your work and achievements",
    category: "Portfolio",
    slides: 8
  }
];

const Templates = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUseTemplate = (templateTitle: string) => {
    toast({
      title: "Template Selected",
      description: `Starting new presentation with ${templateTitle} template`,
    });
    navigate('/create');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Templates</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professionally designed templates to create stunning presentations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/50 backdrop-blur-sm border border-gray-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-brand-purple transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {template.category}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {template.slides} slides
                        </span>
                      </div>
                    </div>
                    <div className="text-brand-purple transform group-hover:rotate-12 transition-transform">
                      <LayoutTemplateIcon className="w-8 h-8" />
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90 transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleUseTemplate(template.title)}
                  >
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
