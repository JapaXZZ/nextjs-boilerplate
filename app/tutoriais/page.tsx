"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "Tarefas SP",
    videoId: "VIDEO_ID_1",
  },
  {
    title: "Redação SP",
    videoId: "VIDEO_ID_2",
  },
  {
    title: "Khanware v3.1.1",
    videoId: "VIDEO_ID_3",
  },
  {
    title: "Speak",
    videoId: "VIDEO_ID_4",
  },
  {
    title: "Leia SP",
    videoId: "VIDEO_ID_5",
  },
  {
    title: "Matific",
    videoId: "VIDEO_ID_6",
  },
  {
    title: "Alura",
    videoId: "VIDEO_ID_7",
  },
  {
    title: "Expansão Noturno",
    videoId: "VIDEO_ID_8",
  },
];

const page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden pb-20">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <header className="relative z-10 px-4 py-6 border-b border-purple-800/50 backdrop-blur-md bg-slate-900/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-400 select-none">📺 Tutoriais</h1>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md shadow-purple-600/40"
          >
            Voltar para o Início
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-900/95 border border-purple-700 rounded-2xl p-6 h-full shadow-lg shadow-purple-900/50">
                <h2 className="text-xl font-extrabold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 select-none">
                  {tutorial.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                    title={`Tutorial ${tutorial.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-60 rounded-xl border-2 border-purple-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default page;