
import React from 'react';
import Navbar from '@/components/Navbar';
import PresentationEditor from '@/components/PresentationEditor';
import Footer from '@/components/Footer';

const CreatePresentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Create Your Presentation</h1>
          <PresentationEditor />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePresentation;
