'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all duration-300 rounded-2xl shadow-md p-6 cursor-pointer select-none">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <h1 className="text-white text-2xl font-bold tracking-tight cursor-pointer select-none">
            HideXS
          </h1>
          <ul className="hidden sm:flex space-x-8 text-gray-300 font-medium">
            <li>
              <a href="#home" className="hover:text-white transition">
                Início
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="home"
        className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-6 sm:px-10 text-center text-white pt-16"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold max-w-4xl leading-tight">
          HideXS — A experiência definitiva para sua navegação digital
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Um site elegante, rápido e moderno, desenhado para entregar o melhor
          em usabilidade, design e performance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#scripts"
            className="rounded-full bg-white text-black px-8 py-3 font-semibold text-lg hover:bg-gray-300 transition"
          >
            Comece Agora
          </a>
          <a
            href="#features"
            className="rounded-full border border-white px-8 py-3 font-semibold text-lg hover:bg-white hover:text-black transition"
          >
            Ver Funcionalidades
          </a>
        </div>
      </main>

      <section
        id="features"
        className="max-w-5xl mx-auto py-20 px-6 sm:px-10 text-center"
      >
        <h3 className="text-4xl font-bold mb-12 text-white">Funcionalidades</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
            <h4 className="text-2xl font-semibold mb-4">Design Minimalista</h4>
            <p>
              Interface escura, limpa e moderna, que foca na legibilidade e no
              conforto visual para uso prolongado.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
            <h4 className="text-2xl font-semibold mb-4">Responsivo</h4>
            <p>
              O HideXS se adapta perfeitamente a qualquer dispositivo, seja
              desktop, tablet ou smartphone.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
            <h4 className="text-2xl font-semibold mb-4">Alta Performance</h4>
            <p>
              Código otimizado para máxima velocidade e fluidez, garantindo a
              melhor experiência ao usuário.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-neutral-800 py-20 px-6 sm:px-10 text-center max-w-4xl mx-auto rounded-3xl mx-6 sm:mx-auto mb-24"
      >
        <h3 className="text-4xl font-bold mb-6 text-white">Sobre o HideXS</h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          HideXS foi criado para oferecer uma plataforma elegante e funcional,
          que alia design sofisticado a uma experiência simples e intuitiva. O
          foco está na usabilidade e na estética, para que cada visita seja
          agradável e eficiente.
        </p>
      </section>

      <section
        id="scripts"
        className="max-w-7xl mx-auto px-6 sm:px-10 mb-24"
      >
        <h3 className="text-4xl font-bold mb-12 text-white text-center">Scripts Disponíveis</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {scripts.map(({ title, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all duration-300 rounded-2xl shadow-md p-6 cursor-pointer select-none">
                <h4 className="text-white text-xl font-semibold mb-3">{title}</h4>
                <p className="text-zinc-400 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="w-full bg-neutral-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}