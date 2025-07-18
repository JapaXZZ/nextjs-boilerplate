"use client";

import { useState, useMemo } from "react";
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
  { id: 1, title: "Tarefa SP", description: "Ferramenta avançada para automação e conclusão de tarefas", online: false, url: "https://taskitos.cupiditys.lol/", category: "Web" },
  { id: 2, title: "Redação SP", description: "Sistema inteligente para geração de redações", online: false, url: "https://redacao.cupiditys.lol/", category: "Web" },
  { id: 3, title: "Khanware v3.1.1", description: "Script completo para automação da plataforma Khan Academy", online: true, url: "https://khanware.space/", category: "BookMark" },
  { id: 4, title: "Speak", description: "Ferramenta de automação para a plataforma Speak", online: true, url: "https://speakify.cupiditys.lol/", category: "BookMark" },
  { id: 5, title: "Leia SP", description: "Sistema automatizado para concluir questões dos livros", online: false, url: "https://leiasp.cupiditys.lol/", category: "BookMark" },
  { id: 6, title: "Matific", description: "Automação avançada para exercícios matemáticos", online: false, url: "https://matific.cupiditys.lol/", category: "BookMark" },
  { id: 7, title: "Alura", description: "Ferramenta para concluir a plataforma Alura", online: true, url: "https://crimsonstrauss.xyz/alura", category: "Web" },
  { id: 8, title: "Expansão Noturno", description: "Sistema para automatização das tarefas da plataforma Expansão Noturno", online: false, url: "https://crimsonstrauss.xyz/expansao.html", category: "Web" },
];

const Index = () => {
  const [scripts] = useState(initialScripts);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = useMemo(() => {
    const total = scripts.length;
    const online = scripts.filter(s => s.online).length;
    const offline = total - online;
    return { total, online, offline };
  }, [scripts]);

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

  function openEmail() {
    window.open("mailto:darkzsuporte@gmail.com?subject=Suporte HideXS", "_blank");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/10 via-transparent to-transparent" />
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
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-900/60 backdrop-blur-md border border-slate-700/60 rounded-full shadow-lg shadow-purple-700/30"
          >
            <span className="text-purple-400">⚡</span>
            <span className="text-slate-300 font-medium">Plataforma Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-clip-text text-transparent select-none"
          >
            HideXS
          </motion.h1>

          {/* Novo layout para estatísticas */}
          <div className="flex justify-center gap-8 max-w-md mx-auto text-center">
            <div className="bg-slate-900/90 rounded-2xl p-6 flex-1 shadow-lg shadow-purple-900/50 border border-purple-700">
              <p className="text-purple-400 font-semibold text-lg mb-1">Total de Scripts</p>
              <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-slate-900/90 rounded-2xl p-6 flex-1 shadow-lg shadow-purple-700/40 border border-purple-500">
              <p className="text-purple-300 font-semibold text-lg mb-1">Online</p>
              <p className="text-3xl font-bold text-purple-400">{stats.online}</p>
            </div>
            <div className="bg-slate-900/90 rounded-2xl p-6 flex-1 shadow-lg shadow-purple-700/40 border border-purple-500">
              <p className="text-purple-300 font-semibold text-lg mb-1">Offline</p>
              <p className="text-3xl font-bold text-purple-400">{stats.offline}</p>
            </div>
          </div>
        </div>
      </motion.header>

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
            <span className="text-purple-400 text-xl">💻</span>
            <h2 className="text-3xl font-extrabold text-purple-400">Scripts Disponíveis</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scripts.map((script) => (
              <motion.div
                key={script.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                onHoverStart={() => setHoveredCard(script.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div
                  className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",
                    hoveredCard === script.id && "opacity-40"
                  )}
                />

                <div className="relative bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">
                          {script.title}
                        </h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">
                        {script.category}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold select-none",
                        script.online
                          ? "bg-purple-500/30 text-purple-400 border border-purple-500/40 shadow-md shadow-purple-500/40"
                          : "bg-red-500/30 text-red-400 border border-red-500/40 shadow-md shadow-red-500/40"
                      )}
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full",
                          script.online ? "bg-purple-400" : "bg-red-400"
                        )}
                      />
                      {script.online ? "Online" : "Offline"}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 select-text">
                    {script.description}
                  </p>

                  <div className="flex gap-3">
                    <motion.a
                      href={script.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/40"
                    >
                      <span>↗</span>
                      Acessar
                    </motion.a>

                    <motion.button
                      onClick={() => handleShare(script)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 shadow-md shadow-black/40"
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

      <footer className="relative z-10 py-12 text-center border-t border-slate-800/60 px-6 max-w-7xl mx-auto select-none">
        <p className="text-slate-400 mb-4">
          Desenvolvido por <span className="font-semibold text-white">JapaXZZ</span>.
        </p>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Agradecimentos especiais a todos os colaboradores e usuários da plataforma HideXS.
        </p>
        <button
          onClick={openEmail}
          className="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-colors duration-300 shadow-md shadow-purple-600/40"
          aria-label="Enviar email para suporte"
        >
          Contatar Suporte
        </button>
      </footer>
    </div>
  );
};

export default Index;