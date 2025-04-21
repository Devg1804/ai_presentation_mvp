
// import React from 'react';
// import { CommandIcon, SparklesIcon, LayoutTemplateIcon, WandIcon } from 'lucide-react';

// const features = [
//   {
//     icon: <SparklesIcon className="w-8 h-8 text-brand-purple" />,
//     title: 'AI-Powered Slide Generation',
//     description: 'Enter your content or ideas, and our AI instantly creates professional slides with the right formatting and layout.'
//   },
//   {
//     icon: <LayoutTemplateIcon className="w-8 h-8 text-brand-purple" />,
//     title: 'Beautiful Templates',
//     description: 'Choose from dozens of professionally designed templates to make your presentations stand out.'
//   },
//   {
//     icon: <CommandIcon className="w-8 h-8 text-brand-purple" />,
//     title: 'Simple Editing',
//     description: 'Easily customize every aspect of your slides with our intuitive drag-and-drop editor.'
//   },
//   {
//     icon: <WandIcon className="w-8 h-8 text-brand-purple" />,
//     title: 'Instant Styling',
//     description: 'Apply cohesive styles, color schemes, and typography with just one click.'
//   }
// ];

// const FeaturesSection = () => {
//   return (
//     <div className="py-20 bg-gray-50">
//       <div className="container">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Powerful <span className="gradient-text">Features</span>
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
//             Create beautiful presentations without the design work
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;

import React from 'react';
import { 
  CommandIcon, 
  SparklesIcon, 
  LayoutTemplateIcon, 
  WandIcon, 
  BrainIcon,
  PresentationIcon,
  ImageIcon,
  PaletteIcon 
} from 'lucide-react';

const features = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-brand-purple" />,
    title: 'AI-Powered Generation',
    description: 'Transform your ideas into professional presentations with advanced AI that understands context and creates engaging content.',
    gradient: 'from-purple-500/10 to-blue-500/10'
  },
  {
    icon: <BrainIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Smart Suggestions',
    description: 'Get intelligent recommendations for content, layouts, and design elements based on your presentation topic.',
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: <LayoutTemplateIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Dynamic Templates',
    description: 'Access a wide range of professionally designed templates that automatically adapt to your content.',
    gradient: 'from-cyan-500/10 to-teal-500/10'
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Auto Image Selection',
    description: 'AI automatically selects and places relevant, high-quality images that match your content perfectly.',
    gradient: 'from-teal-500/10 to-emerald-500/10'
  },
  {
    icon: <CommandIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Smart Editor',
    description: 'Intuitive drag-and-drop interface with AI-powered suggestions for better content organization.',
    gradient: 'from-emerald-500/10 to-green-500/10'
  },
  {
    icon: <PaletteIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Theme Intelligence',
    description: 'AI analyzes your content to suggest perfect color schemes and typography combinations.',
    gradient: 'from-green-500/10 to-lime-500/10'
  },
  {
    icon: <WandIcon className="w-8 h-8 text-brand-purple" />,
    title: 'One-Click Styling',
    description: 'Instantly apply cohesive styles across your entire presentation while maintaining visual harmony.',
    gradient: 'from-lime-500/10 to-yellow-500/10'
  },
  {
    icon: <PresentationIcon className="w-8 h-8 text-brand-purple" />,
    title: 'Presentation Analytics',
    description: 'Get insights about your presentation structure and suggestions for improvement.',
    gradient: 'from-yellow-500/10 to-purple-500/10'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="gradient-text">Advanced AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning presentations in minutes with our AI-powered platform that understands your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-white/90 transition-opacity group-hover:bg-white/95" />
              <div className="relative z-10">
                <div className="mb-4 inline-block rounded-lg bg-brand-purple/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;