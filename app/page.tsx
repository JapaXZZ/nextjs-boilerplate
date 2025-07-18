'use client';

import { motion } from 'framer-motion';

const scripts = [
  { nome: 'Tarefa SP', desc: 'Ferramenta para concluir as tarefas' },
  { nome: 'Redação SP', desc: 'Ferramenta para concluir as redações' },
  { nome: 'Khanware v3.1.1', desc: 'Ferramenta para concluir o Khan' },
  { nome: 'Speak', desc: 'Ferramenta para concluir o Speak' },
  { nome: 'Leia SP', desc: 'Ferramenta para concluir o Leia SP' },
  { nome: 'Matific', desc: 'Ferramenta para concluir o Matific' },
  { nome: 'Alura', desc: 'Ferramenta para concluir o Alura' },
  { nome: 'Expansão Noturno', desc: 'Ferramenta para concluir o Expansão' },
];

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

            <h2 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-100 transition">
              {item.nome}
            </h2>
            <p className="text-gray-300">{item.desc}</p>
            <div className="mt-4">
              <button className="bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-purple-600/40">
                Acessar Script
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}