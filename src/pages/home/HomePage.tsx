import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./Hero.tsx";
import { Solutions } from "./Solutions.tsx";
import BlogSection from "./BlogSection.tsx";
import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import Values from "./Values.tsx";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("solucoes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <Hero scrollToSection={scrollToSection} />
      <Values />
      <Solutions />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default HomePage;
