"use client";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800 shadow-lg">
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <h1 className="text-white text-2xl font-extrabold tracking-wide cursor-pointer select-none">
            HideXS
          </h1>
          <ul className="hidden sm:flex space-x-8 text-gray-300 font-medium text-sm">
            <li>
              <a href="#home" className="hover:text-white transition duration-200">
                Início
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition duration-200">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition duration-200">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="home"
        className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex flex-col items-center justify-center px-6 sm:px-10 text-center text-white pt-24"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold max-w-4xl leading-tight tracking-tight">
          HideXS — Privacidade e Estilo em um só lugar
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Uma experiência digital moderna, segura e visualmente impactante. O HideXS é onde o design encontra a funcionalidade.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#features"
            className="rounded-full bg-white text-black px-8 py-3 font-semibold text-lg hover:bg-gray-300 transition duration-300 shadow-lg"
          >
            Comece Agora
          </a>
          <a
            href="#features"
            className="rounded-full border border-white px-8 py-3 font-semibold text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Ver Funcionalidades
          </a>
        </div>
      </main>

      <section
        id="features"
        className="max-w-6xl mx-auto py-24 px-6 sm:px-10 text-center"
      >
        <h3 className="text-4xl font-bold mb-12 text-white">Funcionalidades</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:scale-105 transition duration-300 shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Design Minimalista</h4>
            <p>
              Interface escura, moderna e confortável aos olhos, ideal para uso prolongado.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:scale-105 transition duration-300 shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Responsivo</h4>
            <p>
              O HideXS se adapta perfeitamente a qualquer tela: desktop, tablet ou smartphone.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:scale-105 transition duration-300 shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Alta Performance</h4>
            <p>
              Código limpo e otimizado para máxima velocidade e performance.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-neutral-800 py-20 px-6 sm:px-10 text-center max-w-4xl mx-auto rounded-3xl mx-6 sm:mx-auto mb-24 shadow-lg border border-white/10"
      >
        <h3 className="text-4xl font-bold mb-6 text-white">Sobre o HideXS</h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          O HideXS é mais do que um site — é uma experiência. Desenvolvido com foco em estética, acessibilidade e desempenho, ele representa uma nova era de interfaces elegantes e funcionais.
        </p>
      </section>

      <footer className="w-full bg-neutral-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HideXS. Todos os direitos reservados.
      </footer>
    </>
  );
}