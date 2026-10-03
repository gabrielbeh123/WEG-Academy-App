import Link from "next/link";
export default function Sobre() {
  return (
    <main className="p-8">
      <div
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8
                shadow-sm"
      >
        <h1 className="text-3xl font-extrabold text-blue-600">
          Sobre o WEG Academy
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Plataforma desenvolvida para apresentação e consulta do catálogo
          oficial de cursos técnicos e capacitações WEG.
        </p>
        <div className="mt-6 border-t border-slate-100 pt-6">
          <h2 className="text-lg font-bold text-slate-800">
            Recursos da Aplicação:
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>
              Navegação via <strong>App Router</strong> do Next.js
            </li>
            <li>Consumo de dados via API RESTful externa</li>
            <li>Componentes dinâmicos e estilizados com Tailwind CSS</li>
            <li>Rota de detalhes individual por ID</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-blue-600
                    hover:text-blue-800"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
