
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-neutral-950 px-4 py-16 text-neutral-100">
      <main className="text-center max-w-2xl w-full space-y-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          CMSP Hacks
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Ferramentas úteis e recursos para alunos da rede estadual de São Paulo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <a
            href="https://classroom.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
          >
            Acessar Google Sala de Aula
          </a>
          <a
            href="https://sed.educacao.sp.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition text-sm font-medium"
          >
            Entrar no SED
          </a>
        </div>
      </main>

      <footer className="mt-16 text-sm text-neutral-500 flex flex-wrap justify-center gap-6">
        <a
          href="https://cmsphacks.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Feito por alunos para alunos
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}