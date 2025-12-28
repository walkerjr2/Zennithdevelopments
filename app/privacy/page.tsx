import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ZennithDevelopments',
  description: 'Privacy Policy for ZennithDevelopments. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 mb-8">
            Last updated: December 27, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to ZennithDevelopments. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-zd-electric-cyan mb-3">2.1 Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you fill out forms, contact us, or use our services.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, phone number</li>
                <li>Company name and project details</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to inquiries and provide customer support</li>
                <li>Process project assessments and provide quotes</li>
                <li>Deliver our web development services</li>
                <li>Send updates and marketing communications (with consent)</li>
                <li>Improve our website and services</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and delivering our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-2">
                <p><strong className="text-white">Email:</strong> <a href="mailto:zennithdevelopments@gmail.com" className="text-zd-electric-cyan hover:underline">zennithdevelopments@gmail.com</a></p>
                <p><strong className="text-white">Phone:</strong> <a href="tel:+18768396403" className="text-zd-electric-cyan hover:underline">876-839-6403</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
