import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential pet health monitoring",
      features: [
        "3 pet photo analyses per month",
        "Detailed breed identification",
        "Comprehensive behavior assessment",
        "Emergency symptom checker",
        "Pet insurance partner deals"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99/month",
      description: "Advanced features for pet parents",
      features: [
        "50 pet photo analyses per month",
        "Detailed breed identification",
        "Comprehensive behavior analysis",
        "Priority response time",
        "Pet health history tracking",
        "Pet insurance partner deals",
      ],
      buttonText: "Start Pro Plan",
      popular: true
    },
    {
      name: "Family",
      price: "$19.99/month",
      description: "Complete care for multiple pets",
      features: [
        "100 pet photo analyses per month",
        "Detailed breed identification",
        "Comprehensive behavior analysis",
        "Priority response time",
        "Pet health history tracking",
        "Personalized care reminders",
        "Pet insurance partner deals"
      ],
      buttonText: "Choose Family Plan",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your pet&apos;s health needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-lg' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-600 ml-2">per month</span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Have questions? Check out our{' '}
            <button className="text-blue-500 hover:text-blue-600 font-medium">
              FAQ
            </button>{' '}
            or{' '}
            <button className="text-blue-500 hover:text-blue-600 font-medium">
              contact support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;