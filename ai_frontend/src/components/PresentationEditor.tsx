import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle2 } from 'lucide-react';
import axios from "axios";

// Template options
const templates = [
  { id: 'modern', name: 'Modern', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop' },
  { id: 'minimal', name: 'Minimal', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop' },
  { id: 'corporate', name: 'Corporate', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
  { id: 'creative', name: 'Creative', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop' }
];

const PresentationEditor = () => {
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSlides, setGeneratedSlides] = useState<any[]>([]);
  const [numSlides, setNumSlides] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string>('');
  const { toast } = useToast();

  // Mock function to simulate AI slide generation (in second file)
  const generatePresentation = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic is required",
        description: "Please enter a presentation topic to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // API call to generate slides (from first file)
      const response = await axios.post(
        "https://ai-presentation-mvp.onrender.com/generate-slides",
        {
          topic,
          num_slides: numSlides,
        },
        {
          responseType: "blob",
        }
      );

      const file = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      });

      const fileURL = URL.createObjectURL(file);
      setFileUrl(fileURL);

      setIsGenerating(false);
      toast({
        title: "Presentation generated!",
        description: "Your AI-powered presentation is ready to view and edit.",
      });
    } catch (error) {
      alert("Failed to generate slides.");
      console.error(error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="container py-8">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="preview" >Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-6">What's your presentation about?</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium mb-1">
                  Presentation Topic
                </label>
                <input
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="E.g., Company Overview, Project Proposal, Market Analysis"
                />
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-1">
                  Additional Details (optional)
                </label>
                <Textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md min-h-[150px]"
                  placeholder="Add any specific points, data, or information you want to include..."
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={generatePresentation}
              disabled={isGenerating}
              className="bg-brand-purple hover:bg-brand-purple/90"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>Generate Presentation</>
              )}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="design">
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose a template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map(template => (
                <Card 
                  key={template.id}
                  className={`overflow-hidden cursor-pointer transition-all ${
                    selectedTemplate === template.id 
                      ? 'ring-2 ring-brand-purple scale-105' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="relative">
                    <img src={template.image} alt={template.name} className="w-full h-40 object-cover" />
                    {selectedTemplate === template.id && (
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                        <CheckCircle2 className="h-5 w-5 text-brand-purple" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{template.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview">
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Presentation</h2>
            
            {fileUrl ? (
              <div className="mt-6 text-center">
                <a
                  href={fileUrl}
                  download="SlideGenAI.pptx"
                  className="text-blue-600 font-semibold underline"
                >
                  Download Generated PPT 📥
                </a>
              </div>
            ) : (
              <div className="text-center p-12 border border-dashed rounded-lg">
                <p className="text-gray-500">No presentation generated yet. Go to the Content tab to get started.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PresentationEditor;
