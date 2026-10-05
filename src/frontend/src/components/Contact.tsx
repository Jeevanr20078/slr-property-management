import {
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(212,168,67,0.15)",
  color: "white",
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const inputErrorStyle = {
  ...inputStyle,
  border: "1px solid rgba(220,38,38,0.7)",
};

export function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(212,168,67,0.5)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(212,168,67,0.1)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldError?: string,
  ) => {
    e.currentTarget.style.borderColor = fieldError
      ? "rgba(220,38,38,0.7)"
      : "rgba(212,168,67,0.15)";
    e.currentTarget.style.boxShadow = "none";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateForm(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      if (!actor) {
        setSubmitError("Unable to connect. Please try again.");
        setSubmitting(false);
        return;
      }
      const success = await actor.submitInquiry(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      if (success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitError(
          "Something went wrong. Please try again or call us directly.",
        );
      }
    } catch {
      setSubmitError("Unable to send your message. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #060E1A 0%, #0A1628 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(212,168,67,0.05)",
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
              Get In Touch
            </span>
            <div className="h-px w-12" style={{ background: "#D4A843" }} />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Contact <span className="shimmer-text">Us</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
            Ready to find your perfect property? Let's talk today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* Contact card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,168,67,0.15)",
              }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,168,67,0.12)" }}
                  >
                    <User size={18} style={{ color: "#D4A843" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                      Contact Person
                    </div>
                    <div className="text-white font-semibold">Ravikumar</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,168,67,0.12)" }}
                  >
                    <Phone size={18} style={{ color: "#D4A843" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                      Phone Numbers
                    </div>
                    <a
                      href="tel:9845815783"
                      className="text-white/80 font-semibold hover:text-white block transition-colors"
                    >
                      9845815783
                    </a>
                    <a
                      href="tel:7892406691"
                      className="text-white/80 font-semibold hover:text-white block transition-colors"
                    >
                      7892406691
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(212,168,67,0.12)" }}
                  >
                    <MapPin size={18} style={{ color: "#D4A843" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mb-0.5">
                      Office Address
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      No. 1309, 9th Cross Road,
                      <br />
                      JP Nagar 1st Phase,
                      <br />
                      Bangalore 560078
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(212,168,67,0.15)",
                background: "rgba(255,255,255,0.03)",
                height: 200,
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 relative">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(212,168,67,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.2) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: "rgba(212,168,67,0.15)",
                    border: "2px solid rgba(212,168,67,0.4)",
                  }}
                >
                  <MapPin size={22} style={{ color: "#D4A843" }} />
                </div>
                <div className="text-center relative z-10">
                  <div className="text-white/70 font-semibold text-sm">
                    JP Nagar 1st Phase
                  </div>
                  <div className="text-white/40 text-xs">
                    Bangalore South 560078
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=No.1309+9th+Cross+Road+JP+Nagar+1st+Phase+Bangalore+560078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-xs font-semibold underline transition-colors"
                  style={{ color: "#D4A843" }}
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,168,67,0.15)",
              }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(212,168,67,0.15)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#D4A843" }} />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Message Sent!
                  </h4>
                  <p className="text-white/60 text-sm max-w-xs">
                    Thank you for reaching out. Ravikumar will contact you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold underline"
                    style={{ color: "#D4A843" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-wide mb-2"
                    >
                      <User size={12} className="inline mr-1.5" />
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      style={errors.name ? inputErrorStyle : inputStyle}
                      onFocus={handleFocus}
                      onBlur={(e) => handleBlur(e, errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-wide mb-2"
                    >
                      <Mail size={12} className="inline mr-1.5" />
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      style={errors.email ? inputErrorStyle : inputStyle}
                      onFocus={handleFocus}
                      onBlur={(e) => handleBlur(e, errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-wide mb-2"
                    >
                      <Phone size={12} className="inline mr-1.5" />
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      autoComplete="tel"
                      style={errors.phone ? inputErrorStyle : inputStyle}
                      onFocus={handleFocus}
                      onBlur={(e) => handleBlur(e, errors.phone)}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-wide mb-2"
                    >
                      <MessageSquare size={12} className="inline mr-1.5" />
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property requirements..."
                      rows={4}
                      style={{
                        ...(errors.message ? inputErrorStyle : inputStyle),
                        resize: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={handleFocus}
                      onBlur={(e) => handleBlur(e, errors.message)}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <div
                      className="text-red-400 text-xs p-3 rounded-lg"
                      style={{ background: "rgba(220,38,38,0.1)" }}
                    >
                      {submitError}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 btn-gold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          role="img"
                          aria-label="Loading"
                        >
                          <title>Loading</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
