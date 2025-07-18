"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean; // true = online, false = offline
  url: string; // link de acesso do script
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

  // Ícones SVG inline simples para status
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
          <h1 className="text-4xl font-extrabold text-purple-400 select-none tracking-wider">
            HideXS
          </h1>
          <nav className="space-x-8 text-gray-500 font-medium hidden sm:flex">
            <a href="#scripts" className="hover:text-purple-500 transition">
              Scripts
            </a>
            <a href="#about" className="hover:text-purple-500 transition">
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: script.id * 0.12, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px 3px rgba(124, 58, 237, 0.7)",
              }}
              className="bg-gradient-to-tr from-gray-850 to-gray-900 rounded-3xl p-8 shadow-lg border border-purple-800 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-purple-300 mb-2 select-text">
                  {script.title}
                </h2>
                <p className="text-gray-400 mb-5 leading-relaxed select-text">
                  {script.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Indicador com ícone e texto */}
                <span
                  className={clsx(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm",
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
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition rounded-full font-semibold text-gray-100 shadow-md"
                  >
                    Acessar
                  </a>

                  <button
                    onClick={() => handleShare(script)}
                    className="px-5 py-2 border border-purple-600 hover:border-purple-400 text-purple-400 hover:text-purple-300 transition rounded-full font-semibold shadow-md"
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
          className="max-w-4xl mx-auto mt-20 text-center text-gray-400 select-text"
        >
          <h3 className="text-3xl font-bold mb-6 text-purple-400">
            Sobre o HideXS
          </h3>
          <p className="leading-relaxed text-lg max-w-xl mx-auto">
            HideXS é a plataforma ideal para organizar, compartilhar e acompanhar
            seus scripts com status online e offline, tudo em um design dark
            moderno, rápido e sofisticado.
          </p>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600 border-t border-purple-800 select-none">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}