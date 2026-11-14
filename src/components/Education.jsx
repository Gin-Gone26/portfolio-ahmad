import { GraduationCap } from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section
      id="pendidikan"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60"
    >
      <div className="flex items-center gap-2.5 mb-8">
        <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg">
          <GraduationCap size={20} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Pendidikan</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs font-bold text-blue-600 mb-2">
                <span>{edu.period}</span>
                <span className="px-2.5 py-0.5 bg-blue-50 rounded-md">
                  {edu.score}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                {edu.degree}
              </h3>

              <p className="text-xs font-semibold text-slate-500 mb-3">
                {edu.institution} • {edu.location}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}