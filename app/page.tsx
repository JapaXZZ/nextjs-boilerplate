'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tools = [
  { title: "Tarefa SP", desc: "Ferramenta para concluir as tarefas" },
  { title: "Redação SP", desc: "Ferramenta para concluir as redações" },
  { title: "Khanware v3.1.1", desc: "Ferramenta para concluir o Khan" },
  { title: "Speak", desc: "Ferramenta para concluir o Speak" },
  { title: "Leia SP", desc: "Ferramenta para concluir o Leia SP" },
  { title: "Matific", desc: "Ferramenta para concluir o Matific" },
  { title: "Alura", desc: "Ferramenta para concluir o Alura" },
  { title: "Expansão Noturno", desc: "Ferramenta para concluir o Expansão" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 font-sans">
      {/* Título principal */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">HideXS</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Scripts úteis para facilitar suas tarefas escolares de forma automática
        </p>
      </section>

      {/* Grid de cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <Card
            key={i}
            className="bg-[#111111] border border-neutral-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-white">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-6">{tool.desc}</p>
              <Button
                variant="ghost"
                className="w-full border border-neutral-700 hover:border-white hover:bg-white/10 transition-colors duration-200 rounded-xl"
              >
                Abrir
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Rodapé */}
      <footer className="mt-24 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} HideXS — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}