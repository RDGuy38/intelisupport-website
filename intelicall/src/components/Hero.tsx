import { PhoneCall, Sparkles, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 via-white to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600">Trusted by Canadian contractors</span>
              <span className="text-lg">🍁</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Never miss a <span className="gradient-text">job</span><br className="hidden sm:block" /> again.
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The 24/7 AI voice assistant built for trades. It answers calls, books appointments, and saves your business while you're on the tools.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#cta" className="btn-primary"><Sparkles className="w-5 h-5" />Start free trial</a>
              <a href="#demo" className="btn-secondary"><Phone className="w-5 h-5" />Hear it in action</a>
            </div>

            <p className="mt-4 text-sm text-slate-400">No credit card required · 5 free calls · Cancel anytime</p>
          </div>

          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="card p-6 shadow-xl shadow-slate-300/40 border-slate-200/60">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white">
                        <PhoneCall className="w-6 h-6" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-success-500 border-2 border-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">AI Assistant</p>
                      <p className="text-xs text-slate-400">Incoming call…</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-50 text-success-700 text-xs font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
                    </span>
                    Active
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">Hi, I'm calling about a furnace issue — can someone come out?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm max-w-[85%]">Sorry to hear that. I can get a tech out today. Can I grab your name and address?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">Daniel, 118 Birch Lane in Mississauga.</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm max-w-[85%]">Thanks Daniel. I have a 2:00 PM or 4:30 PM today — which works better?</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">2 o'clock please.</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-success-50 text-success-700 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm max-w-[85%] font-medium">✓ Booked for 2:00 PM. You'll get a text confirmation shortly.</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 mt-5 h-8">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-1.5 bg-primary-400 rounded-full animate-wave" style={{ height: '100%', animationDelay: `${i * 0.12}s`, animationDuration: '1.2s' }} />
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 animate-float">
                <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center"><span className="text-xl">📅</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Appointment booked</p>
                  <p className="text-xs text-slate-400">Tomorrow 2:00 PM</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center"><span className="text-xl">🍁</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">24/7 · Always online</p>
                  <p className="text-xs text-slate-400">Canadian-hosted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
