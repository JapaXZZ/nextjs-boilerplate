'use client';

import Button from "./button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-12">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">HideXS</h1>
        <p className="text-lg text-neutral-400">
          Scripts úteis para facilitar suas tarefas escolares
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "Tarefa SP",
            desc: "Ferramenta para concluir as tarefas",
          },
          {
            title: "Redação SP",
            desc: "Ferramenta para concluir as redações",
          },
          {
            title: "Khanware v3.1.1",
            desc: "Ferramenta para concluir o Khan",
          },
          {
            title: "Speak",
            desc: "Ferramenta para concluir o Speak",
          },
          {
            title: "Leia SP",
            desc: "Ferramenta para concluir o Leia SP",
          },
          {
            title: "Matific",
            desc: "Ferramenta para concluir o Matific",
          },
          {
            title: "Alura",
            desc: "Ferramenta para concluir o Alura",
          },
          {
            title: "Expansão Noturno",
            desc: "Ferramenta para concluir o Expansão",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-4">{item.desc}</p>
              <Button variant="secondary" className="w-full">
                Abrir
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="mt-24 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} HideXS — Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}