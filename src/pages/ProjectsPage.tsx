import { useState } from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { CERTIFICATES } from "../data/certificates";
import { ProjectsGrid } from "../components/sections/ProjectsGrid";

export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase mb-4">// My Work</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4 leading-tight">Projects</h1>
          <p className="text-white/45 text-lg max-w-xl">
            A curated collection spanning web development, interface design, and creative work.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-white text-black"
                  : "border text-white/50 hover:text-white hover:bg-white/[0.07] hover:border-white/15"
              }`}
              style={filter !== cat ? { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ProjectsGrid projects={shown} />

        {/* Certificates */}
        <div>
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase mb-4">// Credentials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Certificates</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex items-start gap-4 p-5 rounded-2xl border transition-all hover:-translate-y-1 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.09)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${cert.color}1a`,
                    border: `1px solid ${cert.color}38`,
                  }}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </div>
                  <div className="text-white/38 text-xs font-mono">{cert.issuer}</div>
                  <span
                    className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium"
                    style={{ background: `${cert.color}22`, color: cert.color }}
                  >
                    {cert.date}
                  </span>
                </div>
                <Award size={13} className="text-white/18 group-hover:text-white/40 transition-colors flex-shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
