
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
  { id: 1, title: "Tarefa SP", description: "Ferramenta avançada para automação e conclusão de tarefas educacionais", online: true, url: "#", category: "Educação" },
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
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Hero Section */}
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
        </div>
      </motion.header>

      {/* Scripts Grid */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="text-emerald-400 text-xl">💻</span>
            <h2 className="text-3xl font-bold">Scripts Disponíveis</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scripts.map((script) => (
              <motion.div
                key={script.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
                }}
                onHoverStart={() => setHoveredCard(script.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={cn(
                  "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 blur transition-opacity duration-500",
                  hoveredCard === script.id && "opacity-30"
                )} />
                
                {/* Main Card */}
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {script.title}
                        </h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full">
                        {script.category}
                      </span>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold",
                      script.online 
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    )}>
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        script.online ? "bg-emerald-400" : "bg-red-400"
                      )} />
                      {script.online ? "Online" : "Offline"}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {script.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={script.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25"
                    >
                      <span>↗</span>
                      Acessar
                    </motion.a>
                    
                    <motion.button
                      onClick={() => handleShare(script)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300"
                      aria-label={`Compartilhar ${script.title}`}
                    >
                      <span>📤</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 px-6 py-20 border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
          >
            <span className="text-blue-400">🛡️</span>
            <span className="text-slate-300 font-medium">Sobre o Projeto</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            HideXS Platform
          </h3>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Uma plataforma revolucionária que combina automação inteligente, design premium e tecnologia de ponta 
            para transformar a experiência educacional digital com elegância e eficiência incomparáveis.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} HideXS Platform. Desenvolvido com excelência e inovação.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
