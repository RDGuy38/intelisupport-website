import { useState } from 'react';
import { Check, Sparkles, Building2, Zap } from 'lucide-react';
import { pricingPlans, addons, comparisonData, meteredRates } from '../data';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-eyebrow mb-4"><Sparkles className="w-4 h-4" />Pricing</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Pricing that pays for <em className="gradient-text not-italic">itself</em></h2>
          <p className="text-lg text-slate-600">One missed booking covers a month of InteliCall. Plans start at $29/mo with metered per-minute pricing — only pay for talk time, never for ringing.</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className="relative w-14 h-7 rounded-full bg-slate-200 transition-colors" aria-label="Toggle billing period">
            <span className={`absolute top-1 w-5 h-5 rounded-full bg-primary-600 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>Annual <span className="text-success-600 font-semibold">· 2 months free</span></span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`card p-6 lg:p-8 relative ${plan.highlight ? 'border-primary-500 shadow-xl shadow-primary-200/40 lg:scale-105' : 'hover:shadow-lg hover:-translate-y-1'}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-bold shadow-md">{plan.badge}</div>
              )}
              <div className="flex items-center gap-2 mb-1">
                {plan.name === 'Starter' && <Zap className="w-5 h-5 text-primary-500" />}
                {plan.name === 'Professional' && <Sparkles className="w-5 h-5 text-primary-500" />}
                {plan.name === 'Enterprise' && <Building2 className="w-5 h-5 text-primary-500" />}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              </div>
              <p className="text-sm text-slate-500 mb-5">{plan.minutes}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900 tabular-nums">${annual ? plan.annual : plan.monthly}</span>
                <span className="text-slate-400 font-medium">/mo</span>
                {annual && <p className="text-xs text-success-600 font-medium mt-1">Billed annually (${(annual ? plan.annual : plan.monthly) * 12}/yr)</p>}
              </div>

              <a href="#cta" className={`w-full mb-6 ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>{plan.cta}</a>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-2">One month of InteliCall vs. the <em className="gradient-text not-italic">alternatives</em>.</h3>
          <p className="text-center text-slate-500 mb-8 text-sm">Full-time receptionist · Human answering service · InteliCall</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {comparisonData.map((c) => (
              <div key={c.label} className={`p-5 rounded-2xl border-2 ${c.highlight ? 'border-primary-500 bg-primary-50/40 shadow-md' : 'border-slate-200 bg-white'}`}>
                <p className={`font-bold mb-1 ${c.highlight ? 'text-primary-700' : 'text-slate-700'}`}>{c.label}</p>
                <p className={`text-2xl font-bold mb-2 ${c.highlight ? 'gradient-text' : 'text-slate-900'}`}>{c.cost}</p>
                <p className="text-sm text-slate-500 leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-8">Add more power to any plan</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="card p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800 text-sm">{a.name}</h4>
                  <span className="text-sm font-bold text-primary-600">{a.price}</span>
                </div>
                <p className="text-sm text-slate-500 leading-snug">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-2">Metered usage, no surprises</h3>
          <p className="text-center text-slate-500 mb-6 text-sm">We only charge for talk time, not for the phone ringing. Everything is itemized on your monthly invoice.</p>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 font-semibold text-slate-600">Service</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600">Rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {meteredRates.map((r) => (
                  <tr key={r.service} className="border-b border-slate-100 last:border-0">
                    <td className="px-5 py-3.5 text-slate-700">{r.service}</td>
                    <td className="px-5 py-3.5 font-semibold text-primary-600">{r.rate}</td>
                    <td className="px-5 py-3.5 text-slate-400 hidden sm:table-cell">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
