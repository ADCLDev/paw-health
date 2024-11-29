// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: November 29, 2024
          </p>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Pet information and photos</li>
              <li>Payment information</li>
            </ul>
  
            <h3 className="text-xl font-semibold mb-3">1.2 Usage Information</h3>
            <p className="mb-4">
              We automatically collect information about your interactions with our services, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device information</li>
              <li>Log data</li>
              <li>Usage patterns</li>
              <li>Analytics data</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Process your transactions</li>
              <li>Communicate with you</li>
              <li>Analyze service usage</li>
              <li>Protect against fraud</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers and partners</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls</li>
              <li>Secure data storage</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none mb-4">
              <li>Email: privacy@pawhealth.ai</li>
              <li>Phone: +1 (888) PAW-HEALTH</li>
              <li>Address: Pet Health Plaza, CA 90210</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }