// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock,
  Send
} from 'lucide-react';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string | React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border">
    <Icon className="w-6 h-6 text-rose-500 mb-4" />
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="text-gray-600">{content}</div>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our services? We&apos;re here to help and would love to hear from you.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <ContactCard
          icon={Mail}
          title="Email Us"
          content={<a href="mailto:support@pawhealth.ai" className="text-rose-500 hover:text-rose-600">support@pawhealth.ai</a>}
        />
        <ContactCard
          icon={Phone}
          title="Call Us"
          content={<a href="tel:+18887294325" className="text-rose-500 hover:text-rose-600">+1 (888) PAW-HEALTH</a>}
        />
        <ContactCard
          icon={Clock}
          title="Business Hours"
          content="Monday - Friday: 9AM - 6PM EST"
        />
      </div>

      {/* Contact Form Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How accurate is the AI analysis?</h3>
              <p className="text-gray-600">
                Our AI system has achieved a 95% accuracy rate in identifying common pet health conditions, 
                though we always recommend consulting with a veterinarian for final diagnosis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">
                For general inquiries, we typically respond within 24 hours during business days. 
                Technical support issues are addressed within 12 hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with our services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I use the service internationally?</h3>
              <p className="text-gray-600">
                Yes, our service is available worldwide, though some features may vary by region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}