// app/about/page.tsx
'use client';

import { 
  Heart, 
  Users, 
  Award, 
  Target,
  Shield,
  BarChart,
  PawPrint
} from 'lucide-react';

const TeamMember = ({ 
  name, 
  role, 
  image 
}: { 
  name: string; 
  role: string; 
  image: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const StatCard = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
    <Icon className="w-8 h-8 mx-auto mb-4 text-rose-500" />
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default function AboutPage() {
  const stats = [
    { icon: PawPrint, value: "50,000+", label: "Pets Analyzed" },
    { icon: Users, value: "30,000+", label: "Happy Pet Parents" },
    { icon: BarChart, value: "95%", label: "Accuracy Rate" },
    { icon: Shield, value: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Dr. Sarah Wilson",
      role: "Chief Veterinary Officer",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Mike Johnson",
      role: "AI Research Lead",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Emily Chen",
      role: "Pet Health Specialist",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Thompson",
      role: "Technology Director",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About PawHealth AI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to revolutionize pet healthcare through AI technology,
          making it more accessible, efficient, and reliable for pet parents worldwide.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="text-rose-500" />
            Our Mission
          </h2>
          <p className="text-gray-600">
            To empower pet parents with advanced AI technology that helps them make
            informed decisions about their pets' health and well-being, while supporting
            veterinarians in providing the best possible care.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="text-rose-500" />
            Our Vision
          </h2>
          <p className="text-gray-600">
            To create a world where every pet has access to immediate health insights,
            leading to longer, healthier, and happier lives for our beloved companions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div> */}

      {/* Values Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="font-semibold text-xl mb-2">Pet-First Approach</h3>
            <p className="text-gray-600">
              Every decision we make starts with what's best for pets and their families.
            </p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="font-semibold text-xl mb-2">Trust & Reliability</h3>
            <p className="text-gray-600">
              We maintain the highest standards of accuracy and reliability in our AI analysis.
            </p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-rose-500" />
            <h3 className="font-semibold text-xl mb-2">Community Focus</h3>
            <p className="text-gray-600">
              We build strong relationships with pet parents, vets, and animal welfare organizations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Be part of the revolution in pet healthcare technology.
        </p>
        <button className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  );
}