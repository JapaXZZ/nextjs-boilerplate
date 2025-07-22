"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const TaskApp = () => {
  const { toast } = useToast();
  const [scriptStatus, setScriptStatus] = useState<"online" | "offline">("offline");
  const [lastUpdate] = useState("21/07/2025");
  const [scriptId] = useState("4a92d3bb7e2159f674c2091d");
  const [url] = useState("https://taskitos.cupiditys.lol/");
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

  const toggleScriptStatus = () => {
    const newStatus = scriptStatus === "offline" ? "online" : "offline";
    setScriptStatus(newStatus);
    toast(`O script está agora ${newStatus}`, {
      title: `Script ${newStatus === "online" ? "Ativado" : "Desativado"}`,
      type: "info",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 overflow-x-hidden">
   
<div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-purple-800 px-4 py-3 flex items-center gap-3">
 <button
  onClick={() => window.history.back()}
  aria-label="Voltar"
  className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  <span>Voltar</span>
</button>
</div>

<div className="h-14"></div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Título */}
        <div className="text-center space-y-4 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

            <div
              style={{ backgroundColor: "#1B1D22", borderColor: "#2C313A" }}
              className="relative flex items-center justify-center gap-3 p-4 backdrop-blur-md border rounded-3xl shadow-lg shadow-purple-900/50"
            >
              <div>
                <h1 className="text-2xl font-bold text-white select-none">
                  Tarefa SP
                </h1>
                <div className="h-1 w-20 bg-purple-700 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtítulo centralizado */}
        <p className="text-center text-muted-foreground text-lg font-medium">
          Ferramenta para concluir suas tarefas!
        </p>

        {/* Card URL */}
        <Card
          style={{ backgroundColor: "#1B1D22", borderColor: "#2C313A" }}
          className="backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-purple-900/50 hover:border-[#2C313A] transition-all duration-300 border"
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              URL
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-md border border-purple-700">
              <code className="flex-1 text-purple-300 text-sm font-mono break-all">
                {url}
              </code>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(url)}
                className="flex-1 border border-purple-700"
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
          className="backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-purple-900/50 hover:border-[#2C313A] transition-all duration-300 border"
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-white flex items-center gap-2">
              Informações do Script
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-800 rounded-md border border-purple-700">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  scriptStatus === "offline" ? "bg-red-700/20 text-red-400" : "bg-purple-700/20 text-purple-400"
                }`}>
                  {scriptStatus === "offline" ? <>X</> : <>✓</>}
                </div>
                <div>
                  <p className="font-medium text-white capitalize">{scriptStatus}</p>
                  <p className="text-xs text-purple-300">STATUS</p>
                </div>
              </div>
              <Badge variant={scriptStatus === "offline" ? "destructive" : "default"} className="px-3 py-1">
                {scriptStatus}
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-800 rounded-md border border-purple-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-700/20 text-purple-400 flex items-center justify-center">🕒</div>
                <div>
                  <p className="font-medium text-white">{lastUpdate}</p>
                  <p className="text-xs text-purple-300">ATUALIZAÇÃO</p>
                </div>
              </div>
            </div>

            {/* Removido bloco do ID do Script */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskApp;