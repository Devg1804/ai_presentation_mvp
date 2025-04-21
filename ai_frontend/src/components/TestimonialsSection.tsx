
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "SlideAI has completely revolutionized how I create presentations. What used to take hours now takes minutes.",
    author: "Sarah Johnson",
    title: "Marketing Director"
  },
  {
    quote: "I'm amazed at how well the AI understands my content and formats it into beautiful slides. Game changer!",
    author: "Michael Chen",
    title: "Product Manager"
  },
  {
    quote: "As someone who dreads making presentations, SlideAI has been a lifesaver. Professional results with minimal effort.",
    author: "Alex Rodriguez",
    title: "Sales Executive"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users are saying about SlideAI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="p-6">
                <div className="mb-4 text-brand-purple">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 13.3333H5.33366V8.00001H10.667V13.3333ZM26.667 13.3333H21.3337V8.00001H26.667V13.3333ZM10.667 29.3333H5.33366V24H10.667V29.3333ZM26.667 29.3333H21.3337V24H26.667V29.3333Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
