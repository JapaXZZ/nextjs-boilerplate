"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage(): JSX.Element {
  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10 relative overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-12 -right-12 w-40 h-40 bg-red-400 rounded-full blur-3xl opacity-30"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-16 -left-16 w-40 h-40 bg-red-700 rounded-full blur-3xl opacity-30"
        ></motion.div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent text-center select-none"
        >
          TaskSP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-slate-500 dark:text-slate-300 mb-8 text-center"
        >
          Acesse sua conta
        </motion.p>

        <motion.form
          className="space-y-6"
          aria-label="Formulário de login"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <label
              htmlFor="ra"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              RA
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              id="ra"
              type="text"
              value={ra}
              onChange={(e) => setRa(e.target.value)}
              required
              className="mt-2 block w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
              placeholder="Digite seu RA"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Senha
            </label>
            <div className="relative mt-2">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                placeholder="Senha"
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-red-600"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </motion.button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-red-600 focus:ring-red-500"
              />
              Lembrar-me
            </label>
            <a
              href="https://sed.educacao.sp.gov.br/"
              className="text-red-600 hover:underline"
            >
              Esqueci a senha
            </a>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-xl py-3 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:opacity-90 shadow-md transition"
          >
            Acessar
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}