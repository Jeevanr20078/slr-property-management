import { Clock, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description:
      "Every transaction is handled with complete transparency. No hidden charges, no misleading information — just honest, ethical real estate guidance you can count on.",
  },
  {
    icon: Clock,
    title: "25 Years Experience",
    description:
      "Since 1999, we've navigated every market cycle, regulation change, and neighborhood shift. Our experience means fewer surprises and better outcomes for you.",
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description:
      "Bangalore South is not just our territory — it's our home. We know every lane in JP Nagar, Banashankari, Jayanagar, and surrounding neighborhoods intimately.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "You're not just a transaction to us. Ravikumar personally oversees your search or sale, ensuring tailored advice and attention at every stage of the process.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #0A1628 0%, #060E1A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Large decorative ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(212,168,67,0.06)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#D4A843" }}
            >
              The SLR Difference
            </span>
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Why Choose <span className="shimmer-text">SLR?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
            Four pillars that have earned the trust of 2000+ families
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group text-center p-8 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,168,67,0.08)",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212,168,67,0.05)";
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(212,168,67,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(212,168,67,0.1)",
                  border: "1px solid rgba(212,168,67,0.2)",
                }}
              >
                <Icon size={28} style={{ color: "#D4A843" }} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-8 py-5 rounded-2xl"
            style={{
              background: "rgba(212,168,67,0.08)",
              border: "1px solid rgba(212,168,67,0.2)",
            }}
          >
            <p className="text-white/80 text-base sm:text-lg font-display font-medium italic">
              "Our reputation is built on every handshake, every deal, and every
              family we've helped find a home."
            </p>
            <p className="text-sm mt-3" style={{ color: "#D4A843" }}>
              — Ravikumar, Founder, SLR Property Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
