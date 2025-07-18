"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const scripts = [
  { id: 1, title: "Tarefas SP", video: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { id: 2, title: "Redação SP", video: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { id: 3, title: "Khanware v3.1.1", video: "https://www.youtube.com/embed/VIDEO_ID_3" },
  { id: 4, title: "Speak", video: "https://www.youtube.com/embed/VIDEO_ID_4" },
  { id: 5, title: "Leia SP", video: "https://www.youtube.com/embed/VIDEO_ID_5" },
  { id: 6, title: "Matific", video: "https://www.youtube.com/embed/VIDEO_ID_6" },
  { id: 7, title: "Alura", video: "https://www.youtube.com/embed/VIDEO_ID_7" },
  { id: 8, title: "Expansão Noturno", video: "https://www.youtube.com/embed/VIDEO_ID_8" },
];

const options = [
  { id: "celular", label: "Para celular", emoji: "📱" },
  { id: "pc", label: "Para computador", emoji: "🖥️" },
  { id: "ios", label: "Para iOS", emoji: "🍎" },
];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => router.push("/")}
            className="text-purple-400 hover:text-purple-300 transition-colors font-semibold flex items-center gap-2"
          >
            ⬅ Voltar para Início
          </button>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 select-none">
            Tutoriais
          </h1>
          <div style={{ width: 100 }} /> {/* Spacer to balance flex */}
        </div>

        {/* Opções estilo ApostilaDestroyer */}
        <div className="flex gap-8 justify-center mb-12 flex-wrap">
          {options.map(({ id, label, emoji }) => {
            const isActive = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(isActive ? null : id)}
                className={`
                  cursor-pointer select-none rounded-lg px-8 py-6
                  text-center
                  border-2
                  transition-all duration-300
                  flex flex-col items-center gap-2
                  font-bold text-lg
                  ${isActive
                    ? "border-purple-500 bg-gradient-to-tr from-purple-700/30 to-purple-700/10 text-purple-300 shadow-[0_0_10px_3px_rgba(139,92,246,0.4)]"
                    : "border-purple-700 text-purple-500 hover:border-purple-500 hover:text-purple-300"}
                  w-44
                  shadow-sm
                `}
              >
                <span className="text-4xl">{emoji}</span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Mostrar todos */}
        {selected && (
          <div className="text-center mb-10">
            <button
              onClick={() => setSelected(null)}
              className="px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors shadow-lg text-white font-semibold"
            >
              🔄 Mostrar Todos
            </button>
          </div>
        )}

        {/* Conteúdo dos vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {(selected
            ? scripts
            : scripts
          ).map(({ id, title, video }) => {
            // Se filtrasse por plataforma, aqui aplicaria filtro. Agora mostra todos sempre.
            // Para simular filtro, poderia usar "selected" para filtrar, mas aqui exibe todos.
            if (selected && selected !== "celular" && selected !== "pc" && selected !== "ios") return null;

            return (
              <div
                key={id}
                className="bg-slate-900 rounded-2xl border border-purple-700 shadow-purple-900/50 shadow-lg overflow-hidden"
              >
                <h2 className="px-6 py-4 text-purple-300 font-semibold text-xl border-b border-purple-700 select-none">
                  {title}
                </h2>
                <div className="aspect-video">
                  <iframe
                    src={video}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}