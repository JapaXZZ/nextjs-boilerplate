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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-black/90" />

      <div className="relative z-20 bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between shadow shadow-black/50">
        <h1 className="text-xl font-bold text-white">HideXS</h1>
        <button onClick={openEmail} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold transition">
          Suporte
        </button>
      </div>

      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-28 pb-12 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent"
          >
            HideXS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Um conjunto de recursos avançados para aprimorar sua vivência no Sala do Futuro.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-slate-400">
            <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full">Total: {stats.total}</span>
            <span className="px-3 py-1 bg-slate-900 border border-emerald-700 text-emerald-400 rounded-full">Online: {stats.online}</span>
            <span className="px-3 py-1 bg-slate-900 border border-red-700 text-red-400 rounded-full">Offline: {stats.offline}</span>
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
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-emerald-400 text-xl">💻</span>
            <h2 className="text-2xl font-semibold">Scripts Disponíveis</h2>
            <div className="flex-1 h-px bg-slate-700" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scripts.map((script) => (
              <motion.div
                key={script.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
                }}
                onHoverStart={() => setHoveredCard(script.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={cn(
                  "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 blur transition-opacity duration-500",
                  hoveredCard === script.id && "opacity-30"
                )} />

                <div className="relative bg-slate-950/90 border border-slate-800 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">{script.title}</h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">{script.category}</span>
                    </div>
                    <div className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold",
                      script.online
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    )}>
                      <div className={cn("w-2 h-2 rounded-full", script.online ? "bg-emerald-400" : "bg-red-400")} />
                      {script.online ? "Online" : "Offline"}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{script.description}</p>

                  <div className="flex gap-3">
                    <motion.a
                      href={script.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      <span>↗</span>Acessar
                    </motion.a>
                    <motion.button
                      onClick={() => handleShare(script)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-xl transition"
                    >
                      📤
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <footer className="relative z-10 py-10 text-center border-t border-slate-800 px-6 max-w-7xl mx-auto">
        <p className="text-slate-500 mb-2">Desenvolvido por <span className="text-white font-semibold">JapaXZZ</span></p>
        <p className="text-slate-600 mb-4">Agradecimentos especiais aos colaboradores da plataforma HideXS</p>
        <button
          onClick={openEmail}
          className="px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-medium shadow shadow-emerald-500/30"
        >
          Contatar Suporte
        </button>
      </footer>
    </div>
  );
};

export default Index;