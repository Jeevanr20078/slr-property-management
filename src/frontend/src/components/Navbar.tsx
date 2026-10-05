import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "stats",
        "services",
        "why-us",
        "testimonials",
        "contact",
      ];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid rgba(212,168,67,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group bg-transparent border-0 p-0 cursor-pointer"
              aria-label="SLR Property Management - Go to top"
            >
              <div className="flex flex-col leading-none">
                <span
                  className="shimmer-text font-display text-2xl lg:text-3xl font-black tracking-wider"
                  aria-hidden="true"
                >
                  SLR
                </span>
                <span className="text-white/80 text-[10px] lg:text-xs font-body tracking-[0.2em] uppercase">
                  Property Management
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-300 ${
                      isActive
                        ? "text-gold-DEFAULT"
                        : "text-white/80 hover:text-gold-DEFAULT hover:bg-white/5"
                    }`}
                    style={{ color: isActive ? "#D4A843" : undefined }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="block h-0.5 mt-0.5 rounded-full"
                        style={{ background: "#D4A843" }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="tel:9845815783"
                className="ml-4 px-5 py-2 rounded-lg text-sm font-bold tracking-wide btn-gold"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-gold-DEFAULT hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeMenu();
            }}
            role="button"
            tabIndex={0}
            aria-label="Close navigation menu"
          />

          {/* Menu Panel */}
          <div
            className="fixed top-16 right-0 left-0 z-40 lg:hidden animate-fade-in"
            style={{
              background: "rgba(10, 22, 40, 0.98)",
              borderBottom: "1px solid rgba(212,168,67,0.2)",
            }}
          >
            <nav aria-label="Mobile navigation">
              <div className="px-4 py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gold-DEFAULT/10 text-gold-DEFAULT"
                          : "text-white/80 hover:text-gold-DEFAULT hover:bg-white/5"
                      }`}
                      style={{ color: isActive ? "#D4A843" : undefined }}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="tel:9845815783"
                  className="mt-4 px-5 py-3 rounded-lg text-base font-bold text-center btn-gold"
                >
                  Call: 9845815783
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
