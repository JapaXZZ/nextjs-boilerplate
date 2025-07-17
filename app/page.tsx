"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Por favor preencha todos os campos.");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <h1 className="text-white text-2xl font-bold tracking-tight cursor-pointer select-none">
            Darkz
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
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contato
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
          Darkz — A experiência definitiva para sua navegação digital
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Um site elegante, rápido e moderno, desenhado para entregar o melhor
          em usabilidade, design e performance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
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
              O Darkz se adapta perfeitamente a qualquer dispositivo, seja
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
        <h3 className="text-4xl font-bold mb-6 text-white">Sobre o Darkz</h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Darkz foi criado para oferecer uma plataforma elegante e funcional,
          que alia design sofisticado a uma experiência simples e intuitiva. O
          foco está na usabilidade e na estética, para que cada visita seja
          agradável e eficiente.
        </p>
      </section>

      <section
        id="contact"
        className="max-w-3xl mx-auto px-6 sm:px-10 mb-32"
      >
        <h3 className="text-4xl font-bold mb-8 text-white text-center">
          Fale conosco
        </h3>
        {sent ? (
          <div className="text-center p-6 bg-green-700 rounded-lg text-white font-semibold">
            Obrigado pela mensagem! Responderemos em breve.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Seu email"
              className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
              required
              autoComplete="email"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Sua mensagem"
              className="bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-300 transition"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </section>

      <footer className="w-full bg-neutral-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Darkz. Todos os direitos reservados.
      </footer>
    </>
  );
}