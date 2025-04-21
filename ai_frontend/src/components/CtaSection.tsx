
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <div className="py-20 bg-brand-purple text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to create amazing presentations?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of professionals who save time and create better presentations with SlideAI.
        </p>
        <Link to="/create">
          <Button className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Start Creating for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaSection;
