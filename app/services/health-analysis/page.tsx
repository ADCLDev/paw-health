// app/services/health-analysis/page.tsx
'use client';

import { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  FileText,
  Brain,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <div className="flex flex-col items-start">
        <div className="p-3 bg-blue-100 rounded-lg mb-4">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function HealthAnalysisPage() {
  const [activeTab, setActiveTab] = useState('about');

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze pet photos to detect potential health issues."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get immediate analysis results and recommendations within seconds."
    },
    {
      icon: Shield,
      title: "Veterinarian Verified",
      description: "Our AI model is trained and verified by experienced veterinary professionals."
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Receive comprehensive reports that you can share with your veterinarian."
    }
  ];

  const process = [
    {
      title: "Upload Photo",
      description: "Take or upload a clear photo of your pet's condition or concern."
    },
    {
      title: "AI Analysis",
      description: "Our AI system analyzes the image for potential health issues."
    },
    {
      title: "Get Results",
      description: "Receive detailed analysis and recommendations within seconds."
    },
    {
      title: "Take Action",
      description: "Follow the recommended steps or consult with a veterinarian if needed."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Pet Health Analysis</h1>
          <p className="text-xl mb-6 opacity-90">
            Get instant AI-powered analysis of your pet&apos;s health conditions using just a photo.
          </p>
          <button className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Try Analysis Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-8">
        {['about', 'features', 'process', 'pricing'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium capitalize ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* About Section */}
        {activeTab === 'about' && (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About Health Analysis</h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered health analysis service provides quick, accurate insights into your pet&apos;s health conditions.
              By analyzing photos of your pet, we can help identify potential health issues and provide recommendations
              for next steps.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-600" />
                Important Note
              </h3>
              <p className="text-gray-600">
                While our AI analysis provides valuable insights, it is not a substitute for professional veterinary care.
                Always consult with a qualified veterinarian for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeTab === 'features' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        )}

        {/* Process Section */}
        {activeTab === 'process' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {activeTab === 'pricing' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <h3 className="text-lg font-semibold">Basic</h3>
                  <p className="text-3xl font-bold">Free</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['3 analyses per month', 'Basic health reports', 'Email support'].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-600">
                <CardHeader className="pb-4">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <p className="text-3xl font-bold">$9.99<span className="text-sm font-normal">/month</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Unlimited analyses',
                      'Detailed health reports',
                      'Priority support',
                      'History tracking',
                      'Vet consultation discounts'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-4">
                  <h3 className="text-lg font-semibold">Business</h3>
                  <p className="text-3xl font-bold">Custom</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Everything in Pro',
                      'API access',
                      'Custom integration',
                      'Dedicated support',
                      'Staff training'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Try our health analysis service today and get insights into your pet&apos;s health.
        </p>
        <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          Start Free Analysis
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}