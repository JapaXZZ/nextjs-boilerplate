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
  { id: 1, title: "Tarefas SP", description: "Ferramenta avançada para automação e conclusão de tarefas", online: false, url: "https://taskitos.cupiditys.lol/", category: "Web" },
  { id: 2, title: "Redação SP", description: "Sistema inteligente para geração de redações", online: false, url: "https://redacao.cupiditys.lol/", category: "Web" },
  { id: 3, title: "Khanware v3.1.1", description: "Script completo para automação da plataforma Khan Academy", online: true, url: "https://khanware.space/", category: "BookMark" },
  { id: 4, title: "Speak", description: "Ferramenta de automação para a plataforma Speak", online: true, url: "https://speakify.cupiditys.lol/", category: "BookMark" },
  { id: 5, title: "Leia SP", description: "Sistema automatizado para concluir questões dos livros", online: false, url: "https://leiasp.cupiditys.lol/", category: "BookMark" },
  { id: 6, title: "Matific", description: "Automação avançada para exercícios matemáticos", online: false, url: "https://matific.cupiditys.lol/", category: "BookMark" },
  { id: 7, title: "Alura", description: "Ferramenta para concluir a plataforma Alura", online: true, url: "https://crimsonstrauss.xyz/alura", category: "Web" },
  { id: 8, title: "Expansão Noturno", description: "Sistema para automatização das tarefas da plataforma Expansão Noturno", online: false, url: "https://crimsonstrauss.xyz/expansao.html", category: "Web" },
];

const apostilas = [
  {
    id: 1,
    title: "Apostilas",
    description: "Material completo para complementar seus estudos",
    url: "https://seulink.com/apostilas",
  },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="text-purple-400 text-xl">💻</span>
            <h2 className="text-3xl font-bold text-purple-400">Scripts Disponíveis</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />
          </motion.div>

          {/* Apostilas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-3 mb-12 mt-20"
          >
            <span className="text-purple-400 text-xl">📚</span>
            <h2 className="text-3xl font-bold text-purple-400">Apostilas</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apostilas.map((apostila) => (
              <motion.div
                key={apostila.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">
                        {apostila.title}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">
                        Material
                      </span>
                    </div>
                  </div>
                  <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1 select-text">
                    {apostila.description}
                  </p>
                  <motion.a
                    href={apostila.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/40"
                  >
                    <span>↗</span>
                    Acessar
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Index;
