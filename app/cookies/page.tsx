import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | ZennithDevelopments',
  description: 'Cookie Policy for ZennithDevelopments. Learn about how we use cookies and tracking technologies on our website.',
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-slate-400 mb-8">
            Last updated: December 27, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. This Cookie Policy explains how ZennithDevelopments uses cookies and similar tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
              
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-medium text-zd-electric-cyan mb-3">Essential Cookies</h3>
                <p className="leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and security.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-medium text-zd-electric-cyan mb-3">Analytics Cookies</h3>
                <p className="leading-relaxed">
                  These help us understand how visitors interact with our website, allowing us to improve user experience.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-medium text-zd-electric-cyan mb-3">Marketing Cookies</h3>
                <p className="leading-relaxed">
                  These cookies track your online activity to help us deliver more relevant advertising.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
              <p className="leading-relaxed mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Delete all cookies when closing your browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. More Information</h2>
              <p className="leading-relaxed">
                For more information about our data practices, please see our <a href="/privacy" className="text-zd-electric-cyan hover:underline">Privacy Policy</a>.
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
