import { useState, useMemo } from 'react';
import { TrendingDown, Calculator, TriangleAlert as AlertTriangle } from 'lucide-react';

export default function ROICalculator() {
  const [callsPerDay, setCallsPerDay] = useState(15);
  const [missedPct, setMissedPct] = useState(27);
  const [avgJobValue, setAvgJobValue] = useState(450);

  const { lostRevenue, recoveredRevenue, missedPerMonth } = useMemo(() => {
    const totalCallsMonth = callsPerDay * 30;
    const missed = Math.round(totalCallsMonth * (missedPct / 100));
    const readyToBook = missed * 0.6;
    const recoverable = readyToBook * 0.7;
    const lost = Math.round(readyToBook * avgJobValue);
    const recovered = Math.round(recoverable * avgJobValue);
    return { lostRevenue: lost, recoveredRevenue: recovered, missedPerMonth: missed };
  }, [callsPerDay, missedPct, avgJobValue]);

  const fmt = (n: number) => '$' + n.toLocaleString('en-CA', { maximumFractionDigits: 0 });

  return (
    <section id="roi" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-100/30 rounded-full blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-eyebrow mb-4"><Calculator className="w-4 h-4" />ROI Calculator</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">See exactly what missed calls cost you.</h2>
          <p className="text-lg text-slate-600">Three sliders. Instant answer. No email required.</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 card p-6 lg:p-8 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-700">Calls per day</label>
                <span className="text-lg font-bold text-primary-600 tabular-nums">{callsPerDay}</span>
              </div>
              <input type="range" min="1" max="100" value={callsPerDay} onChange={(e) => setCallsPerDay(Number(e.target.value))} />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5"><span>1</span><span>100</span></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-700">Missed call rate</label>
                <span className="text-lg font-bold text-primary-600 tabular-nums">{missedPct}%</span>
              </div>
              <input type="range" min="0" max="80" value={missedPct} onChange={(e) => setMissedPct(Number(e.target.value))} />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5"><span>0%</span><span>80%</span></div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-700">Average job value</label>
                <span className="text-lg font-bold text-primary-600 tabular-nums">{fmt(avgJobValue)}</span>
              </div>
              <input type="range" min="50" max="5000" step="50" value={avgJobValue} onChange={(e) => setAvgJobValue(Number(e.target.value))} />
              <div className="flex justify-between text-xs text-slate-400 mt-1.5"><span>$50</span><span>$5,000</span></div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">Assumes 60% of missed callers were ready to book and InteliCall recovers 70%.</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="card p-6 bg-gradient-to-br from-error-500 to-error-600 border-error-500 text-white">
              <div className="flex items-center gap-2 mb-2"><TrendingDown className="w-5 h-5" /><span className="text-sm font-medium opacity-90">You're losing about</span></div>
              <p className="text-4xl font-bold tabular-nums">{fmt(lostRevenue)}<span className="text-lg font-medium opacity-80">/mo</span></p>
              <p className="text-sm opacity-80 mt-2">{missedPerMonth} missed calls per month</p>
            </div>

            <div className="card p-6 bg-gradient-to-br from-success-500 to-success-600 border-success-500 text-white">
              <div className="flex items-center gap-2 mb-2"><span className="text-xl">📈</span><span className="text-sm font-medium opacity-90">InteliCall recovers</span></div>
              <p className="text-4xl font-bold tabular-nums">{fmt(recoveredRevenue)}<span className="text-lg font-medium opacity-80">/mo</span></p>
              <p className="text-sm opacity-80 mt-2">That's {fmt(recoveredRevenue * 12)}/yr in recovered revenue</p>
            </div>

            <div className="card p-4 border-amber-200 bg-amber-50 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600">One missed booking covers a month of InteliCall. Plans start at just $29/mo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
