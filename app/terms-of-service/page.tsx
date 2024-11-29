// app/terms-of-service/page.tsx
export default function TermsOfServicePage() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: November 29, 2024
          </p>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using PawHealth AI&apos;s services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">
              PawHealth AI provides AI-powered pet health analysis services, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Health condition analysis through photo processing</li>
              <li>Breed identification</li>
              <li>Veterinary referral services</li>
              <li>Pet care recommendations</li>
            </ul>
            <p className="mb-4 text-gray-600 italic">
              Note: Our services are not a substitute for professional veterinary care.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Use services appropriately</li>
              <li>Not misuse or abuse the platform</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscription fees are billed monthly or annually</li>
              <li>Payments are non-refundable unless specified</li>
              <li>Prices may change with notice</li>
              <li>Free trial terms may apply</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality are owned by PawHealth AI and are protected by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copyright laws</li>
              <li>Trademark rights</li>
              <li>Other intellectual property rights</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              PawHealth AI is not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Service interruptions</li>
              <li>Third-party actions</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>For violations of these terms</li>
              <li>For illegal or unauthorized use</li>
              <li>At our sole discretion</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes.
              Continued use of our services constitutes acceptance of updated terms.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul className="list-none mb-4">
              <li>Email: legal@pawhealth.ai</li>
              <li>Phone: +1 (888) PAW-HEALTH</li>
              <li>Address: Pet Health Plaza, CA 90210</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }