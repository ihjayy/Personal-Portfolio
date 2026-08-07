import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { NAV_ITEMS } from "../../data/nav";
import { useScrolled } from "../../hooks/useScrolled";

export function Nav() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 group">
          <div className="w-15 h-15">
            <img
              src="./logo/EJ-logo.png"
              alt="EJ Supremo Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className="cursor-pointer relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-white/50 hover:text-white/90"}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden mt-2 p-3 rounded-2xl bg-black/85 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${
                  isActive ? "text-white bg-white/10" : "text-white/55 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full mt-1 py-3 rounded-xl bg-white text-black text-sm font-bold text-center"
          >
            Hire Me
          </Link>
        </motion.div>
      )}

      {/* Mobile menu toggle — add your icon/button here, wired to setMenuOpen */}
    </nav>
  );
}
