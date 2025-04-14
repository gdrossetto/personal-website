import gr from "../assets/GRlogo.png";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16 titillium-web">
      <div className="container mx-auto flex flex-col md:flex-row justify-between ">
        {/* Logo and Description */}
        <div className="w-full md:w-2/8 mb-12">
          <img className="w-40 h-8" src={gr} alt="GR Web Solutions" />
          <p className="mt-4 text-white text-sm">
            Crie experiências digitais impactantes e impulsione o seu negócio
            com nossos serviços personalizados.
          </p>
          {/*<div className="mt-6 flex items-center">*/}
          {/*  <input*/}
          {/*    type="email"*/}
          {/*    placeholder="Digite seu email aqui"*/}
          {/*    className="py-3 px-4 border placeholder-white border-green-400 rounded-l-lg w-full h-10"*/}
          {/*  />*/}
          {/*  <button className="bg-green-400 text-gray-900 text-sm px-4 h-full flex items-center justify-center rounded-r-lg">*/}
          {/*    Vamos conversar*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>

        {/* Company Links */}
        <div className="w-full md:w-2/8 mb-12">
          <h3 className="text-lg font-semibold text-green-400">Empresa</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#sobre" className="hover:text-green-400">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#solucoes" className="hover:text-green-400">
                Soluções
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.link/4kqjmf"
                className="hover:text-green-400"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-2/8 mb-12">
          <h3 className="text-lg font-semibold text-green-400">
            Redes sociais
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.link/4kqjmf"
                className="hover:text-green-400"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-green-400" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/gr_websolutions"
                className="hover:text-green-400"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedinIn className="text-green-400" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/gr-web-solution"
                className="hover:text-green-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm">
        2025 © GR Web Solutions. Criado e desenvolvido com carinho (e React).
      </div>
    </footer>
  );
};
