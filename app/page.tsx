'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#1e1e1e] text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Scripts Educacionais</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scripts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1f1f1f] border border-purple-800/30 hover:border-purple-500/70 rounded-2xl p-6 shadow-xl hover:shadow-purple-600/20 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-purple-300">{item.nome}</h2>
            <p className="mt-2 text-gray-300">{item.desc}</p>
            <Link
              href="#"
              className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-200 transition"
            >
              Acessar
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}