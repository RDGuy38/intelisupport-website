import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ROICalculator from './components/ROICalculator';
import VoiceDemo from './components/VoiceDemo';
import Features from './components/Features';
import LeadCapture from './components/LeadCapture';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ROICalculator />
        <VoiceDemo />
        <Features />
        <LeadCapture />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
