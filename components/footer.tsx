// components/Footer.tsx
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
              <span className="text-xl font-bold">PawHealth AI</span>
            </div>
            <p className="text-gray-600">
              Advanced AI-powered pet health analysis for concerned pet owners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/health-analysis" className="text-gray-600 hover:text-gray-900">Health Analysis</a></li>
              <li><a href="/services/" className="text-gray-600 hover:text-gray-900">Breed Identification</a></li>
              <li><a href="/services/" className="text-gray-600 hover:text-gray-900">Vet Referrals</a></li>
              <li><a href="/services/" className="text-gray-600 hover:text-gray-900">Pet Care Tips</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <a href="mailto:support@pawhealth.ai" className="text-gray-600 hover:text-gray-900">
                  support@pawhealth.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <span className="text-gray-600">+1 (888) PAW-HEALTH</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-gray-600">Pet Health Plaza, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 PawHealth AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
