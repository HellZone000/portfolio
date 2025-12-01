'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import MechanismCommissions from "@/components/MechanismCommissions";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const FadeText = ({ children, langKey }: { children: React.ReactNode, langKey: string }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={langKey}
      initial={{ opacity: 0, y: 3, filter: 'blur(3px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -3, filter: 'blur(3px)' }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="inline-block"
    >
      {children}
    </motion.span>
  </AnimatePresence>
);

const content = {
  EN: {
    title: "Start a Project",
    subtitle: "Tell me about your idea. I'll help you build it.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company (Optional)",
      phone: "Phone (Optional)",
      type: "Project Type",
      desc: "Project Details",
      descPlaceholder: "Describe the scope, timeline, and goals...",
    },
    types: ["3D Printing", "CNC Manufacturing", "CAD Design", "Metal Work / Art", "Other"],
    button: {
      idle: "Send Request",
      sending: "Sending...",
      success: "Request Sent Successfully!",
      error: "Error. Please try again."
    }
  },
  IT: {
    title: "Inizia un Progetto",
    subtitle: "Parlami della tua idea. Ti aiuterò a realizzarla.",
    fields: {
      name: "Nome",
      email: "Email",
      company: "Azienda (Opzionale)",
      phone: "Telefono (Opzionale)",
      type: "Tipo Progetto",
      desc: "Dettagli Progetto",
      descPlaceholder: "Descrivi obiettivi, tempistiche e requisiti...",
    },
    types: ["Stampa 3D", "Lavorazione CNC", "Design CAD", "Lavorazione Metalli / Arte", "Altro"],
    button: {
      idle: "Invia Richiesta",
      sending: "Invio in corso...",
      success: "Richiesta Inviata con Successo!",
      error: "Errore. Riprova."
    }
  }
};

export default function Commissions() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const finalData = { ...formState, project_type: t.types[selectedTypeIndex], subject: "New Commission Request" };
    
    try {
      const response = await fetch("https://formspree.io/f/xblnyjoj", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });
      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', phone: '', message: '' }); 
        setSelectedTypeIndex(0);
        setTimeout(() => setStatus('idle'), 5000); 
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputClass = "w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 placeholder:text-zinc-600";

  return (
    <main className="min-h-screen text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />
      <MechanismCommissions />

      <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl"
        >
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              <FadeText langKey={lang}>{t.title}</FadeText>
            </h1>
            <p className="text-zinc-400 text-lg">
              <FadeText langKey={lang}>{t.subtitle}</FadeText>
            </p>
          </div>

          {/* FORM CON TRASPARENZA VETRO (60%) */}
          <form onSubmit={handleSubmit} className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.name}</FadeText> *</label>
                <input required type="text" name="name" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.email}</FadeText> *</label>
                <input required type="email" name="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.company}</FadeText></label>
                <input type="text" name="company" value={formState.company} onChange={(e) => setFormState({...formState, company: e.target.value})} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.phone}</FadeText></label>
                <input type="tel" name="phone" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} className={inputClass} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.type}</FadeText></label>
              <div className="relative">
                <select name="type" value={selectedTypeIndex} onChange={(e) => setSelectedTypeIndex(Number(e.target.value))} className={`${inputClass} appearance-none cursor-pointer`}>
                  {t.types.map((type, index) => (<option key={index} value={index} className="bg-zinc-900">{type}</option>))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg></div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1"><FadeText langKey={lang}>{t.fields.desc}</FadeText> *</label>
              <textarea required name="message" rows={5} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} placeholder={t.fields.descPlaceholder} className={`${inputClass} resize-none`} />
            </div>
            <button type="submit" disabled={status === 'sending' || status === 'success'} className={`w-full font-medium py-4 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500 text-black' : status === 'error' ? 'bg-red-500 text-white' : 'bg-white text-black hover:bg-zinc-200'}`}>
              {status === 'idle' && <FadeText langKey={lang}>{t.button.idle}</FadeText>}
              {status === 'sending' && <><svg className="animate-spin h-5 w-5 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><FadeText langKey={lang}>{t.button.sending}</FadeText></>}
              {status === 'success' && <FadeText langKey={lang}>{t.button.success}</FadeText>}
              {status === 'error' && <FadeText langKey={lang}>{t.button.error}</FadeText>}
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}