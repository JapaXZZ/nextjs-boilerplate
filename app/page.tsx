"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean;
  url: string;
}

const initialScripts: Script[] = [
  { id: 1, title: "Tarefa SP", description: "Ferramenta para concluir as tarefas", online: true, url: "#" },
  { id: 2, title: "Redação SP", description: "Ferramenta para concluir as redações", online: false, url: "#" },
  { id: 3, title: "Khanware v3.1.1", description: "Ferramenta para concluir o Khan", online: true, url: "#" },
  { id: 4, title: "Speak", description: "Ferramenta para concluir o Speak", online: true, url: "#" },
  { id: 5, title: "Leia SP", description: "Ferramenta para concluir o Leia SP", online: false, url: "#" },
  { id: 6, title: "Matific", description: "Ferramenta para concluir o Matific", online: true, url: "#" },
  { id: 7, title: "Alura", description: "Ferramenta para concluir o Alura", online: true, url: "#" },
  { id: 8, title: "Expansão Noturno", description: "Ferramenta para concluir o Expansão", online: false, url: "#" },
];

export default function Home() {
  const [scripts] = useState(initialScripts);

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

  const OnlineIcon = () => (
    <svg
      className="w-5 h-5 text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" />
    </svg>
  );

  const OfflineIcon = () => (
    <svg
      className="w-5 h-5 text-red-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" />
      <line
        x1="5"
        y1="5"
        x2="15"
        y2="15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-950 text-gray-300 px-6 py-12 sm:px-12">
        <header className="max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-extrabold text-purple-500 select-none tracking-wide">
            HideXS
          </h1>
          <nav className="space-x-8 text-gray-400 font-semibold hidden sm:flex">
            <a href="#scripts" className="hover:text-purple-400 transition">
              Scripts
            </a>
            <a href="#about" className="hover:text-purple-400 transition">
              Sobre
            </a>
          </nav>
        </header>

        <section
          id="scripts"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {scripts.map((script) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: script.id * 0.1, duration: 0.45 }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 10px 25px -5px rgba(124, 58, 237, 0.6), 0 15px 35px -10px rgba(124, 58, 237, 0.4)",
              }}
              className="bg-[#1e1e2f] rounded-2xl border border-purple-700 p-7 flex flex-col justify-between shadow-md"
            >
              <div>
                <h2 className="text-2xl font-bold text-purple-400 mb-3 select-text truncate">
                  {script.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed select-text line-clamp-3">
                  {script.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={clsx(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm select-none",
                    script.online
                      ? "bg-green-700 text-green-300"
                      : "bg-red-700 text-red-300"
                  )}
                >
                  {script.online ? <OnlineIcon /> : <OfflineIcon />}
                  {script.online ? "Online" : "Offline"}
                </span>

                <div className="flex gap-3">
                  <a
                    href={script.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition rounded-full font-semibold text-gray-100 shadow-sm"
                  >
                    Acessar
                  </a>

                  <button
                    onClick={() => handleShare(script)}
                    className="px-6 py-2 border border-purple-600 hover:border-purple-400 text-purple-400 hover:text-purple-300 transition rounded-full font-semibold shadow-sm"
                    aria-label={`Compartilhar ${script.title}`}
                  >
                    Compartilhar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section
          id="about"
          className="max-w-4xl mx-auto mt-24 text-center text-gray-400 select-text"
        >
          <h3 className="text-4xl font-extrabold mb-8 text-purple-400">
            Sobre o HideXS
          </h3>
          <p className="leading-relaxed text-lg max-w-xl mx-auto tracking-wide">
            HideXS é a plataforma ideal para organizar, compartilhar e acompanhar
            seus scripts com status online e offline, tudo em um design dark
            moderno, rápido e sofisticado.
          </p>
        </section>
      </main>

      <footer className="py-10 text-center text-gray-600 border-t border-purple-800 select-none">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}