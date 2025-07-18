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

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-200 px-6 py-12 sm:px-12 font-sans">
        <header className="max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-5xl font-extrabold select-none tracking-tight text-white">
            HideXS
          </h1>
          <nav className="space-x-8 text-gray-400 font-semibold hidden sm:flex">
            <a href="#scripts" className="hover:text-white transition">
              Scripts
            </a>
            <a href="#about" className="hover:text-white transition">
              Sobre
            </a>
          </nav>
        </header>

        <section
          id="scripts"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {scripts.map((script) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: script.id * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.8)",
              }}
              className="bg-gray-800 rounded-3xl border border-gray-700 p-7 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3 truncate select-text">
                  {script.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed select-text line-clamp-3">
                  {script.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={clsx(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm select-none",
                    script.online
                      ? "bg-green-700 text-green-200"
                      : "bg-red-700 text-red-200"
                  )}
                >
                  <span
                    className={clsx(
                      "w-3 h-3 rounded-full",
                      script.online ? "bg-green-400" : "bg-red-400"
                    )}
                  />
                  {script.online ? "Online" : "Offline"}
                </span>

                <div className="flex gap-3">
                  <a
                    href={script.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 transition rounded-full font-semibold text-white shadow-sm"
                  >
                    Acessar
                  </a>

                  <button
                    onClick={() => handleShare(script)}
                    className="px-6 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-gray-100 transition rounded-full font-semibold shadow-sm"
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
          <h3 className="text-4xl font-extrabold mb-8 text-white">
            Sobre o HideXS
          </h3>
          <p className="leading-relaxed text-lg max-w-xl mx-auto tracking-wide">
            HideXS é a plataforma ideal para organizar, compartilhar e acompanhar
            seus scripts com status online e offline, tudo em um design dark
            moderno, rápido e sofisticado.
          </p>
        </section>
      </main>

      <footer className="py-10 text-center text-gray-600 border-t border-gray-700 select-none">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}