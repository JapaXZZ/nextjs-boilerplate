"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean;
  url: string;
  category: string;
}

const initialScripts: Script[] = [
  { id: 1, title: "Tarefa SP", description: "Ferramenta avançada para automação e conclusão de tarefas educacionais", online: false, url: "#", category: "Educação" },
  { id: 2, title: "Redação SP", description: "Sistema inteligente para geração e aperfeiçoamento de redações", online: false, url: "#", category: "Escrita" },
  { id: 3, title: "Khanware v3.1.1", description: "Suite completa para automação da plataforma Khan Academy", online: true, url: "#", category: "Matemática" },
  { id: 4, title: "Speak", description: "Ferramenta de automação para plataformas de idiomas", online: true, url: "#", category: "Idiomas" },
  { id: 5, title: "Leia SP", description: "Sistema automatizado para leitura e compreensão textual", online: false, url: "#", category: "Literatura" },
  { id: 6, title: "Matific", description: "Automação avançada para exercícios matemáticos", online: true, url: "#", category: "Matemática" },
  { id: 7, title: "Alura", description: "Ferramenta premium para cursos e certificações", online: true, url: "#", category: "Tecnologia" },
  { id: 8, title: "Expansão Noturno", description: "Sistema especializado para ensino noturno e EJA", online: false, url: "#", category: "Educação" },
];

const Index = () => {
  const [scripts] = useState(initialScripts);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const total = scripts.length;
  const online = scripts.filter((s) => s.online).length;
  const offline = scripts.filter((s) => !s.online).length;

  function handleShare(script: Script) {
    if (navigator.share) {
      navigator
        .share({
          title: script.title,
          text: script.description,
          url: window.location.href,
        })
        .catch(() => alert("Não foi possível compartilhar."));
    } else {
      alert("Seu navegador não suporta a função de compartilhar.");
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-20 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
          >
            <span className="text-emerald-400">⚡</span>
            <span className="text-slate-300 font-medium">Plataforma Premium</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            HideXS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            A mais avançada plataforma de automação educacional com design premium e tecnologia de ponta
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            <div className="px-6 py-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-white">
              Total: <span className="font-bold">{total}</span>
            </div>
            <div className="px-6 py-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-emerald-400">
              Online: <span className="font-bold">{online}</span>
            </div>
            <div className="px-6 py-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-red-400">
              Offline: <span className="font-bold">{offline}</span>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* restante do seu código permanece igual */}
    </div>
  );
};

export default Index;