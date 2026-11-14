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
    <header className="relative overflow-hidden bg-white border-b border-slate-200/80 bg-grid-pattern">
      {/* Efek cahaya gradasi halus di sudut */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Kolom Kiri: Teks Utama */}
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold text-xs rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Terbuka untuk Peluang Kerja & Kolaborasi
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              {profileData.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl sm:text-3xl font-bold mt-2">
                {profileData.role}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              {profileData.headline}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Eksplorasi Studi Kasus <ArrowRight size={18} />
              </a>
              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
              >
                <FileText size={18} /> Unduh CV (PDF)
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Editorial */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl rotate-6 opacity-15 scale-105" />
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Baris Kartu Pilar Keahlian */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16 pt-10 border-t border-slate-200/80">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70"
              >
                <div className="p-2.5 bg-blue-600/10 text-blue-600 rounded-xl shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900">{item.title}</h2>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}