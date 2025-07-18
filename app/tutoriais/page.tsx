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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-4 pb-20 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-medium"
          >
            ← Voltar ao Início
          </a>
        </div>

        <h1 className="text-4xl font-bold text-purple-400 mb-6">Tutoriais</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {["celular", "computador", "ios"].map((device) => (
            <button
              key={device}
              onClick={() => setSelected(device as "celular" | "computador" | "ios")}
              className={`rounded-2xl px-6 py-4 bg-slate-800 border border-purple-700 hover:bg-purple-700 transition-colors font-semibold text-white shadow-md ${
                selected === device ? "bg-purple-700" : ""
              }`}
            >
              Para {device.charAt(0).toUpperCase() + device.slice(1)}
            </button>
          ))}
        </div>

        {selected && filteredScripts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScripts.map((script) => (
              <motion.div
                key={script.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative bg-slate-900/95 backdrop-blur-md border border-purple-700 rounded-2xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50"
              >
                <h2 className="text-xl font-bold text-white mb-4">{script.title}</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={script.links[selected]}
                    title={`Tutorial ${script.title}`}
                    allowFullScreen
                    className="w-full h-60 rounded-lg border border-slate-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selected && filteredScripts.length === 0 && (
          <p className="text-purple-300 text-center mt-10">Nenhum tutorial disponível para essa plataforma.</p>
        )}
      </div>
    </div>
  );
};

export default TutorialPage;