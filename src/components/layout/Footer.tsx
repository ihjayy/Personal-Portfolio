import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../data/nav";

export function Footer() {
  return (
    <footer
      className="border-t py-12 px-6"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7">
              <img
                src="./logo/EJ-logo.png"
                alt="EJ Supremo Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-sans text-white font-semibold text-sm">EJ SUPREMO</span>
          </Link>

          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-white/35 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-[11px] text-white/25 font-mono">&copy; 2026 EJ Supremo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
