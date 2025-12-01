'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';

// ... (FadeSpan, Icone restano uguali, copiale dal file vecchio se vuoi o lascia quelle che hai) ...
const FadeSpan = ({ children, langKey }: { children: React.ReactNode, langKey: string }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={langKey}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="block text-center w-full" 
    >
      {children}
    </motion.span>
  </AnimatePresence>
);
// (Assumi che le icone SVG siano qui come prima...)

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // STATO PER IL MOBILE

  // ... (Logica featured/recent projects identica a prima) ...
  const featured = projects.filter(p => p.navbarFeatured).slice(0, 3);
  const recent = projects.filter(p => !p.navbarFeatured).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const servicesList = lang === 'EN' ? ["3D Printing", "CNC", "CAD"] : ["Stampa 3D", "CNC", "CAD"];

  // DEFINIZIONE MENU (Identica)
  const menuItems = {
    // ... (Copia pure il contenuto di menuItems dal tuo file attuale, non cambia) ...
    // Se non vuoi copiare, ecco la versione semplificata per brevità (ma tu usa la tua completa):
    work: { href: "/projects", label: lang === 'EN' ? 'Projects' : 'Progetti', content: null },
    about: { href: "/#contact", label: lang === 'EN' ? 'About' : 'Chi Sono', content: null },
    commissions: { href: "/commissions", label: lang === 'EN' ? 'Commissions' : 'Commissioni', content: null },
    contact: { href: "/contact", label: lang === 'EN' ? 'Contact' : 'Contatti', content: null }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        
        {/* LOGO */}
        <Link href="/" className="group flex flex-col z-50">
          <span className="text-sm font-bold tracking-tight text-white uppercase">Lorenzo Walter Campiello</span>
          <span className="text-[9px] tracking-[0.2em] text-zinc-500 font-medium group-hover:text-indigo-400">MECH ENG STUDENT</span>
        </Link>

        {/* --- DESKTOP MENU (Hidden su mobile) --- */}
        <div className="hidden md:flex items-center gap-2 h-full">
           <div className="w-[80px] flex justify-center">
              <Link href="/" className="text-sm font-bold text-white hover:text-zinc-300 uppercase tracking-wide">HOME</Link>
           </div>
           {/* Loop Menu Items Desktop */}
           {Object.entries(menuItems).map(([key, item]) => (
              <div key={key} className="h-full flex items-center justify-center w-[100px]" onMouseEnter={() => setHoveredItem(key)} onMouseLeave={() => setHoveredItem(null)}>
                <Link href={item.href} className="text-xs font-medium uppercase tracking-wide w-full flex justify-center py-4 text-zinc-400 hover:text-white">
                  <FadeSpan langKey={lang}>{item.label}</FadeSpan>
                </Link>
              </div>
           ))}
        </div>

        {/* --- MOBILE TOGGLE & LANG --- */}
        <div className="flex items-center gap-4 z-50">
          {/* Lang Switcher */}
          <button onClick={() => setLang(lang === 'EN' ? 'IT' : 'EN')} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1">
            <span className={`text-[10px] font-bold ${lang === 'EN' ? 'text-white' : 'text-zinc-500'}`}>EN</span>
            <span className="text-zinc-600 text-[10px]">/</span>
            <span className={`text-[10px] font-bold ${lang === 'IT' ? 'text-white' : 'text-zinc-500'}`}>IT</span>
          </button>

          {/* HAMBURGER ICON (Visibile solo su Mobile) */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 z-40 pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-zinc-800 pb-4">HOME</Link>
            {Object.entries(menuItems).map(([key, item]) => (
              <Link key={key} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-zinc-400 hover:text-white border-b border-zinc-800 pb-4">
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP DROPDOWN (Quello figo di prima) --- */}
      <AnimatePresence>
        {hoveredItem && !mobileMenuOpen && (
          // ... (Codice dropdown desktop identico a prima) ...
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-zinc-950/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden shadow-2xl hidden md:block"
            onMouseEnter={() => setHoveredItem(hoveredItem)} onMouseLeave={() => setHoveredItem(null)}
          >
             {/* Qui rimetterai il contenuto ricco (featured projects etc) copiandolo dal tuo vecchio file */}
             <div className="p-8 text-center text-zinc-500">[Desktop Dropdown Content]</div> 
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
