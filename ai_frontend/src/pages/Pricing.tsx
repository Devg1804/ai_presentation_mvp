import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out SlideAI",
    features: [
      "5 presentations per month",
      "Basic AI features",
      "Standard templates",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    popular: true,
    description: "Best for professionals and small teams",
    features: [
      "Unlimited presentations",
      "Advanced AI features",
      "Premium templates",
      "Priority support",
      "Custom branding",
      "Collaboration tools"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger organizations with specific needs",
    features: [
      "Everything in Pro",
      "Custom templates",
      "API access",
      "Dedicated support",
      "SSO integration",
      "Advanced analytics"
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = (planName: string) => {
    toast({
      title: "Plan Selected",
      description: `You've selected the ${planName} plan. Let's get started!`,
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
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your presentation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transform hover:-translate-y-1 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-brand-purple shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-600">{plan.period}</span>
                      )}
                    </div>
                  </CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="text-brand-purple w-5 h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleGetStarted(plan.name)}
                    className={`w-full transform hover:scale-105 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-brand-purple hover:bg-brand-purple/90 shadow-lg hover:shadow-brand-purple/25' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    Get Started
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

export default Pricing;