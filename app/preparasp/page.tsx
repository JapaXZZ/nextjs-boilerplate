"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const TaskApp = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [scriptStatus, setScriptStatus] = useState<"online" | "offline">("online");
  const [lastUpdate] = useState("17/08/2025");
  const [url] = useState("https://crimsonstrauss.xyz/preparasp");
  const [tasksCompleted] = useState(127);
  const [executionTime] = useState("2.3s");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copiado!", {
        title: "Copiado!",
        description: "Texto copiado para a área de transferência",
        type: "success",
      });
    } catch {
      toast("Erro", {
        title: "Erro",
        description: "Não foi possível copiar o texto",
        type: "error",
      });
    }
  };

  const openUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 overflow-x-hidden flex items-start justify-center">
      <div className="w-full max-w-2xl">

        {/* Toolbar com botão de voltar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-green-800 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => router.push('/')}
            aria-label="Voltar"
            className="flex items-center gap-2 rounded-2xl border border-[#2C313A] bg-[#1B1D22] px-4 py-2 text-white hover:bg-[#2C313A] transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
        </div>

        <div className="h-20" /> {/* Espaço abaixo da toolbar */}

        <div className="space-y-6">
          {/* Título */}
          <div className="text-center space-y-4 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-800 to-green-900 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent select-none">
                  Prepara SP
                </h1>
                <div className="h-1 w-20 bg-green-700 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>

          {/* Subtítulo centralizado */}
          <p className="text-center text-muted-foreground text-lg font-medium">
            Automatizar as tarefas da plataforma Prepara SP
          </p>

          {/* Card URL */}
          <Card
            style={{ backgroundColor: "#1B1D22", borderColor: "#2C313A" }}
            className="backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-green-900/50 border"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                URL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-md border border-green-700">
                <code className="flex-1 text-green-300 text-sm font-mono break-all">
                  {url}
                </code>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(url)}
                  className="flex-1 border border-green-700"
                >
                  Copiar
                </Button>
                <Button variant="glow" size="sm" onClick={openUrl} className="flex-1">
                  Abrir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card Informações */}
          <Card
            style={{ backgroundColor: "#1B1D22", borderColor: "#2C313A" }}
            className="backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-green-900/50 border"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-white flex items-center gap-2">
                Informações do Script
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-md border border-green-700">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    scriptStatus === "offline" ? "bg-red-700/20 text-red-400" : "bg-green-700/20 text-green-400"
                  }`}>
                    {scriptStatus === "offline" ? <>X</> : <>✓</>}
                  </div>
                  <div>
                    <p className="font-medium text-white capitalize">{scriptStatus}</p>
                    <p className="text-xs text-green-300">STATUS</p>
                  </div>
                </div>
                <Badge variant={scriptStatus === "offline" ? "destructive" : "default"} className="px-3 py-1">
                  {scriptStatus}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-md border border-green-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-700/20 text-green-400 flex items-center justify-center">🕒</div>
                  <div>
                    <p className="font-medium text-white">{lastUpdate}</p>
                    <p className="text-xs text-green-300">ATUALIZAÇÃO</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
