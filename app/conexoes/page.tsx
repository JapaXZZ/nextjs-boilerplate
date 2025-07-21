"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

interface WifiNetwork {
  id: string;
  name: string;
  password: string;
  strength: "weak" | "medium" | "strong";
  isSecure: boolean;
}

export default function Conexoes() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const wifiNetworks: WifiNetwork[] = [
    {
      id: "1",
      name: "SEDUC-MAQ",
      password: "E#F*Z9YI$L7H00LN2cnykZr!z",
      strength: "strong",
      isSecure: true,
    },
    {
      id: "2",
      name: "Seduc_Prov_Equipamentos",
      password: "Prov_$educ",
      strength: "strong",
      isSecure: true,
    },
  ];

  const copyToClipboard = async (
    text: string,
    networkName: string,
    id: string
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);

      toast(`✨ Senha da rede "${networkName}" foi copiada com sucesso!`);

      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast("❌ Não foi possível copiar a senha. Tente novamente.");
    }
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "strong":
        return "text-emerald-400";
      case "medium":
        return "text-yellow-400";
      case "weak":
        return "text-red-400";
      default:
        return "text-slate-400";
    }
  };

  const getStrengthBars = (strength: string) => {
    const bars = [];
    const levels = strength === "strong" ? 3 : strength === "medium" ? 2 : 1;

    for (let i = 0; i < 3; i++) {
      bars.push(
        <div
          key={i}
          className={cn(
            "w-2 h-3 rounded-full transition-all duration-300",
            i < levels
              ? getStrengthColor(strength).replace("text-", "bg-")
              : "bg-slate-700"
          )}
        />
      );
    }
    return bars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full"
          >
            <span className="text-blue-400 text-xl">📡</span>
            <span className="text-slate-300 font-medium">Conexões Wi-Fi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            Redes Disponíveis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Acesse as redes Wi-Fi SEDUC com senhas seguras e conexão estável
          </motion.p>
        </motion.div>

        {/* WiFi Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {wifiNetworks.map((network, index) => (
            <motion.div
              key={network.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between overflow-x-auto gap-3">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {network.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {/* Signal Strength */}
                      <div className="flex items-center gap-1">
                        {getStrengthBars(network.strength)}
                      </div>
                      {network.isSecure && (
                        <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                          <span className="text-emerald-400 text-sm">🔒</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-sm font-medium capitalize",
                      getStrengthColor(network.strength)
                    )}
                  >
                    Sinal{" "}
                    {network.strength === "strong"
                      ? "Forte"
                      : network.strength === "medium"
                      ? "Médio"
                      : "Fraco"}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Password Display */}
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                    <p className="text-sm text-slate-400 mb-2">Senha:</p>
                    <div className="flex items-center justify-between overflow-x-auto gap-3">
                     <code className="text-lg font-mono text-emerald-400 bg-slate-800/50 px-3 py-2 rounded-lg break-all max-w-[calc(100%-100px)] sm:max-w-full">

            {network.password}
                      </code>
                     <Button
  onClick={() =>
    copyToClipboard(network.password, network.name, network.id)
  }
  variant="outline"
  size="sm"
  className={cn(
    "min-w-[80px] shrink-0 transition-all duration-300",
    copiedId === network.id
      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      : "hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30"
  )}
>
                        {copiedId === network.id ? (
                          <span className="flex items-center gap-2">
                            ✓ <span className="hidden sm:inline">Copiado</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            📋 <span className="hidden sm:inline">Copiar</span>
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Network Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">5G</p>
                      <p className="text-xs text-slate-500">Frequência</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">WPA3</p>
                      <p className="text-xs text-slate-500">Segurança</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-400">∞</p>
                      <p className="text-xs text-slate-500">Dados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <span className="text-2xl">💡</span>
                Dicas de Conexão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <p className="text-slate-300">
                  <strong className="text-white">SEDUC-MAQ:</strong> Ideal para o cotidiano na escola
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <p className="text-slate-300">
                  <strong className="text-white">Seduc_Prov_Equipamentos:</strong> Use para atividades que exigem maior velocidade 
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <p className="text-slate-300">
                  <strong className="text-white">Segurança:</strong> Todas as redes utilizam criptografia WPA3
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}