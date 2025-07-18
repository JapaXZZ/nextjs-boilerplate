"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean; // Altere esse valor para true/false para mudar o status do script
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
  const [scripts, setScripts] = useState<Script[]>(initialScripts);

  function handleShare(script: Script) {
    if (navigator.share) {
      navigator.share({
        title: script.title,
        text: script.description,
        url: window.location.href,
      }).catch(() => alert("Não foi possível compartilhar."));
    } else {
      alert("Seu navegador não suporta a função de compartilhar.");
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-900 via-black to-indigo-900 z-50 border-b border-indigo-700">
        <nav className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
          <h1 className="text-white text-3xl font-extrabold tracking-wide select-none cursor-default">HideXS</h1>
          <ul className="hidden sm:flex space-x-10 text-indigo-300 font-semibold">
            <li><a href="#home" className="hover:text-white transition">Início</a></li>
            <li><a href="#scripts" className="hover:text-white transition">Scripts</a></li>
            <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
          </ul>
        </nav>
      </header>

      <main id="home" className="pt-20 min-h-screen bg-gradient-to-br from-neutral-900 via-indigo-900 to-black text-indigo-50 flex flex-col items-center px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold max-w-5xl text-center leading-tight mb-8"
        >
          HideXS — Sua plataforma definitiva para scripts e ferramentas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl text-center text-indigo-300 text-lg mb-12"
        >
          Organize, compartilhe e monitore seus scripts favoritos com estilo, rapidez e segurança.
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
              transition={{ duration: 0.5, delay: script.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-default bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-3xl p-6 shadow-lg border border-indigo-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{script.title}</h3>
                  {/* Sinalizador de status online/offline: verde = online, vermelho = offline */}
                  <span
                    title={script.online ? "Online" : "Offline"}
                    className={clsx(
                      "w-4 h-4 rounded-full",
                      script.online ? "bg-green-400" : "bg-red-500"
                    )}
                  />
                </div>
                <p className="text-indigo-300">{script.description}</p>
              </div>

              <button
                onClick={() => handleShare(script)}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition rounded-full px-5 py-2 text-white font-semibold select-none"
              >
                Compartilhar
              </button>
            </motion.div>
          ))}
        </section>

        <section
          id="about"
          className="mt-20 max-w-4xl text-center text-indigo-300"
        >
          <h3 className="text-3xl font-bold mb-4 text-indigo-50">Sobre o HideXS</h3>
          <p className="leading-relaxed">
            HideXS é uma plataforma moderna que te ajuda a organizar seus scripts, compartilhá-los facilmente e acompanhar seus status online em tempo real. Tudo isso com design elegante, rápido e responsivo.
          </p>
        </section>
      </main>

      <footer className="mt-24 py-6 text-center text-indigo-400 text-sm border-t border-indigo-700">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}