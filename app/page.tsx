'use client';

//github update:
// git add .
// git commit -m "patch name"
// git push
// or git push --force

import Mechanism3D from "@/components/Mechanism3D";
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; 
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import ScrollArrow from '@/components/ScrollArrow';

function FadeText({ children, langKey }: { children: React.ReactNode, langKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={langKey}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

type Content = {
  heroTitle: string;
  heroSubtitle: string;
  heroRole: string;
  masterpieceLabel: string;
  masterpieceLink: string;
  projectsTitle: string;
  projectsLink: string;
  aboutTitle: string;
  aboutText: string;
  contactBtn: string;
  commissionsTitle: string;
  commissionsText: string;
  ctaButton: string;
  footerRights: string;
  stackLabel: string; 
};

const translations: Record<'EN' | 'IT', Content> = {
  EN: {
    heroTitle: "Design. Build. Iterate.",
    heroSubtitle: "Hi, I'm Lorenzo. Mechanical Engineering student at Politecnico di Torino.",
    heroRole: "Specialized in rapid prototyping, CAD design, and bringing concepts to physical reality.",
    masterpieceLabel: "MASTERPIECE",
    masterpieceLink: "Explore Details ->",
    projectsTitle: "Selected Works",
    projectsLink: "View Full Archive",
    aboutTitle: "About",
    aboutText: "I was born in 2006, I study Mechanical Engineering at Politecnico di Torino, and turn ideas into concrete systems: I design, model, and build them. I navigate between mechanics, electronics, and automation, managing every phase from concept to commissioning. I seek challenges that require autonomy, precision, and engineering vision.",
    contactBtn: "Contact Me",
    commissionsTitle: "Commissions",
    commissionsText: "Available for custom CAD design, CNC manufacturing, 3D printing, and precision metalworking.",
    ctaButton: "Start a project",
    footerRights: "Lorenzo Walter Campiello. All rights reserved.",
    stackLabel: "Stack: Fusion360, CNC, 3D printing, Electronics, Heat engines, Welding, Woodworking, Python, C++, Arduino"
  },
  IT: {
    heroTitle: "Progettazione. Costruzione. Iterazione.",
    heroSubtitle: "Ciao, sono Lorenzo. Studente di Ingegneria Meccanica al Politecnico di Torino.",
    heroRole: "Mi occupo di prototipazione rapida, design CAD e trasformazione di concetti in realtà fisica.",
    masterpieceLabel: "CAPOLAVORO",
    masterpieceLink: "Esplora Dettagli ->",
    projectsTitle: "Lavori Selezionati",
    projectsLink: "Vedi Archivio Completo",
    aboutTitle: "Chi Sono",
    aboutText: "Sono nato nel 2006, studio ingegneria meccanica al Politecnico di Torino, e trasformo idee in sistemi concreti: li progetto, li modello e li costruisco. Mi muovo tra meccanica, elettronica e automazione, curando ogni fase, dal concept alla messa in funzione. Cerco sfide che richiedano autonomia, precisione e visione ingegneristica.",
    contactBtn: "Contattami",
    commissionsTitle: "Commissioni",
    commissionsText: "Disponibile per progettazione CAD, lavorazioni CNC, stampa 3D e lavorazione metalli di precisione.",
    ctaButton: "Inizia un progetto",
    footerRights: "Lorenzo Walter Campiello. Tutti i diritti riservati.",
    stackLabel: "Stack: Fusion360, CNC, Stampa 3D, Elettronica, Motori termici, Saldatura, Woodworking, Python, C++, Arduino"
  }
};

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations['EN'];

  const masterpiece = projects.find(p => p.masterpiece === true);
  const featuredProjects = projects.filter(p => p.featured === true && p.masterpiece === false).slice(0, 2);

  return (
    <main className="min-h-screen text-zinc-100 selection:bg-white selection:text-black relative overflow-x-hidden">
      
      <Navbar />
      <div className="fixed inset-0 z-0"><Mechanism3D /></div>

      <div className="relative z-10">
        
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto py-20">
          <div className="space-y-8 max-w-3xl mt-16 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight whitespace-pre-line text-white drop-shadow-2xl">
              <FadeText langKey={lang}>{t.heroTitle}</FadeText>
            </h1>
            <div className="space-y-4">
               <div className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-light leading-relaxed">
                  <FadeText langKey={lang}>{t.heroSubtitle}</FadeText>
               </div>
               <div className="text-base sm:text-lg text-zinc-500 font-light">
                  <FadeText langKey={lang}>{t.heroRole}</FadeText>
               </div>
            </div>
          </div>
          {/* FRECCIA AGGIUNTA QUI */}
          <ScrollArrow />
        </section>

        {/* MASTERPIECE */}
        {masterpiece && (
          <section id="masterpiece" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 bg-zinc-950/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                 <span className="text-indigo-400 font-mono text-xs tracking-[0.2em] block mb-2">{t.masterpieceLabel}</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{masterpiece.title}</h2>
                 <p className="text-zinc-300 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-6">
                   {masterpiece.description[lang]}
                 </p>
                 <div className="pt-4">
                   <Link href={`/projects/${masterpiece.id}`} className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-colors">
                     {t.masterpieceLink}
                   </Link>
                 </div>
              </div>
              <div className="w-full md:w-1/2 aspect-square md:aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
                 <Link href={`/projects/${masterpiece.id}`} className="block w-full h-full relative">
                   <img 
                     src={masterpiece.image} 
                     alt={masterpiece.title}
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                 </Link>
              </div>
            </div>
          </section>
        )}

        {/* SELECTED WORKS */}
        <section id="work" className="bg-zinc-950/70 backdrop-blur-sm py-24 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <h2 className="text-3xl font-semibold text-white">{t.projectsTitle}</h2>
              <Link href="/projects" className="text-indigo-400 hover:text-white transition-colors text-sm border border-white/20 px-4 py-2 rounded-full">
                {t.projectsLink} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
                  <div className="aspect-[4/3] bg-zinc-900/50 rounded-2xl mb-6 overflow-hidden border border-white/5 group-hover:border-white/20 transition-all relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1 group-hover:text-indigo-400 transition-colors text-white mt-4">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.type} / {project.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & ABOUT */}
        <section id="contact" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 bg-zinc-950/90 relative z-10 border-t border-white/5">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">{t.aboutTitle}</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">{t.aboutText}</p>
            <div className="text-xs text-zinc-500 font-mono mb-8 tracking-widest uppercase">
              {t.stackLabel}
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors w-full md:w-auto">
              {t.contactBtn}
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">{t.commissionsTitle}</h2>
            <p className="text-zinc-400 mb-8 text-lg">{t.commissionsText}</p>
            <Link href="/commissions" className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors w-full md:w-auto">
              {t.ctaButton}
            </Link>
          </div>
        </section>
        
        <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-sm bg-zinc-950 relative z-10">
          &copy; {new Date().getFullYear()} {t.footerRights}
        </footer>
      </div>
    </main>
  );
}