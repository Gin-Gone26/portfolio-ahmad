import { Award, CheckCircle2 } from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="sertifikasi" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg">
          <Award size={20} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Pelatihan & Sertifikasi</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-blue-600 mb-2">
                <span>{cert.issuer}</span>
                <span className="px-2.5 py-0.5 bg-blue-50 rounded-md">{cert.period}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                {cert.program}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Daftar Modul / Kelas */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-700 mb-2">
                  Materi & Kompetensi yang Dipelajari:
                </p>
                <ul className="space-y-1.5">
                  {cert.courses.map((course, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-blue-600 shrink-0 mt-0.5"
                      />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}