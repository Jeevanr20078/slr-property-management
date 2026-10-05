import { Building2, Handshake, Home, Tag } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Buying",
    description:
      "Find your dream home in Bangalore South. We match you with the perfect residential property — apartments, villas, and independent houses — at the best market price.",
    features: [
      "Apartments",
      "Villas",
      "Independent Houses",
      "Gated Communities",
    ],
  },
  {
    icon: Tag,
    title: "Residential Selling",
    description:
      "Maximize the value of your residential property. Our deep market knowledge and vast network ensure a fast, hassle-free sale at the best possible price.",
    features: [
      "Market Valuation",
      "Property Listing",
      "Buyer Matching",
      "Paperwork Support",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Buying",
    description:
      "Invest wisely in commercial real estate across Bangalore South. Offices, retail spaces, warehouses — we find the right asset for your business needs.",
    features: [
      "Office Spaces",
      "Retail Shops",
      "Warehouses",
      "Mixed-Use Properties",
    ],
  },
  {
    icon: Handshake,
    title: "Commercial Selling",
    description:
      "Get the best ROI on your commercial property. We connect serious buyers, negotiate strongly, and ensure a smooth, legally compliant transaction.",
    features: [
      "Corporate Buyers",
      "Valuation Reports",
      "Legal Support",
      "Quick Closures",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F2040 0%, #0A1628 100%)",
      }}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Decorative side accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(212,168,67,0.15), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(212,168,67,0.15), transparent)",
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
              What We Do
            </span>
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Our <span className="shimmer-text">Services</span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive real estate solutions for residential and commercial
            properties across Bangalore South
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-350"
              style={{
                background:
                  "linear-gradient(160deg, rgba(17,34,68,0.85) 0%, rgba(10,22,40,0.95) 100%)",
                border: "1px solid rgba(212,168,67,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.45)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(212,168,67,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
              }}
            >
              {/* Gold top rule — full width, slightly thicker */}
              <div
                className="h-0.5 w-full flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(90deg, #B8861E, #D4A843, #F5D080, #D4A843)",
                }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: "rgba(212,168,67,0.1)",
                    border: "1px solid rgba(212,168,67,0.22)",
                  }}
                >
                  <Icon size={26} style={{ color: "#D4A843" }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
                  {description}
                </p>

                {/* Features */}
                <ul
                  className="space-y-2 pt-4"
                  style={{ borderTop: "1px solid rgba(212,168,67,0.1)" }}
                >
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-xs text-white/45"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#D4A843", opacity: 0.7 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.07), transparent 65%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="text-center mt-14">
          <p className="text-white/35 text-sm mb-5">
            Not sure where to start? Talk to our expert directly.
          </p>
          <a
            href="tel:9845815783"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm btn-gold"
          >
            Call Ravikumar: 9845815783
          </a>
        </div>
      </div>
    </section>
  );
}
