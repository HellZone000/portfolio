'use client';

import { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projects, ProjectType } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  const { lang } = useLanguage();
  
  const [filterType, setFilterType] = useState<ProjectType | 'All'>('All');
  const [sortType, setSortType] = useState<'Date' | 'Name'>('Date');

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    if (filterType !== 'All') {
      result = result.filter(p => p.type === filterType);
    }
    if (sortType === 'Date') {
      result.sort((a, b) => b.date.localeCompare(a.date));
    } else {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [filterType, sortType]);

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2'; 
      case 'tall': return 'md:row-span-2'; 
      case 'medium': return 'md:col-span-1'; 
      default: return 'md:col-span-1'; 
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />
      
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          {lang === 'EN' ? 'Engineering Archive' : 'Archivio Ingegneria'}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {['All', 'CNC', '3D Printing', 'Robotics'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                  filterType === type 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-xs uppercase tracking-widest">
              {lang === 'EN' ? 'Sort By:' : 'Ordina:'}
            </span>
            <select 
              value={sortType}
              onChange={(e) => setSortType(e.target.value as 'Date' | 'Name')}
              className="bg-zinc-900 text-white text-sm border border-zinc-800 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
            >
              <option value="Date">{lang === 'EN' ? 'Date (Newest)' : 'Data (Recenti)'}</option>
              <option value="Name">{lang === 'EN' ? 'Name (A-Z)' : 'Nome (A-Z)'}</option>
            </select>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-colors ${getSizeClass(project.size)}`}
              >
                <Link href={`/projects/${project.id}`} className="block w-full h-full relative">
                  
                  {/* IMMAGINE DI SFONDO VERA */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-indigo-400 text-xs font-mono mb-2">{project.type} — {project.date}</span>
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{project.description[lang]}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}