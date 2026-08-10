import { PhoneCall, CalendarCheck, MessageSquare, ListFilter as Filter, ShieldCheck, Leaf } from 'lucide-react';
import { features, stats } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneCall, CalendarCheck, MessageSquare, Filter, ShieldCheck, Leaf,
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-eyebrow mb-4"><PhoneCall className="w-4 h-4" />Features</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">A receptionist that <em className="gradient-text not-italic">never sleeps</em>.</h2>
          <p className="text-lg text-slate-600">Forward your number to InteliCall and our AI picks up instantly — handling the calls that used to go to voicemail, after-hours, or your overwhelmed front desk.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = iconMap[f.icon] || PhoneCall;
            return (
              <div key={f.title} className="card p-6 lg:p-7 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mb-5 shadow-md shadow-primary-500/20">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 lg:mt-20 rounded-3xl bg-gradient-to-br from-slate-900 to-primary-950 p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{s.value}</p>
                <p className="text-sm text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
