'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';

// --- ANIMAZIONI & ICONE ---
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

const ArrowRight = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const MailIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const TelegramIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>);
const InstagramIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Stato per Menu Mobile

  // --- LOGICA DATI ---
  const featured = projects.filter(p => p.navbarFeatured).slice(0, 3);
  const recent = projects
    .filter(p => !p.navbarFeatured)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const servicesList = lang === 'EN' 
    ? ["3D Printing / Prototyping", "CNC Manufacturing", "CAD Design", "Metal Work / Art"]
    : ["Stampa 3D / Prototipazione", "Lavorazione CNC", "Progettazione CAD", "Lavorazione Metalli / Arte"];

  const menuItems = {
    work: {
      href: "/projects",
      label: lang === 'EN' ? 'Projects' : 'Progetti',
      content: (
        <div className="w-[800px] grid grid-cols-2 gap-12 py-8">
           <div className="space-y-4">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2 mb-4">
               {lang === 'EN' ? 'Featured' : 'In Evidenza'}
             </h3>
             {featured.map(project => (
               <Link key={project.id} href={`/projects/${project.id}`} className="block group">
                  <div className="text-white text-lg font-medium group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1 line-clamp-1">
                    {project.description[lang]}
                  </div>
               </Link>
             ))}
          </div>
          <div className="space-y-4">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2 mb-4">
                {lang === 'EN' ? 'Latest Additions' : 'Aggiunti di Recente'}
             </h3>
             {recent.map(project => (
               <Link key={project.id} href={`/projects/${project.id}`} className="block group">
                  <div className="text-zinc-300 text-base font-medium group-hover:text-white transition-colors">
                    {project.title}
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">
                    {project.date}
                  </div>
               </Link>
             ))}
             <div className="pt-4 mt-4 border-t border-zinc-800">
               <Link href="/projects" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium group">
                  {lang === 'EN' ? 'View Full Archive' : 'Vedi Archivio Completo'} 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
               </Link>
             </div>
          </div>
        </div>
      )
    },
    about: {
      href: "/#contact",
      label: lang === 'EN' ? 'About' : 'Chi Sono',
      content: (
        <div className="w-full py-8 grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Bio</h3>
             <p className="text-base text-zinc-300 leading-relaxed max-w-md">
              {lang === 'EN' 
                ? "I was born in 2006, I study Mechanical Engineering at Politecnico di Torino, and turn ideas into concrete systems: I design, model, and build them. I navigate between mechanics, electronics, and automation, managing every phase from concept to commissioning. I seek challenges that require autonomy, precision, and engineering vision."
                : "Nato nel 2006, studio Ingegneria Meccanica al Politecnico di Torino e trasformo idee in sistemi concreti: li progetto, li modello e li costruisco. Mi muovo tra meccanica, elettronica e automazione, curando ogni fase dal concept alla messa in funzione. Cerco sfide che richiedano autonomia, precisione e visione ingegneristica."}
            </p>
          </div>
          <div>
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Tech Stack</h3>
             <ul className="text-zinc-400 space-y-2 font-mono text-sm">
               <li>Fusion360, CNC, 3D printing</li>
               <li>Electronics, Heat engines, Welding</li>
               <li>Woodworking, Python, C++, Arduino</li>
             </ul>
          </div>
        </div>
      )
    },
    commissions: {
      href: "/commissions",
      label: lang === 'EN' ? 'Commissions' : 'Commissioni',
      content: (
        <div className="w-full py-8 grid grid-cols-2 gap-12">
           <div>
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Services</h3>
             <ul className="space-y-3">
               {servicesList.map((service, i) => (
                  <li key={i} className="text-white">{service}</li>
               ))}
             </ul>
           </div>
           <div className="flex flex-col justify-center items-start">
             <p className="text-zinc-400 mb-6 max-w-xs">
               {lang === 'EN' ? "Have a project in mind? Let's build it." : "Hai un progetto in mente? Costruiamolo."}
             </p>
             <Link href="/commissions" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
               {lang === 'EN' ? 'Start Request' : 'Invia Richiesta'}
             </Link>
           </div>
        </div>
      )
    },
    contact: {
      href: "/contact",
      label: lang === 'EN' ? 'Contact' : 'Contatti',
      content: (
        <div className="w-full py-8 grid grid-cols-4 gap-4">
           <Link href="/contact" className="p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800 group flex flex-col gap-3">
              <MailIcon />
              <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">Email Form</span>
           </Link>
           <a href="https://telegram.org" target="_blank" className="p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800 group flex flex-col gap-3">
              <TelegramIcon />
              <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">Telegram</span>
           </a>
           <a href="https://instagram.com" target="_blank" className="p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800 group flex flex-col gap-3">
              <InstagramIcon />
              <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">Instagram</span>
           </a>
        </div>
      )
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5" onMouseLeave={() => setHoveredItem(null)}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        <Link href="/" className="group flex flex-col z-50">
          <span className="text-sm font-bold tracking-tight text-white uppercase">Lorenzo Walter Campiello</span>
          <span className="text-[9px] tracking-[0.2em] text-zinc-500 font-medium group-hover:text-indigo-400 transition-colors">MECH ENG STUDENT</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-2 h-full">
           <div className="w-[80px] flex justify-center">
              <Link href="/" className="text-sm font-bold text-white hover:text-zinc-300 transition-all uppercase tracking-wide transform hover:scale-105 active:scale-95">HOME</Link>
           </div>
           {Object.entries(menuItems).map(([key, item]) => (
              <div key={key} className="h-full flex items-center justify-center w-[100px]" onMouseEnter={() => setHoveredItem(key)}>
                <Link href={item.href} className={`text-xs font-medium transition-colors uppercase tracking-wide w-full flex justify-center py-4 ${hoveredItem === key ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
                  <FadeSpan langKey={lang}>{item.label}</FadeSpan>
                </Link>
              </div>
           ))}
        </div>

        {/* --- MOBILE CONTROLS --- */}
        <div className="flex items-center gap-4 z-50">
          <button onClick={() => setLang(lang === 'EN' ? 'IT' : 'EN')} className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full px-3 py-1 transition-all">
            <span className={`text-[10px] font-bold ${lang === 'EN' ? 'text-white' : 'text-zinc-500'}`}>EN</span>
            <span className="text-zinc-600 text-[10px]">/</span>
            <span className={`text-[10px] font-bold ${lang === 'IT' ? 'text-white' : 'text-zinc-500'}`}>IT</span>
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white text-xl">
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
            className="fixed inset-0 bg-zinc-950 z-40 pt-32 px-6 md:hidden flex flex-col gap-8 h-screen"
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

      {/* --- DESKTOP DROPDOWN --- */}
      <AnimatePresence>
        {/* CORREZIONE: Ora si apre se hoveredItem ESISTE (non solo se è work) */}
        {hoveredItem && !mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} 
            className="absolute top-16 left-0 w-full bg-zinc-950/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden shadow-2xl origin-top hidden md:block"
            onMouseEnter={() => setHoveredItem(hoveredItem)} // Mantieni aperto se il mouse scende
            onMouseLeave={() => setHoveredItem(null)} // Chiudi se esce
          >
            <div className="max-w-7xl mx-auto px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredItem} 
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* Renderizza il contenuto specifico dell'item hoverato */}
                  {menuItems[hoveredItem as keyof typeof menuItems]?.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}