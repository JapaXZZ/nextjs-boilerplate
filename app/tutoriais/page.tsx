"use client";

import { ArrowLeft, Smartphone, Monitor, Apple, Play, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Tutoriais = () => {
  const router = useRouter();

  const deviceSections = [
    {
      id: "celular",
      icon: Smartphone,
      label: "Celular (Android)",
      description: "Tutoriais para dispositivos móveis Android",
      scripts: ["Speak", "Khan", "Matific"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "computador",
      icon: Monitor,
      label: "Computador (Windows/Mac/Linux)",
      description: "Tutoriais para desktops e notebooks",
      scripts: ["Speak", "Khan", "Matific", "Alura", "Expansão Noturno", "Khanware", "Tarefa SP"],
      color: "from-green-500 to-green-600"
    },
    {
      id: "ios",
      icon: Apple,
      label: "iOS (iPhone/iPad)",
      description: "Tutoriais para dispositivos Apple",
      scripts: ["Speak", "Khan"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const scriptInfo = {
    Speak: {
      title: "Speak",
      description: "Sistema de síntese de voz avançado para melhor acessibilidade",
      videoId: {
        celular: "oHprujfOFvg",
        computador: "2Uq6rZL_-ms",
        ios: "ZV345iQXOOk"
      },
      duration: {
        celular: "1:41",
        computador: "2:01",
        ios: "1:40"
      }
    },
    Khan: {
      title: "Khan Academy",
      description: "Automação completa para plataforma Khan Academy",
      videoId: {
        celular: "-TXGbjiX0Do",
        computador: "HX8fZe0U9CA",
        ios: "8tltf0gFQ-k"
      },
      duration: {
        celular: "3:04",
        computador: "3:22",
        ios: "2:00"
      }
    },
    Matific: {
      title: "Matific",
      description: "Assistente inteligente para plataforma Matific",
      videoId: {
        celular: "wQc4KsTsH1Q",
        computador: "U2oUFHb7pGQ"
      },
      duration: {
        celular: "2:40",
        computador: "2:50"
      }
    },
    Alura: {
      title: "Alura",
      description: "Automação simples para uso educacional da plataforma Alura",
      videoId: {
        computador: "0_yUWt5avC0"
      },
      duration: {
        computador: "1:18"
      }
    },
    "Expansão Noturno": {
      title: "Expansão Noturno",
      description: "Expansão automática e personalizada do conteúdo noturno",
      videoId: {
        computador: "-hA9e97sarM"
      },
      duration: {
        computador: "1:16"
      }
    },
    Khanware: {
      title: "Khanware",
      description: "Automatizador leve para interações rápidas com a Khan Academy",
      videoId: {
        computador: "YFkTsDC483U"
      },
      duration: {
        computador: "1:50"
      }
    },
    "Tarefa SP": {
      title: "Tarefa SP",
      description: "Sistema de otimização para a plataforma Tarefa SP",
      videoId: {
        computador: "gq5DV7NvCP8"
      },
      duration: {
        computador: "1:20"
      }
    }
  };

  function openEmail() {
    window.open("mailto:darkzsuporte@gmail.com?subject=Suporte HideXS", "_blank");
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-x-hidden font-sans selection:bg-purple-700 selection:text-white">
      <header className="sticky top-0 z-50 bg-pro-bg-secondary/95 backdrop-blur-xl border-b border-pro-border-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="text-pro-text-secondary hover:text-pro-text-primary hover:bg-pro-bg-tertiary transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="text-sm text-pro-text-muted">
              Todos os Tutoriais
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-pro-text-primary mb-6 tracking-tight">
            Central de Tutoriais
          </h1>
          <p className="text-xl text-pro-text-secondary max-w-2xl mx-auto leading-relaxed">
            Todos os guias em um só lugar. Encontre o tutorial perfeito para sua plataforma.
          </p>
        </div>

        <div className="space-y-16">
          {deviceSections.map((device) => {
            const DeviceIcon = device.icon;

            return (
              <section key={device.id} className="animate-fade-in">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${device.color} flex items-center justify-center mr-4`}>
                    <DeviceIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-pro-text-primary">
                      {device.label}
                    </h2>
                    <p className="text-pro-text-muted text-sm">
                      {device.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {device.scripts.map((script) => {
                    const info = scriptInfo[script as keyof typeof scriptInfo];

                    return (
                      <Card
                        key={`${device.id}-${script}`}
                        className="bg-card-gradient border border-pro-border-primary hover:border-pro-accent-primary/50 transition-all duration-300 overflow-hidden group"
                      >
                        <div className="lg:flex">
                          <div className="lg:w-2/5 relative">
                            <div className="aspect-video bg-pro-bg-primary relative overflow-hidden rounded-2xl">
                              <iframe
                                src={`https://www.youtube.com/embed/${info.videoId[device.id as keyof typeof info.videoId]}?modestbranding=1&rel=0`}
                                title={`Tutorial ${info.title} - ${device.label}`}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>

                          <div className="lg:w-3/5 p-6 flex flex-col justify-center">
                            <div className="mb-4">
                              <div className="flex items-center mb-2">
                                <h3 className="text-xl font-bold text-pro-text-primary">
                                  {info.title}
                                </h3>
                                <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${device.color} text-white`}>
                                  {device.label.split(" ")[0]}
                                </span>
                              </div>
                              <p className="text-pro-text-secondary mb-4 text-sm leading-relaxed">
                                {info.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-pro-text-muted text-sm">
                                <Play className="h-4 w-4 mr-2" />
                                {info.duration[device.id as keyof typeof info.duration]}
                              </div>

                              <div className="flex items-center text-pro-accent-primary text-sm font-medium">
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Completo
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="text-center mt-16 py-12 border-t border-pro-border-primary">
          <h3 className="text-xl font-semibold text-pro-text-primary mb-2">
            Precisa de Ajuda?
          </h3>
          <p className="text-pro-text-muted mb-6">
            Entre em contato conosco se tiver dúvidas sobre algum tutorial
          </p>
          <button
            onClick={openEmail}
            className="inline-block px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-semibold transition-colors duration-300 shadow-md shadow-red-600/40"
            aria-label="Enviar email para suporte"
          >
            Contatar Suporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutoriais;
