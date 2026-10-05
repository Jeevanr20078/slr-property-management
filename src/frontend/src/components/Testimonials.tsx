import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ravikumar and his team helped us find our dream home in JP Nagar. Their 25 years of expertise made the entire buying process seamless and stress-free. We got the perfect home at the right price!",
    name: "Priya Sharma",
    location: "JP Nagar, Bangalore",
    initials: "PS",
    role: "Home Buyer",
  },
  {
    quote:
      "We sold our commercial property at the best market price thanks to SLR. Highly professional, trustworthy, and they handled all the paperwork flawlessly. I'd recommend them without hesitation.",
    name: "Suresh Menon",
    location: "Banashankari, Bangalore",
    initials: "SM",
    role: "Commercial Seller",
  },
  {
    quote:
      "As first-time property buyers, we were nervous and confused. SLR guided us through every step — from shortlisting to registration. Truly reliable partners we could trust completely.",
    name: "Anitha Reddy",
    location: "Jayanagar, Bangalore",
    initials: "AR",
    role: "First-Time Buyer",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#D4A843"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <title>Star</title>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F7F1E8 0%, #EDE6D6 100%)",
      }}
    >
      {/* Warm texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(180,140,60,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: "#B8861E" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#8C6614" }}
            >
              Client Stories
            </span>
            <div className="h-px w-12" style={{ background: "#B8861E" }} />
          </div>
          <h2
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl mb-4"
            style={{ color: "#0A1628" }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #B8861E, #D4A843, #B8861E)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Clients Say
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base sm:text-lg"
            style={{ color: "rgba(10,22,40,0.55)" }}
          >
            Real stories from real families and businesses we've helped
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map(
            ({ quote, name, location, initials, role }, index) => (
              <div
                key={name}
                className="group relative flex flex-col rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 2px 12px rgba(180,140,60,0.1), 0 8px 32px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(180,140,60,0.15)",
                  animationDelay: `${index * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(180,140,60,0.2), 0 16px 48px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(212,168,67,0.4)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.92)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(180,140,60,0.1), 0 8px 32px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                }}
              >
                {/* Gold top rule */}
                <div
                  className="h-0.5 rounded-t-2xl"
                  style={{
                    background: "linear-gradient(90deg, #D4A843, #B8861E)",
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Header row: quote icon + stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(212,168,67,0.12)" }}
                    >
                      <Quote size={16} style={{ color: "#B8861E" }} />
                    </div>
                    <StarRating />
                  </div>

                  {/* Quote */}
                  <p
                    className="text-sm leading-relaxed flex-1 font-display font-medium"
                    style={{
                      color: "rgba(10,22,40,0.72)",
                      fontStyle: "italic",
                    }}
                  >
                    "{quote}"
                  </p>

                  {/* Author */}
                  <div
                    className="mt-6 flex items-center gap-3 pt-5"
                    style={{ borderTop: "1px solid rgba(180,140,60,0.15)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #D4A843, #B8861E)",
                        color: "#0A1628",
                      }}
                    >
                      {initials}
                    </div>
                    <div>
                      <div
                        className="font-bold text-sm"
                        style={{ color: "#0A1628" }}
                      >
                        {name}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(10,22,40,0.5)" }}
                      >
                        {role} · {location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Bottom social proof bar */}
        <div className="text-center mt-14">
          <div
            className="inline-flex flex-wrap justify-center items-center gap-8 px-8 sm:px-12 py-5 rounded-2xl"
            style={{
              background: "rgba(212,168,67,0.1)",
              border: "1px solid rgba(212,168,67,0.3)",
            }}
          >
            <div className="text-center">
              <div
                className="font-display font-black text-2xl"
                style={{ color: "#B8861E" }}
              >
                2000+
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "rgba(10,22,40,0.55)" }}
              >
                Happy Clients
              </div>
            </div>
            <div
              className="w-px h-10 hidden sm:block"
              style={{ background: "rgba(184,134,30,0.3)" }}
            />
            <div className="text-center">
              <StarRating />
              <div
                className="text-xs font-semibold mt-1.5"
                style={{ color: "rgba(10,22,40,0.55)" }}
              >
                5-Star Service
              </div>
            </div>
            <div
              className="w-px h-10 hidden sm:block"
              style={{ background: "rgba(184,134,30,0.3)" }}
            />
            <div className="text-center">
              <div
                className="font-display font-black text-2xl"
                style={{ color: "#B8861E" }}
              >
                25+
              </div>
              <div
                className="text-xs font-semibold mt-0.5"
                style={{ color: "rgba(10,22,40,0.55)" }}
              >
                Years Trusted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
