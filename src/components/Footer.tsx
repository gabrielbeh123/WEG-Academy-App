export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-500">
      <div
        className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-6
text-xs sm:flex-row"
      >
        <p>
          © {new Date().getFullYear()} WEG Academy. Todos os direitos
          reservados.
        </p>
        <p className="text-slate-400">Plataforma de Treinamentos Técnicos</p>
      </div>
    </footer>
  );
}
