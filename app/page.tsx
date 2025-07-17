"use client";

import Image from "next/image"; import { useState } from "react";

export default function Home() { const [email, setEmail] = useState("");

return ( <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased px-6 py-8"> <header className="max-w-6xl mx-auto py-6 flex justify-between items-center"> <h1 className="text-3xl sm:text-4xl font-bold text-white">HideXS</h1> <nav className="space-x-4 text-sm sm:text-base"> <a href="#about" className="hover:text-white/80 transition">Sobre</a> <a href="#scripts" className="hover:text-white/80 transition">Scripts</a> <a href="#contact" className="hover:text-white/80 transition">Contato</a> </nav> </header>

<main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 py-16">
    <section className="flex flex-col justify-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Scripts personalizados</h2>
      <p className="text-neutral-300 text-lg leading-relaxed mb-6">
        Automatize, simplifique e transforme tarefas repetitivas em soluções rápidas com os scripts da HideXS.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition">
          Entrar em contato
        </button>
      </form>
    </section>

    <section>
      <Image
        src="/code-dark.svg"
        alt="Code Illustration"
        width={600}
        height={400}
        className="w-full rounded-2xl border border-white/10 shadow-xl"
      />
    </section>
  </main>

  <section id="scripts" className="max-w-6xl mx-auto py-20">
    <h3 className="text-3xl font-bold mb-8">Nossos Scripts</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-2xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 shadow-md hover:shadow-lg transition"
        >
          <h4 className="text-xl font-semibold mb-2">Script {i}</h4>
          <p className="text-neutral-400 text-sm">
            Esse script realiza uma função útil e pode ser customizado para suas necessidades.
          </p>
        </div>
      ))}
    </div>
  </section>

  <section id="about" className="max-w-4xl mx-auto py-20 text-center">
    <h3 className="text-3xl font-bold mb-4">Sobre a HideXS</h3>
    <p className="text-neutral-400 max-w-2xl mx-auto">
      A HideXS foi criada com o objetivo de oferecer soluções simples, seguras e elegantes através de scripts e automações. Seja você um desenvolvedor, gestor ou curioso, temos algo para facilitar sua rotina.
    </p>
  </section>

  <section id="contact" className="max-w-3xl mx-auto py-20 text-center">
    <h3 className="text-3xl font-bold mb-4">Entre em contato</h3>
    <p className="text-neutral-400 mb-6">
      Tem dúvidas ou quer um script personalizado? Fale com a gente.
    </p>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <textarea
        placeholder="Sua mensagem"
        rows={4}
        className="px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition">
        Enviar mensagem
      </button>
    </form>
  </section>

  <footer className="text-sm text-neutral-500 text-center py-10 border-t border-white/10">
    © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
  </footer>
</div>

); }

