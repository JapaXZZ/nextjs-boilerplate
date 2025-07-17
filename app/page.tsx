'use client';

import { Button } from "@/components/ui/button"; import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() { return ( <main className="min-h-screen bg-neutral-950 text-white px-6 py-12"> <section className="max-w-5xl mx-auto text-center mb-16"> <h1 className="text-4xl sm:text-5xl font-bold mb-4">HideXS</h1> <p className="text-lg text-neutral-400">Scripts úteis para facilitar suas tarefas da sala do futuro!</p> </section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Tarefa SP</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir as tarefas</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Redação SP</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir as redações</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Khanware v3.1.1</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Khan</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Speak</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Speak</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Leia SP</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Leia SP</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Matific</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Matific</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Alura</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Alura</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>

    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardHeader>
        <CardTitle>Expansão Noturno</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-400 mb-4">Ferramenta para concluir o Expansão</p>
        <Button variant="secondary" className="w-full">Abrir</Button>
      </CardContent>
    </Card>
  </section>

  <footer className="mt-24 text-center text-sm text-neutral-500">
    <p>© {new Date().getFullYear()} HideXS — Todos os direitos reservados.</p>
  </footer>
</main>

); }

