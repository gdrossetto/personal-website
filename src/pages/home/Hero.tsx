import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Hero({ scrollToSection }) {
  return (
    <section className="px-6 md:px-24 pt-12 pb-12  flex flex-col-reverse md:flex-row items-center justify-between bg-[#0A1124] text-white font-mono tracking-tight">
      <div className="w-full md:w-1/2 md:text-left">
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            <span className="neon-green">Soluções Digitais </span>
            para Impulsionar seu Negócio
          </h1>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl">
            Com experiência adquirida em projetos de empresas globais como{" "}
            <span className="neon-green"> Banco Itaú</span> e{" "}
            <span className="neon-green"> Booking.com</span>, a GR Web Solutions
            oferece soluções personalizadas para empresas de todos os tamanhos.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://wa.link/r9j769"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 neon-border font-semibold rounded-lg transition neon-text"
            >
              Entrar em Contato
            </a>
            <button
              onClick={() => scrollToSection()}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A1124] transition"
            >
              Nossas Soluções
            </button>
          </div>
        </div>
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
