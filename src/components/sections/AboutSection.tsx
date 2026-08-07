import { motion } from "motion/react";
import { Code2, Palette, Terminal, Download } from "lucide-react";
import { Github } from "../ui/icons";
import { SKILLS } from "../../data/skills";
import { SkillBar } from "../ui/SkillBar";

export function AboutSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Bio section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative border rings */}
              <div
                className="absolute -inset-5 rounded-3xl border pointer-events-none"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              />
              <div
                className="absolute -inset-10 rounded-3xl border pointer-events-none"
                style={{ borderColor: "rgba(255,255,255,0.03)" }}
              />
              {/* Glow layer */}
              <div
                className="absolute inset-0 rounded-2xl scale-110 blur-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.18), rgba(139,92,246,0.18))", opacity: 0.6 }}
              />
              <img
                src="./photos/profile.jpg"
                alt="EJ Supremo — Frontend Developer & Designer"
                className="relative w-full rounded-2xl object-cover aspect-[4/5]"
                style={{ filter: "grayscale(25%) contrast(1.05)" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase mb-4">// About Me</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Turning ideas into{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #00d4ff",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital reality
              </span>
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-5">
              Hi, I'm EJ L. Supremo—an aspiring Full Stack Developer and Graphic Designer with a passion for
              building digital experiences that are both functional and visually engaging.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              As I continue to grow in my career, I'm dedicated to expanding my skills, embracing new technologies,
              and delivering work that is creative, user-focused, and impactful. Every project is an opportunity
              to learn, innovate, and create something meaningful.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                ["Education", "B.S. Information Technology"],
                ["Freelance", "Available Now"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="px-4 py-3 rounded-xl border"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="text-[10px] text-white/35 font-mono mb-1 uppercase tracking-wider">{k}</div>
                  <div className="text-sm text-white font-medium">{v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://github.com/ihjayy"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-white/60 hover:text-white transition-all text-sm font-medium hover:border-white/20"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <Icon size={14} /> {label}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-cyan-300 border transition-all text-sm font-medium hover:bg-cyan-400/10"
                style={{ background: "rgba(0,212,255,0.08)", borderColor: "rgba(0,212,255,0.2)" }}
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-14">
            <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase mb-3">// My Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SKILLS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: gi * 0.12 }}
                className="p-6 rounded-2xl border transition-all hover:border-white/[0.15]"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(139,92,246,0.12))",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {group.icon === "code" && <Code2 size={17} className="text-cyan-400" />}
                    {group.icon === "palette" && <Palette size={17} className="text-violet-400" />}
                    {group.icon === "terminal" && <Terminal size={17} className="text-cyan-400" />}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm leading-snug">{group.category}</h3>
                </div>
                {group.items.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={gi * 100 + si * 70} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
