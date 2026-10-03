import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        {/* Logo da WEG Academy */}
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-lg bg-blue-600 px-2.5 py-1 text-sm font-black text-white">
            WEG
          </span>
          <span className="text-xl font-extrabold text-slate-800">Academy</span>
        </Link>
        {/* Links de Navegação entre Páginas */}
        <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/" className="transition-colors hover:text-blue-600">
            Início
          </Link>
          <Link href="/sobre" className="transition-colors hover:text-blue-600">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
