import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50' : 'bg-transparent'}`}>
      <nav className="container-x flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary-600/30 group-hover:scale-105 transition-transform">
            iC
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Inteli<span className="text-primary-600">Call</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="btn-ghost">{link.label}</a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+18889712184" className="flex items-center gap-1.5 text-slate-600 hover:text-primary-600 transition-colors text-sm font-medium">
            <Phone className="w-4 h-4" />
            (888) 971-2184
          </a>
          <a href="#cta" className="btn-primary text-sm py-2.5 px-5">Start free trial</a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-primary-50 hover:text-primary-600 font-medium">{link.label}</a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="btn-primary w-full mt-3">Start free trial</a>
        </div>
      )}
    </header>
  );
}
