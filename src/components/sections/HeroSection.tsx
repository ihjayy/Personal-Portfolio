import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "../ui/icons";
import GradientWaves from "../ui/GradientWaves";
import { useTypedText } from "../../hooks/useTypedText";

export function HeroSection() {
  const typed = useTypedText(["Developer", "Designer"]);
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <GradientWaves
          className="w-full h-full"
          horizonColor="#09090B"
          waveColor="#3B82F6"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          mouseInteraction={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full text-center translate-y-10">

        {/* Name */}
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-baseline gap-4"
          >
            <h1 className="font-sans font-bold leading-[0.88] tracking-normal text-white "
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}>
              EJ
            </h1>

            <h1
              className="font-sans font-bold leading-[0.88] tracking-normal"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 9rem)",
                background: "linear-gradient(135deg, #E9E9E9 0%, #F6F6F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SUPREMO
            </h1>
          </motion.div>
        </div>

        {/* Typed subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-sans text-white/65 font-light mb-4"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
        >
          {typed}
          <span className="animate-pulse text-cyan-400/80">|</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <button
            onClick={() => go("/projects")}
            className="cursor-pointer group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-black text-sm transition-all hover:scale-[1.04] active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #F6F6F6)" }}
          >
            View My Work
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => go("/contact")}
            className="cursor-pointer flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/[0.06] border border-white/[0.14] text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.04] active:scale-[0.97]"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Fixed social rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-40"
      >
        {[
          { Icon: Github, href: "https://github.com/ihjayy" },
          { Icon: Linkedin, href: "#" },
          { Icon: Mail, href: "#" },
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/40 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all"
          >
            <Icon size={15} />
          </a>
        ))}
        <div className="w-px h-14 bg-gradient-to-b from-white/15 to-transparent mt-1" />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-mono text-white/25 tracking-[0.2em] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
