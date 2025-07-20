"use client";

import { useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean;
  url: string;
  category: string;
}

const initialScripts: Script[] = [
  {
    id: 1,
    title: "Tarefa SP",
    description: "Ferramenta avançada para automação e conclusão de tarefas",
    online: false,
    url: "https://taskitos.cupiditys.lol/",
    category: "Web",
  },
  {
    id: 2,
    title: "Redação SP",
    description: "Sistema inteligente para geração de redações",
    online: false,
    url: "https://redacao.cupiditys.lol/",
    category: "Web",
  },
  {
    id: 3,
    title: "Khanware v3.1.1",
    description: "Script completo para automação da plataforma Khan Academy",
    online: true,
    url: "https://khanware.space/",
    category: "BookMark",
  },
  {
    id: 4,
    title: "Speak",
    description: "Ferramenta de automação para a plataforma Speak",
    online: true,
    url: "https://speakify.cupiditys.lol/",
    category: "BookMark",
  },
  {
    id: 5,
    title: "Leia SP",
    description: "Sistema automatizado para concluir questões dos livros",
    online: false,
    url: "https://leiasp.cupiditys.lol/",
    category: "BookMark",
  },
  {
    id: 6,
    title: "Matific",
    description: "Automação avançada para exercícios matemáticos",
    online: false,
    url: "https://matific.cupiditys.lol/",
    category: "BookMark",
  },
  {
    id: 7,
    title: "Alura",
    description: "Ferramenta para concluir a plataforma Alura",
    online: true,
    url: "https://crimsonstrauss.xyz/alura",
    category: "Web",
  },
  {
    id: 8,
    title: "Expansão Noturno",
    description: "Sistema para automatização das tarefas da plataforma Expansão Noturno",
    online: false,
    url: "https://crimsonstrauss.xyz/expansao.html",
    category: "Web",
  },
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

  const stats = useMemo(() => {
    const total = scripts.length;
    const online = scripts.filter((s) => s.online).length;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <header className="relative z-10 flex justify-between items-center px-4 pt-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-purple-400 select-none">🚀 HideXS</h1>
        <button
          onClick={() => router.push("/tutoriais")}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md shadow-purple-600/40"
        >
          Tutoriais
        </button>
      </header>

      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-12 pb-12 px-4"
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

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center gap-4 mb-8"
          >
            <Link
  href="/conexoes"
  className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm"
>
  📡 Ver Conexões Wi-Fi
</Link>
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
            className="text-lg md:text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Um conjunto de recursos avançados para aprimorar sua vivência no Sala do Futuro.
          </motion.p>

          <div className="w-full max-w-2xl mx-auto p-4">
            <div className="bg-gray-900 border-l-4 border-purple-600 text-white p-4 rounded-xl shadow mb-6">
              <p className="font-bold text-lg">📢 Notificações</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Os scripts temporariamente indisponíveis serão reativados até o dia 23 de julho.</li>
              </ul>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-2xl shadow-lg shadow-black/30 p-6">
            <h3 className="text-lg font-semibold text-white mb-1">Estatísticas</h3>
            <p className="text-xs text-slate-400 mb-4">Última atualização: 19/07/2025</p>
            <div className="h-px bg-slate-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Total</span>
                <span className="text-2xl font-bold text-purple-400 font-mono">{stats.total}</span>
              </div>
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Online</span>
                <span className="text-2xl font-bold text-green-400 font-mono">{stats.online}</span>
              </div>
              <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3">
                <span className="text-white text-sm">Offline</span>
                <span className="text-2xl font-bold text-red-400 font-mono">{stats.offline}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <motion.main
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scripts.map((script) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              return (
                <motion.div
                  key={script.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  onHoverStart={() => setHoveredCard(script.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                 <div className={cn(
                    "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",
                    hoveredCard === script.id && "opacity-40"
                  )} />
                  <div className="relative bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">
                          {script.title}
                        </h3>
                        <span className="inline-block mt-1 px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">
                          {script.category}
                        </span>
                      </div>
                      <div className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold select-none",
                        script.online
                          ? "bg-purple-500/30 text-purple-400 border border-purple-500/40"
                          : "bg-red-500/30 text-red-400 border border-red-500/40"
                      )}>
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          script.online ? "bg-purple-400" : "bg-red-400"
                        )} />
                        {script.online ? "Online" : "Offline"}
                      </div>
                    </div>
                    <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1 select-text">
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
              );
            })}
          </div>

          {/* Título das apostilas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="col-span-full flex items-center gap-3 mt-12 mb-6"
          >
            <span className="text-purple-400 text-xl">📘</span>
            <h2 className="text-2xl font-bold text-purple-400">Apostilas Disponíveis</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />
          </motion.div>

          {/* Card Apostilas com animação ao rolar */}
          {(() => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative"
              >
                <div className={cn(
                  "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",
                  hoveredCard === -1 && "opacity-40"
                )} />
                <div
                  onMouseEnter={() => setHoveredCard(-1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">
                        Apostilas
                      </h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">
                        Material
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold select-none bg-purple-500/30 text-purple-400 border border-purple-500/40">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      Online
                    </div>
                  </div>
                  <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1 select-text">
                    Material completo com gabarito de todas as séries.
                  </p>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://apostiladestroyer.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/40"
                    >
                      <span>↗</span>
                      Acessar
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </motion.main>

      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-800 p-4 rounded-xl shadow mb-6">
          <p className="font-bold text-lg">⚠️ Aviso Educacional</p>
          <p className="text-sm mt-1">
            O <strong>HideXS</strong> é uma ferramenta educativa desenvolvida para auxiliar os estudantes.
            Use com responsabilidade e sempre priorize o aprendizado real. Recomendamos usar nossos scripts
            como complemento aos seus estudos ou quando não houver tempo suficiente, não como substituto.
          </p>
        </div>
      </div>

      <footer className="relative z-10 py-12 text-center border-t border-purple-800/60 px-4 max-w-7xl mx-auto select-none">
        <p className="text-purple-300 mb-4">
          Desenvolvido por <span className="font-semibold text-white">JapaXZZ</span>.
        </p>
        <p className="text-purple-300 mb-6 max-w-xl mx-auto">
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