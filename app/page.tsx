'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DashboardData {
  nome: string;
  pendencias: number;
  conquistas: number;
  tarefasPendentes: number;
  notificacoes: string[];
}

export default function FutureClassroomDashboard() {
  const router = useRouter();

  const [data, setData] = useState<DashboardData>({
    nome: '',
    pendencias: 0,
    conquistas: 0,
    tarefasPendentes: 0,
    notificacoes: [],
  });

  useEffect(() => {
    const nome = localStorage.getItem('nome') || '';
    const pendencias = Number(localStorage.getItem('pendencias')) || 0;
    const conquistas = Number(localStorage.getItem('conquistas')) || 0;
    const tarefasPendentes = Number(localStorage.getItem('tarefasPendentes')) || 0;
    const notificacoes = JSON.parse(localStorage.getItem('notificacoes') || '[]');

    setData({ nome, pendencias, conquistas, tarefasPendentes, notificacoes });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-10">
      {/* Header com botão animado */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 flex justify-between items-center px-4 pt-6 max-w-7xl mx-auto"
      >
        <motion.button
          onClick={() => router.push('/tutoriais')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md shadow-purple-600/40"
        >
          Tutoriais
        </motion.button>
      </motion.header>

      {/* Saudação */}
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow">
          Olá, {data.nome || 'Aluno'}!
        </h1>
        <p className="mt-2 text-lg text-purple-300">
          Bem-vindo(a) à sua sala do futuro ✨
        </p>
      </div>

      {/* Notificações com animação */}
      {data.notificacoes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gray-900 border-l-4 border-purple-600 text-white p-4 rounded-xl shadow mb-6 mt-10 max-w-2xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-400">Notificações</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            {data.notificacoes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Estatísticas com animação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-2xl shadow-lg shadow-black/30 p-6 mt-6"
      >
        <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">Seu Progresso</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-3xl font-bold text-purple-300">
              {data.pendencias}
            </span>
            <p className="text-sm text-slate-400">Pendências</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-purple-300">
              {data.conquistas}
            </span>
            <p className="text-sm text-slate-400">Conquistas</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-purple-300">
              {data.tarefasPendentes}
            </span>
            <p className="text-sm text-slate-400">Tarefas</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}