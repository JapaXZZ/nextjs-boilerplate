"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";

interface Script {
id: number;
title: string;
description: string;
online: boolean;
url: string;
category: string;
}

const initialScripts: Script[] = [
{
id: 1,
title: "Tarefa SP",
description: "Ferramenta avançada para automação e conclusão de tarefas",
online: true,
url: "/tarefa",
category: "Web",
},
{
id: 2,
title: "Redação SP",
description: "Sistema inteligente para geração de redações",
online: true,
url: "/redacao",
category: "Web",
},
{
id: 3,
title: "Khanware v3.1.1",
description: "Script completo para automação da plataforma Khan Academy",
online: true,
url: "/khan",
category: "BookMark",
},
{
id: 4,
title: "Speak",
description: "Ferramenta de automação para a plataforma Speak",
online: true,
url: "/speak",
category: "BookMark",
},
{
id: 5,
title: "Leia SP",
description: "Sistema automatizado para concluir questões dos livros",
online: true,
url: "/leiasp",
category: "BookMark",
},
{
id: 6,
title: "Matific",
description: "Automação avançada para exercícios matemáticos",
online: true,
url: "/matific",
category: "BookMark",
},
{
id: 7,
title: "Alura",
description: "Ferramenta para concluir a plataforma Alura",
online: true,
url: "/alura",
category: "Web",
},
{
id: 8,
title: "Expansão Noturno",
description: "Sistema para automatização das tarefas da plataforma Expansão Noturno",
online: true,
url: "/expansao",
category: "Web/BookMark",
},
];

const Index = () => {
const [scripts] = useState(initialScripts);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
const [searchTerm, setSearchTerm] = useState("");
const router = useRouter();

// Filtragem simples para busca
const filteredScripts = useMemo(() => {
if (!searchTerm.trim()) return scripts;
return scripts.filter(
(s) =>
s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
s.category.toLowerCase().includes(searchTerm.toLowerCase())
);
}, [searchTerm, scripts]);

const stats = useMemo(() => {
const total = scripts.length;
const online = scripts.filter((s) => s.online).length;
const offline = total - online;
return { total, online, offline };
}, [scripts]);

function handleShare(script: Script) {
if (navigator.share) {
navigator
.share({
title: script.title,
text: script.description,
url: window.location.href,
})
.catch(() => alert("Não foi possível compartilhar."));
} else {
alert("Seu navegador não suporta a função de compartilhar.");
}
}

function openEmail() {
window.open("mailto:darkzsuporte@gmail.com?subject=Suporte HideXS", "_blank");
}

// Para dar foco no input ao abrir (aumentar acessibilidade)
const searchInputRef = useRef<HTMLInputElement>(null);
useEffect(() => {
searchInputRef.current?.focus();
}, []);

return (
<div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-x-hidden font-sans selection:bg-purple-700 selection:text-white">
{/* Fundo grid e radial */}
<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
<div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

{/* Cabeçalho fixo */}  
  <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/60 border-b border-purple-800/40 max-w-7xl mx-auto flex justify-between items-center px-6 py-3">  
    {/* Logo */}  
    <Link href="/" aria-label="Página inicial TaskSP" className="flex items-center gap-2 select-none">  
      <svg  
        xmlns="http://www.w3.org/2000/svg"  
        className="h-8 w-8 text-purple-500"  
        fill="none"  
        viewBox="0 0 24 24"  
        stroke="currentColor"  
        strokeWidth={2}  
        aria-hidden="true"  
      >  
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7 12l2-2 4 4" />  
      </svg>  
      <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 select-none">  
        TaskSP  
      </span>  
    </Link>  

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-violet-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-[#1a112b] text-white border-none shadow-lg"
      >
        <SheetHeader>
          <SheetTitle className="text-violet-300 text-lg">Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-violet-400 hover:text-white"
            onClick={() => {
              setOpen(false);
              router.push("/login");
            }}
          >
            <User className="mr-2 h-5 w-5" />
            Conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
   
  {/* Navegação desktop */}
  <nav className="hidden md:flex gap-6 font-semibold text-purple-300">
    <button
      onClick={() => router.push("/tutoriais")}
      className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 transition-colors duration-300 shadow-md shadow-purple-600/40"
      aria-label="Ir para Tutoriais"
    >
      Tutoriais
    </button>
    <Link
      href="/conexoes"
      className="px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-700 hover:text-white transition-colors duration-300"
      aria-label="Ver conexões Wi-Fi"
    >
      Conexões Wi-Fi
    </Link>
    <a
      href="mailto:darkzsuporte@gmail.com?subject=Suporte TaskSP"
      className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors duration-300 shadow-md shadow-purple-500/40"
      aria-label="Contatar suporte via email"
    >
      Contato
    </a>
  </nav>

  <Link
    href="https://saladofuturo.educacao.sp.gov.br/login-alunos"
    className="px-4 py-2 rounded-lg border border-purple-500 hover:bg-purple-700 hover:text-white transition-colors duration-300"
    aria-label="Abrir Sala do Futuro"
  >
    Sala do Futuro
  </Link>


    {/* Navegação mobile - botão hamburguer */}  
    <MobileMenu router={router} />  
  </header>  

  {/* Espaço para o cabeçalho fixo */}  
  <div className="pt-16" />  

  {/* Cabeçalho principal */}  
  <motion.header  
    initial={{ opacity: 0, y: -50 }}  
    animate={{ opacity: 1, y: 0 }}  
    transition={{ duration: 0.3, ease: "easeOut" }}  
    className="relative z-10 pt-8 pb-12 px-4 sm:px-6"  
  >  
    <div className="max-w-7xl mx-auto text-center px-4">  
      <motion.h1  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ delay: 0.5, duration: 0.3 }}  
        className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent select-none"  
      >  
        TaskSP  
      </motion.h1>  

      <motion.p  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ delay: 0.7, duration: 0.3 }}  
        className="text-lg md:text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed mb-10"  
      >  
        Um conjunto de recursos avançados para aprimorar sua vivência no Sala do Futuro.  
      </motion.p>  

     
 {/* Notificações */}
 <Card className="max-w-md mx-auto bg-[#111827] p-6 mb-8 rounded-2xl hover-glow animate-slide-up border-0 shadow-none">
  <div className="flex items-start space-x-4">
    <div className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
      <Bell className="w-5 h-5 text-yellow-400" />
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-yellow-400 mb-2">Notificações</h3>
      <p className="text-sm text-muted-foreground">
        Um novo botão de arrastar e soltar para computadores foi adicionado.
      </p>
    </div>
  </div>
</Card>


      {/* Estatísticas !!!!!!!!!!!!!!!! */}  
      <div className="max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-2xl shadow-lg shadow-black/30 p-6 select-none" role="region" aria-label="Estatísticas dos scripts">  
        <h3 className="text-lg font-semibold text-white mb-1">Estatísticas</h3>  
        <p className="text-xs text-slate-400 mb-4">Última atualização: 01/08/2025</p>  
        <div className="h-px bg-slate-700 mb-4" />  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <div  
            className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3"  
            aria-label={`Total de scripts: ${stats.total}`}  
          >  
            <span className="text-white text-sm">Total</span>  
            <span className="text-2xl font-bold text-purple-400 font-mono">{stats.total}</span>  
          </div>  
          <div  
            className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3"  
            aria-label={`Scripts online: ${stats.online}`}  
          >  
            <span className="text-white text-sm">Online</span>  
            <span className="text-2xl font-bold text-green-400 font-mono">{stats.online}</span>  
          </div>  
          <div  
            className="flex flex-col items-center bg-slate-800/60 rounded-lg p-3"  
            aria-label={`Scripts offline: ${stats.offline}`}  
          >  
            <span className="text-white text-sm">Offline</span>  
            <span className="text-2xl font-bold text-red-400 font-mono">{stats.offline}</span>  
          </div>  
        </div>  
      </div>  
    </div>  
  </motion.header>  

  {/* Main content */}  
  <motion.main initial="hidden" animate="visible" className="relative z-10 px-4 pb-20 max-w-7xl mx-auto">  
    {/* Scripts disponíveis */}  
    <motion.div  
      initial={{ opacity: 0, x: -20 }}  
      animate={{ opacity: 1, x: 0 }}  
      transition={{ delay: 0.9, duration: 0.6 }}  
      className="flex items-center gap-3 mb-12"  
    >  
      <span className="text-purple-400 text-xl" aria-hidden="true">  
        💻  
      </span>  
      <h2 className="text-3xl font-bold text-purple-400 select-none">Scripts Disponíveis</h2>  
      <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />  
    </motion.div>  

    {/* Grid de cards filtrados */}  
    {filteredScripts.length === 0 ? (  
      <p className="text-center text-purple-400 mb-10 select-none">  
        Nenhum script encontrado para a busca: <strong>{searchTerm}</strong>  
      </p>  
    ) : (  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">  
        {filteredScripts.map((script) => {  
          const ref = useRef(null);  
          const isInView = useInView(ref, { once: true });  

          return (  
            <motion.div  
              key={script.id}  
              ref={ref}  
              initial={{ opacity: 0, y: 30 }}  
              animate={isInView ? { opacity: 1, y: 0 } : {}}  
              transition={{ duration: 0.6, ease: "easeOut" }}  
              whileHover={{  
                y: -8,  
                transition: { type: "spring", stiffness: 300, damping: 20 },  
              }}  
              onHoverStart={() => setHoveredCard(script.id)}  
              onHoverEnd={() => setHoveredCard(null)}  
              className="group relative"  
              aria-label={`${script.title} - ${script.online ? "Online" : "Offline"}`}  
            >  
              <div  
                className={cn(  
                  "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",  
                  hoveredCard === script.id && "opacity-40"  
                )}  
                aria-hidden="true"  
              />  
              <div  
                style={{ backgroundColor: "#111827", borderColor: "#2C313A" }}  
                className="backdrop-blur-md rounded-3xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50 border"  
              >  
                <div className="flex items-start justify-between mb-4">  
                  <div className="flex-1">  
                    <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">  
                      {script.title}  
                    </h3>  
                    <span className="inline-block mt-1 px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">  
                      {script.category}  
                    </span>  
                  </div>  
                  <div  
                    className={cn(  
                      "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold select-none",  
                      script.online  
                        ? "bg-purple-500/30 text-purple-400 border border-purple-500/40"  
                        : "bg-red-500/30 text-red-400 border border-red-500/40"  
                    )}  
                  >  
                    <div  
                      className={cn(  
                        "w-2 h-2 rounded-full",  
                        script.online ? "bg-purple-400" : "bg-red-400"  
                      )}  
                    />  
                    {script.online ? "Online" : "Offline"}  
                  </div>  
                </div>  
                <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1 select-text">  
                  {script.description}  
                </p>  
                <div className="flex gap-3">  
                  <motion.a  
                    href={script.url}  
                    target="_blank"  
                    rel="noopener noreferrer"  
                    whileHover={{ scale: 1.03 }}  
                    whileTap={{ scale: 0.97 }}  
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/40"  
                    aria-label={`Acessar ${script.title}`}  
                  >   
                    Acessar  
                  </motion.a>  
                  <motion.button  
                    onClick={() => handleShare(script)}  
                    whileHover={{ scale: 1.03 }}  
                    whileTap={{ scale: 0.97 }}  
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white rounded-xl transition-all duration-300 shadow-md shadow-black/40"  
                    aria-label={`Compartilhar ${script.title}`}  
                  >  
                    <span>📤</span>  
                  </motion.button>  
                </div>  
              </div>  
            </motion.div>  
          );  
        })}  
      </div>  
    )}  

    {/* Título Apostilas */}  
  <motion.div  
        initial={{ opacity: 0, x: -20 }}  
        animate={{ opacity: 1, x: 0 }}  
        transition={{ delay: 0.3, duration: 0.6 }}  
        className="col-span-full flex items-center gap-3 mt-12 mb-6"  
      >  
        <span className="text-purple-400 text-xl" aria-hidden="true">📘</span>  
        <h2 className="text-2xl font-bold text-purple-400 select-none">Apostilas Disponíveis</h2>  
        <div className="flex-1 h-px bg-gradient-to-r from-purple-700 to-transparent" />  
      </motion.div>  

      {/* Card Apostilas com animação ao rolar */}  
      {(() => {  
        const ref = useRef(null);  
        const isInView = useInView(ref, { once: true });  

        return (  
          <motion.div  
            ref={ref}  
            initial={{ opacity: 0, y: 30 }}  
            animate={isInView ? { opacity: 1, y: 0 } : {}}  
            transition={{ duration: 0.6, ease: "easeOut" }}  
            whileHover={{  
              y: -8,  
              transition: { type: "spring", stiffness: 300, damping: 20 },  
            }}  
            className="group relative max-w-md mx-auto"  
          >  
            <div  
              className={cn(  
                "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",  
                hoveredCard === -1 && "opacity-40"  
              )}  
              aria-hidden="true"  
            />  
            <div  
              onMouseEnter={() => setHoveredCard(-1)}  
              onMouseLeave={() => setHoveredCard(null)}  
              style={{ backgroundColor: "#111827", borderColor: "#2C313A" }}  
              className="backdrop-blur-md rounded-3xl p-6 h-full flex flex-col shadow-lg shadow-purple-900/50 border"  
            >  
              <div className="flex items-start justify-between mb-4">  
                <div className="flex-1">  
                  <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300 select-none">  
                    Apostilas  
                  </h3>  
                  <span className="inline-block mt-1 px-3 py-1 bg-slate-800 text-purple-300 text-xs font-medium rounded-full select-none">  
                    Material  
                  </span>  
                </div>  
                <div  
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold select-none bg-purple-500/30 text-purple-400 border border-purple-500/40"  
                  aria-label="Status online"  
                >  
                  <div className="w-2 h-2 rounded-full bg-purple-400" />  
                  Online  
                </div>  
              </div>  
              <p className="text-purple-300 text-sm leading-relaxed mb-6 flex-1 select-text">  
                Material completo com gabarito de todas as séries.  
              </p>  
              <div className="flex gap-3">  
                <motion.a  
                  href="/apostilas"  
                  target="_blank"  
                  rel="noopener noreferrer"  
                  whileHover={{ scale: 1.03 }}  
                  whileTap={{ scale: 0.97 }}  
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/40"  
                  aria-label="Acessar apostilas"  
                >   
                  Acessar  
                </motion.a>  
              </div>  
            </div>  
          </motion.div>  
        );  
      })()}  
    </motion.main>  

  {/* Aviso Download*/} 
<div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10">
  <Card className="bg-[#111827] rounded-3xl p-10 w-full max-w-md text-center space-y-8 animate-scale-in hover:animate-pulse border-0 shadow-2xl shadow-purple-500/20">
    {/* Icon with purple gradient */}
    <div className="flex justify-center">
      <div className="p-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-lg shadow-purple-500/30 animate-fade-in">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-3xl font-bold text-purple-400">
        🚀 Darkz v1.4.0
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg">
       Melhor aplicativo para fazer suas tarefas!
      </p>
    </div>

    {/* Status */}
    <div className="flex justify-center items-center gap-2 text-sm text-gray-400 animate-fade-in">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      Versão mais recente • Gratuito
    </div>

    {/* Download Button */}
    <div className="pt-4">
  <a
    href="/Darkz_1.4.apk"
    download
    className="inline-block w-full"
  >
    <Button className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 animate-fade-in group">
      <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
      Baixar agora
    </Button>
  </a>
</div>
  </Card>
</div>

    {/* Aviso Educacional */}  
    <div className="w-full max-w-2xl mx-auto p-4">  
      <div  
        className="bg-purple-100 border-l-4 border-purple-500 text-purple-800 p-4 rounded-xl shadow mb-6"  
        role="alert"  
        aria-live="polite"  
      >  
          <p className="font-bold text-lg">⚠️ Aviso Educacional</p>  
        <p className="text-sm mt-1">  
          O <strong>TaskSP</strong> é uma ferramenta educativa desenvolvida para auxiliar os estudantes.  
          Use com responsabilidade e sempre priorize o aprendizado real. Recomendamos usar nossos scripts  
          como complemento aos seus estudos ou quando não houver tempo suficiente, não como substituto.  
        </p>  
      </div>  
    </div>  

    {/* Rodapé */}  
    <footer  
      className="relative z-10 py-12 text-center border-t border-purple-800/60 px-4 max-w-7xl mx-auto select-none"  
      aria-label="Rodapé do site"  
    >  
      <p className="text-purple-300 mb-4">  
        Desenvolvido por{" "}  
        <a  
          href="https://www.instagram.com/018_japaaa?igsh=bG4wN2FtNXJ0Z2E2"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="font-semibold text-white hover:underline"  
        >  
          JapaXZZ  
        </a>  
        .  
      </p>  
      <p className="text-purple-300 mb-4">  
        Apoio de{" "}  
        <a  
          href="https://www.instagram.com/joao.r.cs?igsh=dHplNmR0eHU1OWV3"  
          target="_blank"  
          rel="noopener noreferrer"  
          className="font-semibold text-white hover:underline"  
        >  
          @joao.r.cs  
        </a>  
        .  
      </p>  
      <p className="text-purple-300 mb-6 max-w-xl mx-auto">  
        Agradecimentos especiais a todos os colaboradores e usuários da plataforma TaskSP.  
      </p>  
      <button  
        onClick={openEmail}  
        className="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-semibold transition-colors duration-300 shadow-md shadow-purple-600/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"  
        aria-label="Enviar email para suporte"  
      >  
        Contatar Suporte  
      </button>  
    </footer>  
  </div>

);
};

export default Index;

// Componente MobileMenu para navegação móvel simples e acessível
function MobileMenu({ router }: { router: ReturnType<typeof useRouter> }) {
const [open, setOpen] = useState(false);

return (
<>
<button
className="md:hidden p-2 rounded-md text-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
aria-label="Abrir menu"
aria-expanded={open}
onClick={() => setOpen((v) => !v)}
>
<svg  
className="h-6 w-6"  
fill="none"  
stroke="currentColor"  
strokeWidth={2}  
viewBox="0 0 24 24"  
aria-hidden="true"  
>
{open ? (
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
) : (
<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
)}
</svg>
</button>

{open && (  
  <nav  
    className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-purple-700 rounded-lg shadow-lg flex flex-col z-30"  
    aria-label="Menu móvel"  
  >  
    <button  
      onClick={() => {  
        router.push("/tutoriais");  
        setOpen(false);  
      }}  
      className="px-4 py-3 text-left text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"  
    >  
      Tutoriais  
    </button>  
    <Link  
      href="/conexoes"  
      onClick={() => setOpen(false)}  
      className="px-4 py-3 text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"  
    >  
      Conexões Wi-Fi  
    </Link>  
    <a  
      href="mailto:darkzsuporte@gmail.com?subject=Suporte TaskSP"  
      onClick={() => setOpen(false)}  
      className="px-4 py-3 text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"  
    >  
      Contato  
    </a>  
    <Link  
      href="https://saladofuturo.educacao.sp.gov.br/login-alunos"  
      onClick={() => setOpen(false)}  
      className="px-4 py-3 text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"  
      aria-label="Abrir Sala do Futuro"  
    >  
      Sala do Futuro  
    </Link>  
  </nav>  
)}
</>

);
}
