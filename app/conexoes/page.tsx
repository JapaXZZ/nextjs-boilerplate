"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const { toast } = useToast();

interface WifiNetwork { /* ... */ }

export default function Conexoes() {
  const router = useRouter();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const wifiNetworks: WifiNetwork[] = [ /* ... */ ];

  const copyToClipboard = async (text: string, networkName: string, id: string) => {
    /* ... */
  };

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "strong": return "text-purple-400";
      case "medium": return "text-purple-300";
      case "weak":   return "text-purple-200";
      default:       return "text-slate-400";
    }
  };

  const getStrengthBars = (strength: string) => {
    /* ... com getStrengthColor() acima ... */
  };

  return (
    <div className="min-h-screen bg-[#0a0a10] text-[#e0dfe3] overflow-x-hidden font-sans selection:bg-purple-800 selection:text-white">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20" />

      {/* Botão de Voltar */}
      <div className="relative z-10 px-4 pt-6">
        <button
          onClick={() => router.push('/')}
          aria-label="Voltar"
          className="flex items-center gap-2 rounded-2xl border border-purple-800 bg-purple-900/50 text-white hover:bg-purple-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
      </div>

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
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-700/40 rounded-full"
          >
            <span className="text-purple-400 text-xl">📡</span>
            <span className="text-purple-300 font-medium">Conexões Wi-Fi</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent"
          >
            Redes Disponíveis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-purple-300 max-w-2xl mx-auto leading-relaxed"
          >
            Acesse as redes Wi‑Fi SEDUC com senhas seguras e conexão estável
          </motion.p>
        </motion.div>

        {/* Cards */}
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
              <Card className="bg-purple-900/40 backdrop-blur-sm border-purple-700/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between overflow-x-auto gap-3">
                    <CardTitle className="text-2xl font-bold text-purple-100 group-hover:text-purple-300 transition-colors">
                      {network.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {getStrengthBars(network.strength)}
                      </div>
                      {network.isSecure && (
                        <div className="p-1.5 bg-purple-600/20 rounded-lg">
                          <span className="text-purple-300 text-sm">🔒</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className={cn("text-sm font-medium capitalize", getStrengthColor(network.strength))}>
                    Sinal {network.strength === "strong" ? "Forte" : network.strength === "medium" ? "Médio" : "Fraco"}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-900/30 rounded-xl border border-purple-700/30">
                    <p className="text-sm text-purple-300 mb-2">Senha:</p>
                    <div className="flex items-center justify-between overflow-x-auto gap-3">
                      <code className="text-lg font-mono text-purple-200 bg-purple-900/50 px-3 py-2 rounded-lg break-all max-w-[calc(100%-100px)] sm:max-w-full">
                        {network.password}
                      </code>
                      <Button
                        onClick={() => copyToClipboard(network.password, network.name, network.id)}
                        variant="outline"
                        size="sm"
                        className={cn(
                          "min-w-[80px] shrink-0 transition-all duration-300",
                          copiedId === network.id
                            ? "bg-purple-700/20 text-purple-300 border-purple-600/30"
                            : "hover:bg-purple-700/10 hover:text-purple-300 hover:border-purple-600/30"
                        )}
                      >
                        {copiedId === network.id ? (
                          <span className="flex items-center gap-2">✓ <span className="hidden sm:inline">Copiado</span></span>
                        ) : (
                          <span className="flex items-center gap-2">📋 <span className="hidden sm:inline">Copiar</span></span>
                        )}
                      </Button>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-2 text-purple-200">
                    <div className="text-center"><p className="text-2xl font-bold text-purple-300">5G</p><p className="text-xs">Frequência</p></div>
                    <div className="text-center"><p className="text-2xl font-bold text-purple-300">WPA3</p><p className="text-xs">Segurança</p></div>
                    <div className="text-center"><p className="text-2xl font-bold text-purple-300">∞</p><p className="text-xs">Dados</p></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Dicas */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="max-w-2xl mx-auto">
          <Card className="bg-purple-900/30 backdrop-blur-sm border-purple-700/50">
            {/* ... conteúdo igual, com texto roxo claro ... */}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}