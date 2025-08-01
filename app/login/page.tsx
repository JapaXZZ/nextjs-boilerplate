"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [ra, setRa] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ra, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <Card 
          className="bg-[#121217] rounded-3xl border border-purple-700 shadow-[0_0_15px_#8b5cf6] backdrop-blur-sm"
        >
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-900/30 border border-purple-700">
                <LogIn className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Acesso ao Sistema
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ra" className="text-white font-medium">
                  RA (Registro Acadêmico)
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    id="ra"
                    type="text"
                    placeholder="Ex: 1113949089sp"
                    value={ra}
                    onChange={(e) => setRa(e.target.value)}
                    className="pl-10 bg-[#1f1f2e]/80 border border-purple-700 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-purple-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-[#1f1f2e]/80 border border-purple-700 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-purple-400 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </CardContent>

            <div className="p-4">
              <Button 
                type="submit" 
                className="w-full bg-purple-700 hover:bg-purple-800 shadow-[0_0_10px_#8b5cf6] transition"
              >
                Entrar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}