"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
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
    description: "Material completo com gabarito de todas as séries",
    url: "https://apostiladestroyer.netlify.app/",
  },
];

const Index = () => {
  const [scripts] = useState(initialScripts);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  function goToTutoriais() {
    router.push("/tutoriais");
  }

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-20 pb-12 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-purple-800/50 backdrop-blur-sm border border-purple-700/50 rounded-full"
          >
            <span className="text-purple-400">⚡</span>
            <span className="text-slate-300 font-medium">Plataforma Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent select-none"
          >
            HideXS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Um conjunto de recursos avançados para aprimorar sua vivência no Sala do Futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mb-10"
          >
            <button
              onClick={goToTutoriais}
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-xl transition-colors duration-300 shadow-md shadow-purple-600/40"
            >
              Tutoriais
            </button>
          </motion.div>

          <div className="max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-2xl shadow-lg shadow-black/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-1">Estatísticas</h3>
            <p className="text-xs text-slate-400 mb-4">Última atualização: 18/07/2025</p>
            <div className="h-px bg-slate-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Total</span>
                <span className="text-xl font-bold text-purple-400">{stats.total}</span>
              </div>
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Online</span>
                <span className="text-xl font-bold text-green-400">{stats.online}</span>
              </div>
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Offline</span>
                <span className="text-xl font-bold text-red-400">{stats.offline}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* restante do código continua como está, sem alteração */}
    </div>
  );
};

export default Index;