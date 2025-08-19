"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoginPage(): JSX.Element {
  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedRa = localStorage.getItem("ra");
    const savedPassword = localStorage.getItem("password");
    if (savedRa && savedPassword) {
      setRa(savedRa);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (remember) {
      localStorage.setItem("ra", ra);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("ra");
      localStorage.removeItem("password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-700 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-3xl shadow-2xl p-10 relative overflow-hidden border border-slate-800"
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent text-center select-none drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]"
        >
          TaskSP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base text-slate-400 mb-8 text-center"
        >
          Faça login para continuar
        </motion.p>

        <motion.form
          className="space-y-6"
          aria-label="Formulário de login"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="ra"
              className="block text-sm font-medium text-slate-300"
            >
              RA
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#ef4444" }}
              transition={{ duration: 0.2 }}
              id="ra"
              type="text"
              value={ra}
              onChange={(e) => setRa(e.target.value)}
              required
              className="mt-2 block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner placeholder-slate-500"
              placeholder="Digite seu RA"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300"
            >
              Senha
            </label>
            <div className="relative mt-2">
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#ef4444" }}
                transition={{ duration: 0.2 }}
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm pr-12 text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner placeholder-slate-500"
                placeholder="Senha"
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-red-500 transition"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </motion.button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-slate-400">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-slate-600 bg-slate-900 text-red-600 focus:ring-red-500"
              />
              Lembrar-me
            </label>
            <a
              href="https://sed.educacao.sp.gov.br/"
              className="text-red-500 hover:underline"
            >
              Esqueci a senha
            </a>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full rounded-xl py-3 text-sm font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Acessar</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}