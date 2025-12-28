import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ZennithDevelopments',
  description: 'Terms of Service for ZennithDevelopments. Review our terms and conditions for using our web development services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 mb-8">
            Last updated: December 27, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service constitute a legally binding agreement between you and ZennithDevelopments concerning your access to and use of our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Our Services</h2>
              <p className="leading-relaxed mb-4">
                ZennithDevelopments provides professional web development services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom website design and development</li>
                <li>E-commerce solutions</li>
                <li>Web application development</li>
                <li>API integrations and custom solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A deposit is required before project commencement</li>
                <li>Milestone payments may be required for larger projects</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                Upon full payment, you will receive ownership rights to the final deliverables as specified in the project agreement.
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
