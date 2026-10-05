export function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #060E1A 0%, #0A1628 35%, #0D1E38 65%, #0A1628 100%)",
      }}
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 diagonal-pattern" />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large concentric rings top-right */}
        <div
          className="animate-float absolute"
          style={{
            top: "6%",
            right: "6%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1.5px solid rgba(212,168,67,0.1)",
          }}
        />
        <div
          className="animate-float-slow absolute"
          style={{
            top: "10%",
            right: "10%",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(212,168,67,0.07)",
          }}
        />
        <div
          className="animate-float absolute"
          style={{
            top: "14%",
            right: "14%",
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "1px solid rgba(212,168,67,0.05)",
          }}
        />

        {/* Small circle bottom-left */}
        <div
          className="animate-float-delay absolute"
          style={{
            bottom: "22%",
            left: "4%",
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "1.5px solid rgba(212,168,67,0.09)",
          }}
        />

        {/* Diamond shape mid-right */}
        <div
          className="animate-float-delay absolute"
          style={{
            top: "35%",
            right: "2.5%",
            width: 56,
            height: 56,
            border: "1.5px solid rgba(212,168,67,0.16)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Gold dot cluster top-left */}
        <div
          className="animate-float absolute"
          style={{
            top: "14%",
            left: "7%",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(212,168,67,0.45)",
          }}
        />
        <div
          className="animate-float-slow absolute"
          style={{
            top: "21%",
            left: "11%",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(212,168,67,0.3)",
          }}
        />
        <div
          className="animate-float absolute"
          style={{
            top: "17%",
            left: "14%",
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "rgba(212,168,67,0.5)",
          }}
        />

        {/* Slowly rotating large ring bottom-right */}
        <div
          className="animate-rotate-slow absolute"
          style={{
            bottom: "-12%",
            right: "-8%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(212,168,67,0.04)",
          }}
        />

        {/* Horizontal accent lines */}
        <div
          className="absolute"
          style={{
            top: "55%",
            left: "-5%",
            width: "28%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,67,0.18), transparent)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "44%",
            right: "-5%",
            width: "22%",
            height: "1px",
            background:
              "linear-gradient(270deg, transparent, rgba(212,168,67,0.14), transparent)",
          }}
        />
      </div>

      {/* Radial gold glow — center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background:
            "radial-gradient(ellipse at center, rgba(212,168,67,0.04) 0%, transparent 65%)",
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pt-24 pb-8">
        {/* Overline */}
        <div
          className="inline-flex items-center gap-3 mb-7 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <div className="h-px w-10" style={{ background: "#D4A843" }} />
          <span
            className="text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase"
            style={{ color: "#D4A843" }}
          >
            Established 1999 · Bangalore South
          </span>
          <div className="h-px w-10" style={{ background: "#D4A843" }} />
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-black leading-none mb-5 animate-fade-in-up"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            letterSpacing: "-0.025em",
            animationDelay: "0.25s",
            opacity: 0,
          }}
        >
          <span className="block text-white">25 Years of</span>
          <span className="block shimmer-text" style={{ lineHeight: 1.05 }}>
            Trust
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-display text-xl sm:text-2xl lg:text-3xl font-medium mb-5 animate-fade-in-up"
          style={{
            color: "rgba(255,255,255,0.75)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          2000+ Happy Families in Bangalore South
        </p>

        {/* Body text */}
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{
            color: "rgba(255,255,255,0.52)",
            animationDelay: "0.52s",
            opacity: 0,
          }}
        >
          Your trusted partner for buying &amp; selling residential and
          commercial properties. Serving Bangalore South with integrity,
          expertise, and care since 1999.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.66s", opacity: 0 }}
        >
          <button
            type="button"
            onClick={() => handleScrollTo("services")}
            className="btn-gold px-9 py-4 rounded-xl text-sm font-bold tracking-wide min-w-[210px]"
          >
            Explore Services
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo("contact")}
            className="btn-gold-outline px-9 py-4 rounded-xl text-sm font-bold tracking-wide min-w-[210px]"
          >
            Contact Us
          </button>
        </div>

        {/* ── Credentials Bar ── */}
        <div
          className="mt-16 inline-flex flex-wrap justify-center items-stretch gap-0 animate-fade-in-up rounded-2xl overflow-hidden"
          style={{
            animationDelay: "0.82s",
            opacity: 0,
            border: "1px solid rgba(212,168,67,0.18)",
            background:
              "linear-gradient(135deg, rgba(15,32,64,0.7), rgba(10,22,40,0.8))",
            backdropFilter: "blur(12px)",
          }}
        >
          {[
            { number: "25+", label: "Years", sub: "Since 1999" },
            { number: "2000+", label: "Clients", sub: "Families Served" },
            { number: "100%", label: "Satisfaction", sub: "Client Promise" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex items-center"
              style={{
                borderRight: i < 2 ? "1px solid rgba(212,168,67,0.12)" : "none",
              }}
            >
              <div className="px-7 py-4 text-center">
                <div className="font-display font-black text-2xl sm:text-3xl leading-none shimmer-text-slow">
                  {item.number}
                </div>
                <div className="text-white font-semibold text-xs mt-1 tracking-wide">
                  {item.label}
                </div>
                <div
                  className="text-[10px] mt-0.5 tracking-wider uppercase"
                  style={{ color: "rgba(212,168,67,0.5)" }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,22,40,0.85))",
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ opacity: 0.45 }}
      >
        <div
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Scroll
        </div>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, rgba(212,168,67,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
