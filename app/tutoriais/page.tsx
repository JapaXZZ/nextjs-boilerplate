"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const scripts = [
  { title: "Tarefas SP", url: "https://www.youtube.com/embed/TAREFA" },
  { title: "Redação SP", url: "https://www.youtube.com/embed/REDACAO" },
  { title: "Khanware v3.1.1", url: "https://www.youtube.com/embed/KHANWARE" },
  { title: "Speak", url: "https://www.youtube.com/embed/SPEAK" },
  { title: "Leia SP", url: "https://www.youtube.com/embed/LEIA" },
  { title: "Matific", url: "https://www.youtube.com/embed/MATIFIC" },
  { title: "Alura", url: "https://www.youtube.com/embed/ALURA" },
  { title: "Expansão Noturno", url: "https://www.youtube.com/embed/EXPANSAO" },
];

const TutorialPage = () => {
  const [selected, setSelected] = useState<"celular" | "computador" | "ios" | null>(null);

  const titlesToRemove =
    selected === "ios"
      ? ["Tarefas SP", "Redação SP", "Alura", "Expansão Noturno", "Matific", "Khanware v3.1.1"]
      : ["Tarefas SP", "Redação SP", "Alura", "Expansão Noturno"];

  const filteredScripts = selected
    ? scripts.filter((s) => !titlesToRemove.includes(s.title))
    : scripts;

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
          <button
            onClick={() => setSelected("celular")}
            className={`rounded-2xl px-6 py-4 bg-slate-800 border border-purple-700 hover:bg-purple-700 transition-colors font-semibold text-white shadow-md ${
              selected === "celular" ? "bg-purple-700" : ""
            }`}
          >
            Para Celular
          </button>
          <button
            onClick={() => setSelected("computador")}
            className={`rounded-2xl px-6 py-4 bg-slate-800 border border-purple-700 hover:bg-purple-700 transition-colors font-semibold text-white shadow-md ${
              selected === "computador" ? "bg-purple-700" : ""
            }`}
          >
            Para Computador
          </button>
          <button
            onClick={() => setSelected("ios")}
            className={`rounded-2xl px-6 py-4 bg-slate-800 border border-purple-700 hover:bg-purple-700 transition-colors font-semibold text-white shadow-md ${
              selected === "ios" ? "bg-purple-700" : ""
            }`}
          >
            Para iOS
          </button>
        </div>

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
                  src={script.url}
                  title={`Tutorial ${script.title}`}
                  allowFullScreen
                  className="w-full h-60 rounded-lg border border-slate-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;