import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Github, Linkedin } from "../components/ui/icons";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/22 focus:outline-none transition-all border focus:border-cyan-400/50";

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    borderColor: "rgba(255,255,255,0.1)",
  };

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-[11px] tracking-[0.2em] text-cyan-400 uppercase mb-4">// Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Let&apos;s Talk
          </h1>
          <p className="text-white/45 text-lg max-w-xl">
            Whether you have a project in mind or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { Icon: Mail, label: "Email", value: "ejsupremo2004@gmail.com", color: "#00d4ff" },
              { Icon: Phone, label: "Phone", value: "+63 9602090484", color: "#8b5cf6" },
              { Icon: MapPin, label: "Location", value: "Rizal, Philippines", color: "#10b981" },
            ].map(({ Icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border transition-all hover:border-white/[0.15]"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}16`, border: `1px solid ${color}32` }}
                >
                  <Icon size={17} style={{ color }} />
                </div>
                <div>
                  <div className="text-[10px] text-white/35 font-mono mb-0.5 uppercase tracking-wider">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              </div>
            ))}

            {/* Social grid */}
            <div
              className="p-5 rounded-2xl border"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-4">// Find me on</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { Icon: Github, label: "GitHub" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Globe, label: "Website" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex flex-col items-center gap-2 py-3 rounded-xl border text-white/50 hover:text-white transition-all hover:border-white/20"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <Icon size={17} />
                    <span className="text-[11px] font-mono">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-2xl border"
              style={{ background: "rgba(0,212,255,0.04)", borderColor: "rgba(0,212,255,0.14)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-white/42 text-xs leading-relaxed">
                Open to freelance projects, part-time consulting, and full-time opportunities starting immediately.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="p-7 rounded-2xl border space-y-5"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] text-white/40 font-mono uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-white/40 font-mono uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-white/40 font-mono uppercase tracking-widest mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-[10px] text-white/40 font-mono uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project — timeline, budget, and goals..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-cyan-500/15"
                style={{ background: "linear-gradient(135deg, #38BDF8, #38BDF8)" }}
              >
                {sent ? (
                  <>
                    <span className="text-base">✓</span> Message sent — I will be in touch soon!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
