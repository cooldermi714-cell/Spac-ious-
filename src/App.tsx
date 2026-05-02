/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, SocialProof, Features, HowItWorks, Integrations, Testimonials, FinalCTA, Footer } from './components/LandingPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
