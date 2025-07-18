'use client';

import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';

const scripts = [
  {
    nome: 'Tarefa SP',
    desc: 'Ferramenta para concluir as tarefas',
    status: 'online',
  },
  {
    nome: 'Redação SP',
    desc: 'Ferramenta para concluir as redações',
    status: 'offline',
  },
  {
    nome: 'Khanware v3.1.1',
    desc: 'Ferramenta para concluir o Khan',
    status: 'online',
  },
  {
    nome: 'Speak',
    desc: 'Ferramenta para concluir o Speak',
    status: 'online',
  },
  {
    nome: 'Leia SP',
    desc: 'Ferramenta para concluir o Leia SP',
    status: 'offline',
  },
  {
    nome: 'Matific',
    desc: 'Ferramenta para concluir o Matific',
    status: 'online',
  },
  {
    nome: 'Alura',
    desc: 'Ferramenta para concluir o Alura',
    status: 'online',
  },
  {
    nome: 'Expansão Noturno',
    desc: 'Ferramenta para concluir o Expansão',
    status: 'online',
  },
];

// ⚙️ Se quiser mudar o status de online para offline, altere o campo `status` para 'offline' ou 'online' no array acima.

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a1a1a] text-white px-4 py-12 font-sans relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-700/30 rounded-full blur-3xl" />

      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-12">
        HideXS Scripts
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {scripts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-purple-300 group-hover:text-purple-100 transition">
                {item.nome}
              </h2>
              <span
                className={`text-sm font-semibold ${
                  item.status === 'online' ? 'text-green-400' : 'text-red-500'
                }`}
              >
                {item.status === 'online' ? '🟢 Online' : '🔴 Offline'}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{item.desc}</p>

            <div className="flex gap-3">
              <button
                className={`${
                  item.status === 'online'
                    ? 'bg-purple-700 hover:bg-purple-600'
                    : 'bg-gray-600 cursor-not-allowed'
                } text-white text-sm px-4 py-2 rounded-xl transition-all duration-300 shadow-md`}
                disabled={item.status !== 'online'}
              >
                Acessar Script
              </button>

              <button
                onClick={() => navigator.share?.({ title: item.nome, text: item.desc })}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-xl text-white transition-all duration-300 flex items-center justify-center"
                title="Compartilhar"
              >
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}