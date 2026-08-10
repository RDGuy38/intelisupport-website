import { Sparkles, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600" />
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Free trial · No credit card required</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">Stop sending callers to voicemail.</h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-xl mx-auto">Set up takes under five minutes. Your AI receptionist answers the very next call — free for 5 calls or 10 minutes.</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-primary-700 font-bold text-lg hover:bg-primary-50 hover:-translate-y-0.5 transition-all shadow-lg">
              <Sparkles className="w-5 h-5" />Start free trial
            </a>
            <a href="tel:+18889712184" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all">
              <Phone className="w-5 h-5" />(888) 971-2184
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><span className="text-lg">🍁</span> Canadian-hosted</span>
            <span className="flex items-center gap-1.5"><ArrowRight className="w-4 h-4" /> PIPEDA-aligned</span>
            <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> Bilingual EN/FR</span>
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
