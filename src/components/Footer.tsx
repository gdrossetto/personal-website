import gr from "../assets/GRlogo.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-16 titillium-web">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-2/8 mb-12">
          <img className="w-40 h-8" src={gr} alt="Gabriel Rossetto" />
          <p className="mt-4 text-white text-sm">
            Software Engineer specializing in modern web development. Building
            scalable applications with React, TypeScript, and Node.js.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-2/8 mb-12">
          <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#about" className="hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-2/8 mb-12">
          <h3 className="text-lg font-semibold text-green-400">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Gabriel Rossetto. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
