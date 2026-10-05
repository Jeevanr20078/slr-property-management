import { Toaster } from "@/components/ui/sonner";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="font-body">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
