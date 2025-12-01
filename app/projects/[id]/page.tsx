'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from "@/components/Navbar";
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MechanismContact from "@/components/MechanismContact"; 

const ExternalLink = ({ href, label }: { href: string, label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500/50 hover:bg-zinc-800 transition-all group">
    <span className="text-zinc-300 text-sm font-medium">{label}</span>
    <svg className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
  </a>
);

export default function ProjectDetail() {
  const { lang } = useLanguage();
  const params = useParams();
  
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center font-mono">Error 404: Project Not Found</div>;
  }

  const desc = project.fullDescription ? project.fullDescription[lang] : project.description[lang];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />
      
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
         <MechanismContact /> 
      </div>

      <article className="pt-24 pb-20 relative z-10">
        
        {/* 1. HERO IMAGE REALE */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
           className="w-full h-[50vh] md:h-[60vh] bg-zinc-900 relative overflow-hidden group"
        >
           {/* IMMAGINE DI SFONDO */}
           <img 
             src={project.image} 
             alt={project.title}
             className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
           />
           
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
              <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">{project.type}</span>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h1>
              <p className="text-zinc-300 text-lg font-mono">{project.date}</p>
           </div>
        </motion.div>

        {/* 2. CONTENT GRID */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* COLONNA SINISTRA */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-white mb-6">{lang === 'EN' ? 'Project Overview' : 'Panoramica Progetto'}</h2>
              <p className="text-xl text-zinc-300 leading-relaxed whitespace-pre-line">
                {desc}
              </p>
            </motion.div>

            {/* VIDEO */}
            {project.videoUrl && (
              <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 relative shadow-2xl">
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src={`https://www.youtube.com/embed/${project.videoUrl}`} 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowFullScreen
                   className="absolute inset-0"
                 ></iframe>
              </div>
            )}

            {/* GALLERY GRID REALE */}
            {project.gallery && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">{lang === 'EN' ? 'Gallery' : 'Galleria'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-[4/3] bg-zinc-900 rounded-xl border border-white/5 overflow-hidden relative group cursor-zoom-in">
                       <img 
                         src={img} 
                         alt={`Gallery ${i}`}
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                       />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* COLONNA DESTRA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8 p-6 bg-zinc-900/30 backdrop-blur-md rounded-2xl border border-white/5">
              
              <div>
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">{lang === 'EN' ? 'Tech Stack' : 'Tecnologie'}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.externalLinks && project.externalLinks.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Resources</h3>
                  <div className="space-y-2">
                    {project.externalLinks.map((link, i) => (
                      <ExternalLink key={i} href={link.url} label={link.label} />
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 border-t border-white/5">
                <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  ← {lang === 'EN' ? 'Back to Archive' : 'Torna all\'Archivio'}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </article>
    </main>
  );
}