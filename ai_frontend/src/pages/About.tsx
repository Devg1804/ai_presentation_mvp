import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MessageSquareHeart, Building2, Star, Handshake, BookUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and presentation technology"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "AI expert specializing in natural language processing"
    },
    {
      name: "Elena Rodriguez",
      role: "Design Director",
      description: "Award-winning designer with passion for user experience"
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      description: "Full-stack developer with focus on scalable solutions"
    }
  ];

  const achievements = [
    { number: "50K+", label: "Presentations Created" },
    { number: "100+", label: "Enterprise Clients" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "25+", label: "Industry Awards" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-brand-purple/5 to-transparent py-20">
          <div className="container px-4 mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">SlideAI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in">
              Revolutionizing presentation creation with artificial intelligence and design excellence
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/templates">
                <Button 
                  size="lg"
                  className="bg-brand-purple hover:bg-brand-purple/90 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Templates
                </Button>
              </Link>
              <Link to="/create">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-brand-purple/5"
                >
                  Start Creating
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent>
                  <div className="mx-auto w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize professional presentation creation through innovative AI technology
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent>
                  <div className="mx-auto w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                  <p className="text-gray-600">
                    A diverse group of experts passionate about AI and design excellence
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent>
                  <div className="mx-auto w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Innovation, accessibility, and excellence in everything we do
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-brand-purple mb-2 group-hover:animate-pulse">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue flex items-center justify-center">
                      <BookUser className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                    <div className="text-brand-purple text-sm text-center mb-3">{member.role}</div>
                    <p className="text-gray-600 text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2024, SlideAI emerged from a simple yet powerful observation: creating 
                  professional presentations shouldn't be time-consuming or require expert design skills. 
                  We set out to revolutionize how presentations are created by combining cutting-edge AI 
                  technology with intuitive design principles.
                </p>
                <p>
                  Our journey began with a small team of passionate innovators who believed in the power 
                  of AI to transform creative processes. Today, we're proud to help thousands of 
                  professionals, educators, and students worldwide create stunning presentations that 
                  capture attention and convey messages effectively.
                </p>
                <p>
                  As we continue to grow, our commitment to innovation and excellence remains unwavering. 
                  Our AI-powered platform evolves daily, learning from each presentation to deliver even 
                  better results. We're excited about the future and grateful to be part of our users' 
                  success stories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Presentations?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied users and experience the future of presentation creation
            </p>
            <Link to="/create">
              <Button 
                size="lg"
                className="bg-brand-purple hover:bg-brand-purple/90 transform hover:scale-105 transition-all duration-300"
              >
                Start Creating Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;