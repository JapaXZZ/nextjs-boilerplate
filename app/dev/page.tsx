"use client";

import React, { useState } from "react";

export default function LoginPage(): JSX.Element { const [ra, setRa] = useState(""); const [password, setPassword] = useState(""); const [showPassword, setShowPassword] = useState(false);

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-500 via-black-600 to-black-700 p-6"> <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10 relative overflow-hidden"> <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-400 rounded-full blur-3xl opacity-30"></div> <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-red-700 rounded-full blur-3xl opacity-30"></div>

<h1 className="text-5xl font-extrabold mb-2 text-slate-900 dark:text-red text-center">TaskSP</h1>
    <p className="text-sm text-slate-500 dark:text-slate-300 mb-8 text-center">Acesse sua conta</p>

    <form className="space-y-6" aria-label="Formulário de login">
      <div>
        <label htmlFor="ra" className="block text-sm font-medium text-slate-700 dark:text-slate-200">RA</label>
        <input
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
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Senha</label>
        <div className="relative mt-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
            placeholder=""
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-red-600"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <input type="checkbox" className="rounded border-slate-300 text-red-600 focus:ring-red-500" />
          Lembrar-me
        </label>
        <a href="https://sed.educacao.sp.gov.br/" className="text-red-600 hover:underline">Esqueci a senha</a>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl py-3 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:opacity-90 shadow-md transition"
      >
        Entrar
      </button>
    </form>
  </div>
</div>

); }

