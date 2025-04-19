import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Hero({ scrollToSection }) {
  return (
    <section className="px-6 md:px-24 pt-12 pb-12 flex flex-col-reverse md:flex-row items-center justify-between bg-[#0A1124] text-white">
      <div className="w-full md:w-1/2 md:text-left">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Hi, I'm <span className="neon-green">Gabriel Rossetto</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
            Software Engineer
          </h2>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl">
            I build modern web applications with a focus on user experience and
            performance. Specialized in React, TypeScript, and full-stack
            development.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 border-2 neon-border font-semibold rounded-lg transition neon-text"
            >
              Get in Touch
            </a>
            <button
              onClick={() => scrollToSection()}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A1124] transition"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-sm md:max-w-lg h-[300px] md:h-[500px]">
          <Lottie
            className="w-full h-full"
            animationData={animationData}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}
