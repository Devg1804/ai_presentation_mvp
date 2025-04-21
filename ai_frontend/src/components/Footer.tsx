
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">SlideAI</h3>
            <p className="text-gray-600">Create stunning presentations with the power of AI.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-brand-purple">Features</Link></li>
              <li><Link to="/templates" className="text-gray-600 hover:text-brand-purple">Templates</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-purple">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-purple">Blog</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-brand-purple">Support</Link></li>
              <li><Link to="/tutorials" className="text-gray-600 hover:text-brand-purple">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-purple">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-purple">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-brand-purple">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>© {new Date().getFullYear()} SlideAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
