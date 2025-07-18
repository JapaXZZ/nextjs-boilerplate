'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Share2, ArrowRight, Wifi, WifiOff } from "lucide-react";

interface Script {
  id: number;
  title: string;
  description: string;
  online: boolean;
  url: string;
}

const initialScripts: Script[] = [
  { id: 1, title: "Tarefa SP", description: "Conclui automaticamente as tarefas.", online: true, url: "#" },
  { id: 2, title: "Redação SP", description: "Escreve redações com IA.", online: false, url: "#" },
  { id: 3, title: "Khanware v3.1.1", description: "Responde atividades do Khan Academy.", online: true, url: "#" },
  { id: 4, title: "Speak", description: "Conclui lições do Speak automaticamente.", online: true, url: "#" },
  { id: 5, title: "Leia SP", description: "Lê e responde questões do Leia SP.", online: false, url: "#" },
  { id: 6, title: "Matific", description: "Finaliza exercícios do Matific.", online: true, url: "#" },
  { id: 7, title: "Alura", description: "Completa cursos automaticamente.", online: true, url: "#" },
  { id: 8, title: "Expansão Noturno", description: "Acelera atividades do Expansão Noturno.", online: false, url: "#" },
];

export default function Home() {
  const [scripts] = useState(initialScripts);

  function handleShare(script: Script) {
    if (navigator.share) {
      navigator.share({
        title: script.title,
        text: script.description,
        url: window.location.href,
      }).catch(() => alert("Falha ao compartilhar."));
    } else {
      alert("Seu navegador não suporta compartilhamento.");
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-100 px-6 py-12 sm:px-12 font-sans">
      <header className="max-w-7xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          HideXS
        </h1>
        <nav className="space-x-8 text-gray-400 hidden sm:flex">
          <a href="#scripts" className="hover:text-pink-500 transition">Scripts</a>
          <a href="#about" className="hover:text-pink-500 transition">Sobre</a>
        </nav>
      </header>

      <section id="scripts" className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {scripts.map((script) => (
          <motion.div
            key={script.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: script.id * 0.1, duration: 0.4 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#131313] rounded-2xl p-6 border border-gray-800 shadow-xl flex flex-col justify-between hover:ring-2 hover:ring-pink-500/30 transition-all"
          >
            <div>
              <h2 className="text-xl font-bold text-pink-400 mb-2">{script.title}</h2>
              <p className="text-sm text-gray-400 mb-5">{script.description}</p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className={clsx(
                "flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full transition-all",
                script.online
                  ? "bg-green-900 text-green-400"
                  : "bg-red-900 text-red-400"
              )}>
                {script.online ? <Wifi size={16} /> : <WifiOff size={16} />}
                {script.online ? "Online" : "Offline"}
              </span>

              <div className="flex gap-2">
                <a
                  href={script.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white text-sm font-medium rounded-full transition"
                >
                  Acessar <ArrowRight size={16} />
                </a>

                <button
                  onClick={() => handleShare(script)}
                  className="inline-flex items-center gap-1 px-4 py-2 border border-pink-500 hover:border-pink-400 text-pink-400 hover:text-pink-300 text-sm font-medium rounded-full transition"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section id="about" className="max-w-4xl mx-auto mt-24 text-center text-gray-400">
        <h3 className="text-3xl font-bold mb-4 text-pink-400">Sobre o HideXS</h3>
        <p className="text-lg">
          O HideXS é um hub moderno, seguro e estiloso para gerenciar, acessar e compartilhar scripts escolares de forma rápida e prática.
        </p>
      </section>

      <footer className="text-center mt-24 text-sm text-gray-600 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </main>
  );
}