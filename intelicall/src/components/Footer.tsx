import { Phone, Mail } from 'lucide-react';
import { footerSections } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-x">
        <div className="grid sm:grid-cols-3 gap-4 mb-12 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-slate-400">Call us</p>
              <a href="tel:+18889712184" className="text-sm font-semibold hover:text-primary-400 transition-colors">+1 (888) 971-2184</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <a href="mailto:info@intelicall.ca" className="text-sm font-semibold hover:text-primary-400 transition-colors">info@intelicall.ca</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-600 flex items-center justify-center"><span className="text-lg">💬</span></div>
            <div>
              <p className="text-xs text-slate-400">Live chat</p>
              <p className="text-sm font-semibold">Bottom-right, 8am–6pm MST</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg">iC</div>
              <span className="text-xl font-bold">Inteli<span className="text-primary-400">Call</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">The AI receptionist that answers every call, books appointments, captures leads, and texts the caller back — 24/7, in your brand voice.</p>
            <p className="text-xs text-slate-500">SOC 2 in progress · HIPAA-ready workflows · Canadian-built, globally trusted.</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-slate-300 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}><a href="#" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 InteliCall, Inc. All rights reserved.</p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">🇨🇦 Built in Canada · Trusted worldwide</p>
        </div>
      </div>
    </footer>
  );
}
