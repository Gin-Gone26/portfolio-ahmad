import { ArrowRight, FileText, BarChart3, Layers, Cpu } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Hero() {
  const highlights = [
    {
      icon: BarChart3,
      title: "Evaluasi & Statistik",
      desc: "Model TAM, DSRM & Uji Hipotesis Jamovi",
    },
    {
      icon: Layers,
      title: "Perancangan Sistem",
      desc: "Pemodelan Arsitektur UML & Basis Data ERD",
    },
    {
      icon: Cpu,
      title: "Teknis & Pelatihan",
      desc: "Instruktur Teknisi Komputer & Dokumentasi",
    },
  ];

  return (
    <header className="relative overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 bg-grid-pattern">
      {/* Efek cahaya aurora gradasi di sudut */}
      <div className="absolute -top-28 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-cyan-300/20 dark:from-blue-600/25 dark:via-indigo-600/20 dark:to-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 via-blue-300/15 to-purple-300/15 dark:from-indigo-600/20 dark:via-blue-600/15 dark:to-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Kolom Kiri: Teks Utama */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/70 text-emerald-700 dark:text-emerald-300 font-semibold text-xs rounded-full mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Terbuka untuk Peluang Kerja & Kolaborasi
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
              {profileData.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300 text-2xl sm:text-3xl font-extrabold mt-2">
                {profileData.role}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              {profileData.headline}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-blue-600 dark:to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20"
              >
                Eksplorasi Studi Kasus <ArrowRight size={18} />
              </a>
              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
              >
                <FileText size={18} /> Unduh CV (PDF)
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Editorial dengan Bingkai Gradient */}
          <div className="relative shrink-0 group">
            {/* Layer belakang miring bergradasi */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl rotate-6 opacity-25 dark:opacity-35 scale-105 blur-[1px] group-hover:rotate-3 transition duration-300" />
            
            {/* Bingkai utama */}
            <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-xl">
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-[20px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Baris Kartu Pilar Keahlian */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/75 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition duration-200 shadow-2xs"
              >
                <div className="p-2.5 bg-gradient-to-br from-blue-600/15 to-indigo-600/15 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}