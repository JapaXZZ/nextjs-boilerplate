"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const scripts = [
  {
    title: "Khanware v3.1.1",
    links: {
      celular: "https://www.youtube.com/embed/KHAN_CELULAR",
      computador: "https://www.youtube.com/embed/KHAN_PC",
    },
  },
  {
    title: "Speak",
    links: {
      celular: "https://www.youtube.com/embed/SPEAK_CELULAR",
      computador: "https://www.youtube.com/embed/SPEAK_PC",
      ios: "https://www.youtube.com/embed/SPEAK_IOS",
    },
  },
  {
    title: "Matific",
    links: {
      celular: "https://www.youtube.com/embed/MATIFIC_CELULAR",
      computador: "https://www.youtube.com/embed/MATIFIC_PC",
    },
  },
];

const TutorialPage = () => {
  const [selected, setSelected] = useState<"celular" | "computador" | "ios" | null>(null);

  const filteredScripts = selected
    ? scripts.filter((s) => s.links[selected])
    : [];

  const devices = [
    { id: "celular", label: "Celular", emoji: "📱" },
    { id: "computador", label: "Computador", emoji: "💻" },
    { id: "ios", label: "iOS", emoji: "🍎" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Toolbar */}
      <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-purple-800/30 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-purple-300 hover:text-white transition-colors font-semibold text-sm bg-slate-800/60 px-4 py-2 rounded-lg border border-purple-700 hover:bg-purple-700 hover:border-purple-600"
          >
            ← Voltar ao Início
          </a>
          <h1 className="text-xl font-bold text-purple-400 select-none">Tutoriais</h1>
          <div />
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Seleção de Dispositivo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {devices.map((device) => (
            <motion.button
              key={device.id}
              onClick={() =>
                setSelected(device.id as "celular" | "computador" | "ios")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border transition-all duration-300 shadow-lg select-none ${
                selected === device.id
                  ? "bg-purple-700 border-purple-500 shadow-purple-700/30"
                  : "bg-slate-800/70 border-slate-700 hover:border-purple-600 hover:bg-slate-800"
              }`}
            >
              <span className="text-3xl">{device.emoji}</span>
              <span className="text-white font-semibold text-lg">{device.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Lista de Tutoriais */}
        {selected && filteredScripts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScripts.map((script) => (
              <motion.div
                key={script.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 flex flex-col shadow-lg shadow-purple-900/40"
              >
                <h2 className="text-xl font-bold text-white mb-4 select-none">{script.title}</h2>
                <div className="aspect-video">
                  <iframe
                    src={script.links[selected]}
                    title={`Tutorial ${script.title}`}
                    allowFullScreen
                    className="w-full h-full rounded-lg border border-slate-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selected && filteredScripts.length === 0 && (
          <p className="text-purple-300 text-center mt-20 text-lg">
            Nenhum tutorial disponível para essa plataforma.
          </p>
        )}
      </main>
    </div>
  );
};

export default TutorialPage;