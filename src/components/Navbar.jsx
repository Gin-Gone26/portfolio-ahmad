import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Offset 140px agar transisi aktif terasa pas sebelum judul section menyentuh bagian atas layar
      const scrollPosition = window.scrollY + 140;

      // Jika masih di bagian paling atas (Hero), matikan highlight menu
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      for (const link of navLinks) {
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Jalankan sekali saat halaman pertama kali dimuat

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#"
          translate="no"
          onClick={() => setActiveSection("")}
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white shrink-0"
        >
          {profileData.brand}
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-blue-600 dark:text-blue-400"
                    : "font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.label}
                {/* Garis indikator aktif di bawah teks */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
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
        <div className="md:hidden px-6 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                    : "font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={`mailto:${profileData.email}`}
            className="inline-block w-full text-center mt-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </header>
  );
}