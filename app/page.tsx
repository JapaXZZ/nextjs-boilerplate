'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from 'app/card';

const scripts = [
  { title: 'Tarefa SP', description: 'Ferramenta para concluir as tarefas' },
  { title: 'Redação SP', description: 'Ferramenta para concluir as redações' },
  { title: 'Khanware v3.1.1', description: 'Ferramenta para concluir o Khan' },
  { title: 'Speak', description: 'Ferramenta para concluir o Speak' },
  { title: 'Leia SP', description: 'Ferramenta para concluir o Leia SP' },
  { title: 'Matific', description: 'Ferramenta para concluir o Matific' },
  { title: 'Alura', description: 'Ferramenta para concluir o Alura' },
  { title: 'Expansão Noturno', description: 'Ferramenta para concluir o Expansão' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">HideXS Scripts</h1>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto">
          Ferramentas elegantes para você completar suas tarefas e projetos com facilidade.
        </p>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {scripts.map(({ title, description }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all duration-300 rounded-2xl shadow-md">
              <CardHeader>
                <CardTitle className="text-white text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}