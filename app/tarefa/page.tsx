"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
const { toast } = useToast();

const TaskApp = () => {
  const { toast } = useToast();
  const [scriptStatus, setScriptStatus] = useState<"online" | "offline">("offline");
  const [lastUpdate] = useState("Atualização recente");
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

  const refreshScript = () => {
    toast("Script sendo atualizado", {
      title: "Atualizando...",
      type: "info",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 animate-fade-in">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
            <div className="relative flex items-center justify-center gap-3 p-6 bg-gradient-card rounded-2xl border border-border shadow-glow">
              <div className="p-3 bg-primary/20 rounded-full"></div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  TAREFAS SP
                </h1>
                <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-lg font-medium px-4">
            Ferramenta para concluir suas tarefas!
          </p>
        </div>

        <Card className="bg-gradient-card shadow-card border-border hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground flex items-center gap-2">
              URL
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-background/50 rounded-md border border-border">
              <code className="flex-1 text-primary text-sm font-mono break-all">
                {url}
              </code>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(url)} className="flex-1">
                Copiar
              </Button>
              <Button variant="glow" size="sm" onClick={openUrl} className="flex-1">
                Abrir
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground flex items-center gap-2">
              Informações do Script
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-background/30 rounded-md border border-border">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  scriptStatus === "offline" ? "bg-destructive/20 text-destructive" : "bg-success/20 text-success"
                }`}>
                  {scriptStatus === "offline" ? <>X</> : <>Zap</>}
                </div>
                <div>
                  <p className="font-medium text-foreground capitalize">{scriptStatus}</p>
                  <p className="text-xs text-muted-foreground">STATUS</p>
                </div>
              </div>
              <Badge variant={scriptStatus === "offline" ? "destructive" : "default"} className="px-3 py-1">
                {scriptStatus}
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-background/30 rounded-md border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">⏰</div>
                <div>
                  <p className="font-medium text-foreground">{lastUpdate}</p>
                  <p className="text-xs text-muted-foreground">ATUALIZAÇÃO</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={refreshScript}>
                Atualizar
              </Button>
            </div>

            <div className="p-3 bg-background/30 rounded-md border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground font-medium">ID DO SCRIPT</p>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(scriptId)}>
                  Copiar
                </Button>
              </div>
              <code className="text-xs text-muted-foreground font-mono break-all">{scriptId}</code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskApp;