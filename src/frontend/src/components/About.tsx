import { MapPin, Star, Trophy, Users } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="navy-section section-padding"
      style={{
        background: "linear-gradient(180deg, #0A1628 0%, #0F2040 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#D4A843" }}
            >
              Our Story
            </span>
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            About <span className="shimmer-text">Us</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
            A legacy built on trust, expertise, and personal service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story text */}
          <div className="space-y-6">
            <div
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#D4A843" }}
            >
              Trusted Since 1999
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
              Two Decades of Real Estate Excellence in Bangalore South
            </h3>

            <p className="text-white/70 leading-relaxed">
              Founded in 1999, SLR Property Management Company has grown to
              become one of the most trusted names in Bangalore South's real
              estate landscape. For over 25 years, we have guided thousands of
              families and businesses through the most important transactions of
              their lives.
            </p>

            <p className="text-white/70 leading-relaxed">
              Under the leadership of{" "}
              <strong className="text-white">Ravikumar</strong>, our team brings
              deep local knowledge, honest counsel, and a commitment to finding
              the perfect property for every client. Whether you're buying your
              first home, selling a commercial space, or investing in real
              estate — we are your trusted partner every step of the way.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                "Residential Buying & Selling",
                "Commercial Properties",
                "JP Nagar Experts",
                "Transparent Dealings",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                  style={{
                    background: "rgba(212,168,67,0.1)",
                    color: "#D4A843",
                    border: "1px solid rgba(212,168,67,0.25)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="tel:9845815783"
                className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-xl font-bold text-sm"
              >
                Speak to Ravikumar
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Trophy,
                number: "25+",
                label: "Years of Experience",
                desc: "A legacy of excellence since 1999",
                delay: "0s",
              },
              {
                icon: Users,
                number: "2000+",
                label: "Happy Clients",
                desc: "Families who trust us with their dream",
                delay: "0.1s",
              },
              {
                icon: MapPin,
                number: "BLR South",
                label: "Area of Expertise",
                desc: "Deep local knowledge you can rely on",
                delay: "0.2s",
              },
              {
                icon: Star,
                number: "100%",
                label: "Client Satisfaction",
                desc: "Every client leaves happy and heard",
                delay: "0.3s",
              },
            ].map(({ icon: Icon, number, label, desc, delay }) => (
              <div
                key={label}
                className="gold-border-hover rounded-2xl p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(17,34,68,0.9), rgba(15,32,64,0.9))",
                  border: "1px solid rgba(212,168,67,0.12)",
                  animationDelay: delay,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(212,168,67,0.12)" }}
                >
                  <Icon size={22} style={{ color: "#D4A843" }} />
                </div>
                <div
                  className="font-display font-black text-2xl sm:text-3xl mb-1"
                  style={{ color: "#D4A843" }}
                >
                  {number}
                </div>
                <div className="text-white font-semibold text-sm mb-1">
                  {label}
                </div>
                <div className="text-white/50 text-xs leading-relaxed">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
