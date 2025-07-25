"use client";

import { useEffect, useState } from "react";

interface BookmarkItem {
  title: string;
  url: string;
}

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const saved: BookmarkItem[] = JSON.parse(localStorage.getItem("meusFavoritos") || "[]");
    const existe = saved.some((item) => item.url === currentUrl);
    setIsBookmarked(existe);
  }, []);

  const salvarFavorito = () => {
    const titulo = document.title;
    const url = window.location.href;
    const novoFavorito: BookmarkItem = { title: titulo, url };

    const favoritosAntigos: BookmarkItem[] = JSON.parse(localStorage.getItem("meusFavoritos") || "[]");

    const jaExiste = favoritosAntigos.some((item) => item.url === url);

    if (!jaExiste) {
      favoritosAntigos.push(novoFavorito);
      localStorage.setItem("meusFavoritos", JSON.stringify(favoritosAntigos));
      setIsBookmarked(true);
      alert("Página salva como favorito!");
    } else {
      alert("Essa página já está nos favoritos.");
    }
  };

  return (
    <button
      onClick={salvarFavorito}
      className={`px-4 py-2 rounded-xl text-white font-semibold ${
        isBookmarked ? "bg-green-600" : "bg-purple-600 hover:bg-purple-700"
      }`}
    >
      {isBookmarked ? "Favoritado!" : "Salvar como favorito"}
    </button>
  );
}