import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#060E1A",
        borderTop: "1px solid rgba(212,168,67,0.12)",
      }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Company info */}
          <div className="space-y-5">
            <div className="flex flex-col">
              <span className="shimmer-text font-display text-3xl font-black tracking-wider">
                SLR
              </span>
              <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-body">
                Property Management Company
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Bangalore South's most trusted real estate partner since 1999. 25
              years of expertise, 2000+ happy families, and a commitment to
              honest, personalized service.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(212,168,67,0.1)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(212,168,67,0.12)";
                    e.currentTarget.style.borderColor = "rgba(212,168,67,0.3)";
                    e.currentTarget.style.color = "#D4A843";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = "rgba(212,168,67,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4
              className="font-display font-bold text-base mb-5"
              style={{ color: "#D4A843" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/50 text-sm transition-colors duration-200 hover:text-white/90 flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#D4A843" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h4
              className="font-display font-bold text-base mb-5"
              style={{ color: "#D4A843" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#D4A843" }}
                />
                <div className="text-white/50 text-sm leading-relaxed">
                  No. 1309, 9th Cross Road,
                  <br />
                  JP Nagar 1st Phase,
                  <br />
                  Bangalore 560078
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="flex-shrink-0"
                  style={{ color: "#D4A843" }}
                />
                <div className="text-sm">
                  <a
                    href="tel:9845815783"
                    className="text-white/50 hover:text-white/90 transition-colors block"
                  >
                    9845815783
                  </a>
                  <a
                    href="tel:7892406691"
                    className="text-white/50 hover:text-white/90 transition-colors block"
                  >
                    7892406691
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="flex-shrink-0"
                  style={{ color: "#D4A843" }}
                />
                <span className="text-white/50 text-sm">
                  Ravikumar, SLR Properties
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <span>
              © {currentYear} SLR Property Management Company. All rights
              reserved.
            </span>
            <span>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors underline"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
