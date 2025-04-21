import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold gradient-text group-hover:opacity-80 transition-opacity">
            SlideAI
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/features" 
            className="text-brand-dark hover:text-brand-purple transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-purple after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Features
          </Link>
          <Link 
            to="/templates" 
            className="text-brand-dark hover:text-brand-purple transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-purple after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Templates
          </Link>
          <Link 
            to="/pricing" 
            className="text-brand-dark hover:text-brand-purple transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-purple after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            className="text-brand-dark hover:text-brand-purple transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-purple after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            About
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/create">
            <Button 
              variant="default" 
              className="bg-brand-purple hover:bg-brand-purple/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-purple/25"
            >
              Create Presentation
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
