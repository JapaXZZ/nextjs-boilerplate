import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen px-6 py-12 sm:px-10 sm:py-16 bg-neutral-950 text-neutral-100">
      <main className="row-start-2 flex flex-col items-center sm:items-start max-w-3xl mx-auto gap-12">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="space-y-4 text-center sm:text-left">
          <p className="text-lg text-neutral-300 tracking-tight">
            Bem-vindo ao <span className="font-semibold text-white">Next.js</span> com estilo aprimorado.
          </p>
          <ol className="font-mono list-decimal list-inside text-sm leading-relaxed space-y-1">
            <li>
              Edite o arquivo{" "}
              <code className="bg-white/5 px-1 py-0.5 rounded font-semibold">
                app/page.tsx
              </code>{" "}
              para começar.
            </li>
            <li>
              As alterações são aplicadas automaticamente ao salvar.
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 h-12 rounded-full font-medium text-sm sm:text-base bg-white text-black transition hover:bg-neutral-200"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 h-12 rounded-full font-medium text-sm sm:text-base border border-white/20 hover:bg-white/10 transition"
          >
            Read the docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap justify-center gap-6 mt-12 text-sm text-neutral-400">
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Image src="/file.svg" alt="File" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Image src="/window.svg" alt="Templates" width={16} height={16} />
          Templates
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Image src="/globe.svg" alt="Next.js" width={16} height={16} />
          nextjs.org →
        </a>
      </footer>
    </div>
  );
}