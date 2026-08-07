import { motion } from "motion/react";

type Project = {
  id: number;
  title: string;
  role: string;
  tech: string[];
  image: string;
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/15 mb-28">
      {projects.map((p, i) => {
        const num = String(i + 1).padStart(2, "0");
        const imageFirst = i % 2 === 1;

        const textBlock = (
          <div className={`p-6 flex-1 flex flex-col ${imageFirst ? "justify-end" : ""}`}>
            <div className={`flex items-start justify-between gap-4 ${imageFirst ? "items-end" : ""}`}>
              {!imageFirst && (
                <span className="font-display text-4xl font-black text-white leading-none">{num}</span>
              )}
              <div className={imageFirst ? "text-left" : "text-right flex-1"}>
                <h3 className="font-display font-bold text-white text-xl leading-snug">{p.title}</h3>
                <p className="text-white/40 text-xs mt-1">{p.role}</p>
                <div className={`flex gap-2 mt-2 ${imageFirst ? "justify-start" : "justify-end"}`}>
                  {p.tech.map((icon) => (
                    <img key={icon} src={icon} alt="" className="w-4 h-4 object-contain opacity-70" />
                  ))}
                </div>
              </div>
              {imageFirst && (
                <span className="font-display text-4xl font-black text-white leading-none">{num}</span>
              )}
            </div>
          </div>
        );

        const imageBlock = (
          <div className="p-4 md:p-6">
            <div className="h-44 md:h-52 overflow-hidden bg-zinc-900 rounded-xl">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-500"
              />
            </div>
          </div>
        );

        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border-r border-b border-white/15 flex flex-col cursor-pointer"
          >
            {imageFirst ? (
              <>
                {imageBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {imageBlock}
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
