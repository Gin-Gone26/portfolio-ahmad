import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "../data/portfolioData";
import ThemeAndTranslate from "./ThemeAndTranslate";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Sertifikasi", href: "#sertifikasi" },
  { label: "Keahlian", href: "#keahlian" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#"
          translate="no"
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white shrink-0"
        >
          {profileData.brand}
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Aksi Kanan (Translate, Dark Mode, & CTA) */}
        <div className="flex items-center gap-2.5">
          <ThemeAndTranslate />

          <a
            href={`mailto:${profileData.email}`}
            className="hidden sm:inline-block px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition shrink-0"
          >
            Hubungi Saya
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profileData.email}`}
            className="inline-block w-full text-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </header>
  );
}