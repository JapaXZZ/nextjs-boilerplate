"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean; // Alterar aqui para true/false e definir status do script
}

const initialScripts: Script[] = [
  { id: 1, title: "Tarefa SP", description: "Ferramenta para concluir as tarefas", online: true },
  { id: 2, title: "Redação SP", description: "Ferramenta para concluir as redações", online: false },
  { id: 3, title: "Khanware v3.1.1", description: "Ferramenta para concluir o Khan", online: true },
  { id: 4, title: "Speak", description: "Ferramenta para concluir o Speak", online: true },
  { id: 5, title: "Leia SP", description: "Ferramenta para concluir o Leia SP", online: false },
  { id: 6, title: "Matific", description: "Ferramenta para concluir o Matific", online: true },
  { id: 7, title: "Alura", description: "Ferramenta para concluir o Alura", online: true },
  { id: 8, title: "Expansão Noturno", description: "Ferramenta para concluir o Expansão", online: false },
];

export default function Home() {
  const [scripts] = useState<Script[]>(initialScripts);

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
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
          <h1 className="text-purple-500 text-3xl font-extrabold select-none cursor-default tracking-wide">
            HideXS
          </h1>
          <ul className="hidden sm:flex space-x-12 text-gray-400 font-semibold">
            <li>
              <a href="#home" className="hover:text-purple-500 transition duration-300">
                Início
              </a>
            </li>
            <li>
              <a href="#scripts" className="hover:text-purple-500 transition duration-300">
                Scripts
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-500 transition duration-300">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="home"
        className="pt-24 min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-gray-200 px-6 sm:px-12 flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-extrabold max-w-5xl text-center leading-tight mb-10 tracking-wide"
        >
          HideXS — Scripts e ferramentas com estilo dark, elegância e performance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center text-gray-400 text-lg mb-16"
        >
          Organize, compartilhe e monitore seus scripts favoritos com status em tempo real, tudo com design escuro e sofisticado.
        </motion.p>

        <section
          id="scripts"
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {scripts.map((script) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: script.id * 0.12 }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(128, 90, 213, 0.6)" }}
              className="cursor-default bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl p-7 shadow-xl border border-purple-700 flex flex-col justify-between select-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-400">{script.title}</h3>
                  {/* Sinalizador de status online/offline */}
                  <span
                    title={script.online ? "Online" : "Offline"}
                    className={clsx(
                      "w-5 h-5 rounded-full border-2 border-gray-700",
                      script.online ? "bg-green-500" : "bg-red-600"
                    )}
                  />
                </div>
                <p className="text-gray-400 leading-relaxed">{script.description}</p>
              </div>

              <button
                onClick={() => handleShare(script)}
                className="mt-8 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 transition rounded-full px-6 py-3 text-white font-semibold tracking-wide"
              >
                Compartilhar
              </button>
            </motion.div>
          ))}
        </section>

        <section
          id="about"
          className="mt-24 max-w-4xl text-center text-gray-400"
        >
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Sobre o HideXS</h3>
          <p className="leading-relaxed text-lg max-w-xl mx-auto">
            HideXS é a plataforma ideal para organizar, compartilhar e acompanhar seus scripts com status online e offline, tudo em um design dark moderno, rápido e sofisticado.
          </p>
        </section>
      </main>

      <footer className="mt-32 py-8 text-center text-gray-500 text-sm border-t border-gray-800 select-none">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}