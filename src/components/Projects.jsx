import { useState, useEffect } from "react";
import { FolderKanban, X, ArrowUpRight, CheckCircle2, Layers, Target } from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Menutup modal ketika tombol Escape ditekan & mengunci scroll layar belakang
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="proyek" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg">
          <FolderKanban size={20} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Proyek Pilihan</h2>
      </div>

      {/* Grid Kartu Proyek */}
      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="relative overflow-hidden bg-slate-100 h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/800x450/e2e8f0/1e293b?text=Preview+Proyek";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold bg-white/90 backdrop-blur-xs text-blue-600 rounded-md shadow-2xs">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 shrink-0">
                Detail <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Proyek */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
          >
            {/* Header Gambar Modal */}
            <div className="relative h-56 sm:h-64 bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x450/e2e8f0/1e293b?text=Preview+Proyek";
                }}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition cursor-pointer"
              >
                <X size={18} />
              </button>
              <span className="absolute bottom-4 left-6 px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-xs">
                {selectedProject.category}
              </span>
            </div>

            {/* Konten Detail Modal */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-3">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    <Target size={15} className="text-blue-600" />
                    <span>Latar Belakang & Masalah</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    <Layers size={15} className="text-blue-600" />
                    <span>Metodologi & Implementasi</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.method}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-1.5">
                    <CheckCircle2 size={15} className="text-blue-600" />
                    <span>Hasil & Evaluasi</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}