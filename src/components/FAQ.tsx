import { useState } from 'react';
import { ChevronDown, Circle as HelpCircle } from 'lucide-react';
import { faqCategories } from '../data';

export default function FAQ() {
  const [openCat, setOpenCat] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-eyebrow mb-4"><HelpCircle className="w-4 h-4" />FAQ</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Everything you're wondering, <em className="gradient-text not-italic">answered</em>.</h2>
          <p className="text-lg text-slate-600">The essentials. Still stuck? <a href="#contact" className="text-primary-600 font-semibold hover:underline">Talk to us</a>.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqCategories.map((cat, i) => (
              <button key={cat.category} onClick={() => { setOpenCat(i); setOpenItem(0); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${openCat === i ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-200'}`}>
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {faqCategories[openCat].items.map((item, i) => {
              const isOpen = openItem === i;
              return (
                <div key={i} className={`card overflow-hidden transition-all ${isOpen ? 'shadow-md border-primary-200' : ''}`}>
                  <button onClick={() => setOpenItem(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="font-semibold text-slate-800">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-primary-500' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-5 text-slate-600 leading-relaxed">{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
