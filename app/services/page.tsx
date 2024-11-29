// app/services/page.tsx
'use client';

import { 
  Stethoscope, 
  Search, 
  UserPlus, 
  HeartPulse,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: ServiceFeature[];
  primaryColor: string;
  secondaryColor: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features,
  primaryColor,
  secondaryColor
}: ServiceCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className={`${primaryColor} ${secondaryColor} p-6`}>
      <Icon className="w-12 h-12 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      title: "Health Analysis",
      description: "AI-powered pet health assessment using photo analysis",
      icon: Stethoscope,
      primaryColor: "bg-blue-600",
      secondaryColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      features: [
        {
          title: "Visual Health Check",
          description: "Upload photos for instant AI analysis of visible health conditions"
        },
        {
          title: "Symptom Detection",
          description: "Advanced recognition of common pet health issues and symptoms"
        },
        {
          title: "Severity Assessment",
          description: "Get immediate feedback on the urgency of veterinary care"
        },
        {
          title: "Health Reports",
          description: "Detailed reports you can share with your veterinarian"
        }
      ]
    },
    {
      title: "Breed Identification",
      description: "Accurate breed recognition and trait analysis",
      icon: Search,
      primaryColor: "bg-purple-600",
      secondaryColor: "bg-gradient-to-br from-purple-600 to-purple-700",
      features: [
        {
          title: "Multi-Breed Detection",
          description: "Identify mixed breeds and their approximate percentages"
        },
        {
          title: "Trait Analysis",
          description: "Learn about typical characteristics and behaviors"
        },
        {
          title: "Health Predispositions",
          description: "Understand breed-specific health considerations"
        },
        {
          title: "Care Recommendations",
          description: "Get breed-specific care and training advice"
        }
      ]
    },
    {
      title: "Vet Referrals",
      description: "Connect with qualified veterinary professionals",
      icon: UserPlus,
      primaryColor: "bg-green-600",
      secondaryColor: "bg-gradient-to-br from-green-600 to-green-700",
      features: [
        {
          title: "Local Vet Network",
          description: "Find verified veterinarians in your area"
        },
        {
          title: "Emergency Services",
          description: "Quick access to 24/7 emergency pet care facilities"
        },
        {
          title: "Specialist Referrals",
          description: "Connect with specialized veterinary professionals"
        },
        {
          title: "Appointment Booking",
          description: "Easy online scheduling with partner clinics"
        }
      ]
    },
    {
      title: "Pet Care Tips",
      description: "Expert advice for optimal pet health and happiness",
      icon: HeartPulse,
      primaryColor: "bg-rose-600",
      secondaryColor: "bg-gradient-to-br from-rose-600 to-rose-700",
      features: [
        {
          title: "Daily Care Guides",
          description: "Comprehensive guides for routine pet care"
        },
        {
          title: "Nutrition Advice",
          description: "Personalized feeding and dietary recommendations"
        },
        {
          title: "Exercise Plans",
          description: "Age and breed-appropriate exercise routines"
        },
        {
          title: "Behavioral Tips",
          description: "Solutions for common behavioral challenges"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600">
          Comprehensive pet care solutions powered by advanced AI technology to keep your furry friends healthy and happy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            features={service.features}
            primaryColor={service.primaryColor}
            secondaryColor={service.secondaryColor}
          />
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Service?</h2>
        <p className="text-gray-600 mb-6">
          Our pet care specialists are here to help you find the perfect solution for your pet's needs.
        </p>
        <button className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}