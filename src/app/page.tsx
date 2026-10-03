"use client";
import { useState, useEffect } from "react";
import CardCurso from "@/components/CardCurso";

interface CursoApi {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
}

export default function Home() {
  const [cursos, setCursos] = useState<CursoApi[]>([]);
  const [busca, setBusca] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarCursos() {
      try {
        setErro(null);
        const res = await fetch(
          "https://dynamic-events-api.onrender.com/api/eventos"
        );
        
        if (!res.ok) {
          throw new Error("Erro ao carregar dados da API");
        }

        const data: CursoApi[] = await res.json();

        const cursosFiltrados = data.filter((item) => {
          const cat = item.categoria?.toLowerCase();
          return cat === "cursos" || cat === "curso";
        });

        setCursos(cursosFiltrados);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
        setErro("Não foi possível carregar os cursos. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    }

    carregarCursos();
  }, []);

  const cursosEncontrados = cursos.filter((curso) => {
    const termo = busca.toLowerCase();
    return (
      curso.nome.toLowerCase().includes(termo) ||
      curso.descricao.toLowerCase().includes(termo)
    );
  });

  return (
    <main className="p-8">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600">Catálogo de Cursos</h1>
            <p className="mt-1 text-sm text-slate-500">
              Treinamentos e capacitações técnicas exclusivas
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Buscar curso..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            {busca && (
              <button
                onClick={() => setBusca("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {erro && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-center text-sm text-red-600">
            {erro}
          </div>
        )}

        {carregando ? (
          <p className="text-center text-slate-400">Carregando cursos...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cursosEncontrados.map((curso) => (
              <CardCurso
                key={curso.id}
                id={curso.id}
                nome={curso.nome}
                descricao={curso.descricao}
                preco={curso.preco}
                categoria={curso.categoria}
                imagem={curso.imagem}
              />
            ))}
          </div>
        )}

        {!carregando && !erro && cursosEncontrados.length === 0 && (
          <p className="mt-8 text-center text-sm text-slate-400">
            Nenhum curso encontrado com a palavra digitada.
          </p>
        )}
      </div>
    </main>
  );
}