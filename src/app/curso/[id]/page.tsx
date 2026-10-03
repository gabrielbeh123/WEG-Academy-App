"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
// FALTOU TEMPO
// PASSO DETALHES 4: Criar a interface 'CursoDetalhe' para os dados retornados da API
export default function DetalhesCurso({ params }: { params: Promise<{ id: string }> }) {
    // PASSO DETALHES 5: Desenvelopar o id dos parâmetros assíncronos usando a função
    `use(params)`
        // PASSO DETALHES 6: Criar o estado 'curso' para armazenar os dados do item retornado (iniciar como null)
        // PASSO DETALHES 7: Criar o estado 'carregando' (boolean) para o status da requisição (iniciar como true)
        // PASSO DETALHES 8: Criar o estado 'erro' para falhas (iniciar como null)
        // PASSO DETALHES 9: Usar o 'useEffect' apontando para o id para buscar as informações do curso específico
        // Endpoint: https://dynamic-events-api.onrender.com/api/eventos/${id}
        // 1. Executar o fetch no endpoint específico
        // 2. Armazenar a resposta no estado 'curso'
        // 3. Alterar 'carregando' para false
        // PASSO DETALHES 10: Tratar exibição da mensagem de "Carregando informações..." caso 'carregando' seja true
        // PASSO DETALHES 11: Tratar exibição da mensagem de "Curso não encontrado" caso ocorra erro ou o estado 'curso' seja null
    return (
        <main className="p-8">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border
                        border-slate-200 bg-white shadow-sm">
                {/* IMAGEM DO CURSO */}
                <div className="relative h-72 w-full bg-slate-100">
                    {/* PASSO DETALHES 12: Renderizar a imagem do curso utilizando o componente
                <Image /> */}
                </div>
                <div className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                        {/* PASSO DETALHES 13: Exibir a categoria */}
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase
                            tracking-wider text-blue-600">
                            Categoria
                        </span>
                        {/* PASSO DETALHES 14: Exibir o preço */}
                        <span className="text-2xl font-extrabold text-slate-900">R$ 0,00</span>
                    </div>
                    {/* PASSO DETALHES 15: Exibir o título do curso */}
                    <h1 className="text-3xl font-bold text-slate-800">Título do Curso</h1>
                    {/* PASSO DETALHES 16: Exibir a descrição do curso */}
                    <p className="mt-4 leading-relaxed text-slate-600">
                        Descrição detalhada do curso retornado da API.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 text-sm">
                        <div>
                            <span className="block font-medium text-slate-400">📍 Localização</span>
                            {/* PASSO DETALHES 17: Exibir o local retornado pela API ou texto padrão */}
                            <span className="font-semibold text-slate-700">WEG Academy</span>
                        </div>
                        <div>
                            <span className="block font-medium text-slate-400">🎓 Modalidade</span>
                            <span className="font-semibold text-slate-700">Presencial / Prática</span>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-slate-100 pt-6">
                        {/* PASSO DETALHES 18: Usar <Link href="/"> para o botão de voltar */}
                        <a
                            href="/"
                            className="inline-flex items-center text-sm font-semibold text-blue-600
                            hover:text-blue-800"
                        >
                            ← Voltar para a lista de cursos
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}