import { Briefcase, BookOpen } from "lucide-react";
import { experiencesData, publicationsData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="pengalaman" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Kolom Pengalaman */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg">
              <Briefcase size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Pengalaman</h2>
          </div>

          <div className="space-y-6 border-l-2 border-slate-200 pl-5 ml-2.5">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative">
                <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-slate-50" />
                <span className="text-xs font-bold text-blue-600">{exp.period}</span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{exp.role}</h3>
                <p className="text-xs font-medium text-slate-500 mb-2">{exp.organization}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Publikasi & Riset */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Publikasi & Riset</h2>
          </div>

          <div className="space-y-4">
            {publicationsData.map((pub) => (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition"
              >
                <div className="flex items-center justify-between text-xs font-bold text-blue-600 mb-2">
                  <span>{pub.type}</span>
                  <span className="px-2.5 py-0.5 bg-blue-50 rounded-md">{pub.year}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pub.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}