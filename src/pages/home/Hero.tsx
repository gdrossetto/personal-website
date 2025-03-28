import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Hero({ scrollToSection }) {
  return (
    <section className="px-6 md:px-24 pt-12 pb-12  flex flex-col-reverse md:flex-row items-center justify-between bg-gray-900 text-white font-mono tracking-tight">
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
          className="border-2 rounded-lg border-green-400 px-6 py-3 mt-6 text-green-400 hover:bg-green-400 hover:text-gray-900 cursor-pointer"
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
