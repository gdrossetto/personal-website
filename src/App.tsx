import { useEffect, useState } from "react";
import "./App.css";
import animationData from "./assets/animation.json";
import Lottie from "lottie-react";
import gr from "./assets/GRlogo.png";
import solutions1 from "./assets/solutions1.jpg";
import solutions2 from "./assets/digitalmarketing.jpg";
import solutions3 from "./assets/responsive.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 flex justify-between items-center p-6 md:px-24 sticky top-0 z-50 border-b border-green-400 font-mono">
      {/* Logo */}
      <div className="text-green-400 font-bold">
        <img className="w-40 h-8" src={gr} alt="GR Web Solutions" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isOpen ? "flex border-b border-green-400" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 
        fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 z-40`}
      >
        <a href="#about" className="text-gray-400 hover:text-green-400">
          Soluções
        </a>
        <a href="#experience" className="text-gray-400 hover:text-green-400">
          Quem Somos
        </a>
        <button className="border border-green-400 px-4 py-2 text-green-400 hover:bg-green-400 hover:text-gray-900">
          Contato
        </button>
      </nav>
    </header>
  );
}

// @ts-ignore
function Hero({ scrollToSection }) {
  return (
    <section className="px-6 md:px-24 pt-12 pb-12  flex flex-col-reverse md:flex-row items-center justify-between bg-gray-900 text-white font-mono">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          Soluções Digitais para Impulsionar seu Negócio!
        </h1>

        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Com experiência adquirida em projetos de empresas globais como
          <span className="text-green-400"> Banco Itaú</span> e
          <span className="text-green-400"> Booking.com</span>, a GR Web
          Solutions oferece soluções personalizadas para empresas de todos os
          tamanhos.
        </p>

        <button
          onClick={scrollToSection}
          className="border border-green-400 px-6 py-3 mt-6 text-green-400 hover:bg-green-400 hover:text-gray-900 cursor-pointer"
        >
          Conheça nossas soluções
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Lottie
          className="w-full max-w-sm md:max-w-lg mx-auto"
          animationData={animationData}
          loop={true}
        />
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Desenvolvimento de Websites Personalizados",
      description:
        "Crie uma presença online forte com um site moderno, responsivo e otimizado. Desenvolvido sob medida para atender às necessidades específicas do seu negócio.",
      image: solutions1,
    },
    {
      title: "Landing Pages para Campanhas",
      description:
        "Aumente suas conversões com landing pages personalizadas. Ideal para lançamentos de produtos, eventos e campanhas de marketing.",
      image: solutions2,
    },
    {
      title: "Otimização e Manutenção de Sites",
      description:
        "Garanta o melhor desempenho do seu site. Realizamos otimizações para aumentar a velocidade, melhorar o SEO e garantir uma experiência impecável.",
      image: solutions3,
    },
    {
      title: "Consultoria em Desenvolvimento Web",
      description:
        "Precisa de orientação técnica para seu projeto? Com nossa consultoria, você terá apoio especializado para tomar as melhores decisões em tecnologia.",
      image: solutions1,
    },
  ];

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
      <section id="solucoes" className="px-6 md:px-24 py-24">
        <h2 className="mb-24 text-center font-mono text-6xl font-bold text-gray-900 tracking-tight">
          <span className="text-green-400">Nossas Soluções_</span>
        </h2>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={`mb-18 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 object-cover rounded-lg"
              />
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
                  {service.title}
                </h3>
                <hr className="border-2 border-green-400 my-8 w-1/2" />
                <p className="text-gray-400 font-normal text-lg md:text-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
