import { useState, useEffect } from "react";
import {
  FolderKanban,
  X,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Target,
  ExternalLink,
  Code2,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "Semua"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActiveImage(project.image);
  };

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
    <section
      id="proyek"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60 dark:border-slate-800"
    >
      {/* Header & Tab Filter Kategori */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg">
            <FolderKanban size={20} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Proyek Pilihan
          </h2>
        </div>

        {/* Tombol Filter Kategori */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "Semua"
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Kartu Proyek */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenProject(project)}
            className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/800x450/e2e8f0/1e293b?text=Preview+Proyek";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs text-blue-600 dark:text-blue-400 rounded-md shadow-2xs">
                  {project.category}
                </span>

                {project.liveUrl && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold bg-emerald-500/90 text-white rounded-md shadow-2xs backdrop-blur-xs">
                    Live Demo
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 shrink-0">
                Detail <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Proyek (Tinggi terkunci max-h-[90vh] agar tidak terpotong di layar) */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-xs p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Header Gambar Modal (Fixed di bagian atas modal) */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-slate-100 dark:bg-slate-800">
              <img
                src={activeImage || selectedProject.image}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x450/e2e8f0/1e293b?text=Preview+Proyek";
                }}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup modal"
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-950 transition cursor-pointer shadow-md"
              >
                <X size={18} />
              </button>
              <span className="absolute bottom-3 left-6 px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-xs">
                {selectedProject.category}
              </span>
            </div>

            {/* Area Konten yang Bisa Di-scroll Penuh */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5">
              {/* Thumbnail Galeri */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {selectedProject.gallery.map((imgUrl, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative h-14 w-24 rounded-lg overflow-hidden border-2 shrink-0 transition cursor-pointer ${
                        activeImage === imgUrl
                          ? "border-blue-600 ring-2 ring-blue-600/20"
                          : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Screenshot ${index + 1}`}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/400x225/e2e8f0/1e293b?text=Slide";
                        }}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug mb-3">
                  {selectedProject.title}
                </h3>

                {/* Tags Teknologi */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Live Demo & GitHub Repo */}
                {(selectedProject.liveUrl || selectedProject.repoUrl) && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                    {selectedProject.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition"
                      >
                        <Code2 size={15} /> Kode Sumber (GitHub)
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-1.5">
                    <Target size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Latar Belakang & Masalah</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-1.5">
                    <Layers size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Metodologi & Implementasi</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.method}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-1.5">
                    <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>Hasil & Evaluasi</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
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