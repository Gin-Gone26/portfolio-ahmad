import { useState } from "react";
import { Mail, ExternalLink, Code2, ArrowUpRight, Copy, Check } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="kontak" className="max-w-5xl mx-auto px-6 pt-8 pb-16">
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl px-6 py-14 sm:px-12 text-center text-white shadow-xl border border-slate-800/80 relative overflow-hidden">
        {/* Efek cahaya aurora di sudut */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <span className="inline-block px-3.5 py-1 bg-white/10 border border-white/10 text-blue-300 text-xs font-semibold rounded-full mb-4">
            Kontak & Kolaborasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Tertarik Berdiskusi Lebih Lanjut?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Saya terbuka untuk peluang karier penuh waktu, paruh waktu, maupun proyek kolaborasi di bidang{" "}
            <span className="text-white font-semibold">
              Web Development, IT Support, dan Data Analyst
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition shadow-md shadow-blue-600/20"
            >
              <Mail size={16} /> Kirim Email
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white border border-white/15 text-sm font-semibold rounded-xl hover:bg-white/20 transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-300">Email Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={16} /> Salin Email
                </>
              )}
            </button>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white border border-white/15 text-sm font-semibold rounded-xl hover:bg-white/20 transition"
            >
              <ExternalLink size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white border border-white/15 text-sm font-semibold rounded-xl hover:bg-white/20 transition"
            >
              <Code2 size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
        <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <p>Dibangun dengan React & Tailwind CSS</p>
      </div>
    </footer>
  );
}