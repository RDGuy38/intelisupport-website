import { User, Wrench, MapPin, DollarSign, Clock, ArrowRight, Calendar, CalendarClock, Users, CreditCard } from 'lucide-react';
import { leadCard, integrations } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar, CalendarClock, Users, Wrench, CreditCard,
};

export default function LeadCapture() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-eyebrow mb-4"><ArrowRight className="w-4 h-4" />Lead Capture</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">From conversation to qualified lead — automatically.</h2>
          <p className="text-lg text-slate-600">Every call gets parsed into the fields that matter. Sent straight to your CRM. No copy-paste, no missed details.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="card p-6 lg:p-8 shadow-lg shadow-slate-200/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white"><User className="w-6 h-6" /></div>
                <div>
                  <p className="font-bold text-slate-900">{leadCard.name}</p>
                  <p className="text-xs text-slate-400">{leadCard.type}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-error-50 text-error-600 text-xs font-bold">{leadCard.priority}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <Wrench className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div><p className="text-xs text-slate-400 font-medium">Issue</p><p className="text-sm text-slate-700">{leadCard.issue}</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div><p className="text-xs text-slate-400 font-medium">Service Address</p><p className="text-sm text-slate-700">{leadCard.address}</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <DollarSign className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                <div><p className="text-xs text-slate-400 font-medium">Fee Agreement</p><p className="text-sm text-slate-700">{leadCard.fee}</p></div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-success-50">
                <Clock className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                <div><p className="text-xs text-slate-400 font-medium">Booked Slot</p><p className="text-sm text-success-700 font-semibold">{leadCard.slot}</p></div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Auto-parsed from call transcript</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-success-600"><span className="w-2 h-2 rounded-full bg-success-500" />Pushed to CRM</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Every call becomes a qualified lead in your CRM.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">No manual data entry. No copy-paste. The fields you care about, pulled out of every conversation.</p>

            <div className="space-y-3">
              {integrations.map((int) => {
                const Icon = iconMap[int.icon] || Calendar;
                return (
                  <div key={int.name} className="card p-4 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-slate-600" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-800 text-sm">{int.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-primary-50 text-primary-600 font-medium">{int.category}</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-snug">{int.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
