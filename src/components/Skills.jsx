import { BarChart2, GitBranch, Wrench, Check } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const categoryIcons = [BarChart2, GitBranch, Wrench];

  return (
    <section id="keahlian" className="bg-white border-y border-slate-200/80 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Kompetensi Teknis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Keahlian & Perangkat Kerja
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Kombinasi kemampuan analisis kuantitatif, dokumentasi arsitektur sistem, dan dukungan teknis lapangan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={skillGroup.category}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-xs">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2.5">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}