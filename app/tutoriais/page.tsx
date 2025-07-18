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

const Page = () => {
  const [selected, setSelected] = useState<"celular" | "pc" | "ios" | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md shadow-purple-600/40"
          >
            ⬅ Voltar
          </button>

          <h1 className="text-3xl font-bold text-purple-400">Tutoriais</h1>
        </div>

        <div className="flex gap-3 mb-8">
          {!selected || selected === "celular" ? (
            <button
              onClick={() => setSelected("celular")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300"
            >
              Para Celular
            </button>
          ) : null}

          {!selected || selected === "pc" ? (
            <button
              onClick={() => setSelected("pc")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300"
            >
              Para Computador
            </button>
          ) : null}

          {!selected || selected === "ios" ? (
            <button
              onClick={() => setSelected("ios")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-all duration-300"
            >
              Para iOS
            </button>
          ) : null}
        </div>

        {selected && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scripts.map((script) => (
              <div
                key={script.id}
                className="bg-slate-900/90 border border-purple-700 rounded-2xl p-4 shadow-md shadow-purple-800"
              >
                <h2 className="text-lg font-bold text-purple-300 mb-2">{script.title}</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={script.video}
                    title={script.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;