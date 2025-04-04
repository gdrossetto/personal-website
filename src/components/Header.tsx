import { useState } from "react";
import gr from "../assets/GRlogo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 flex justify-between items-center p-6 md:px-24 sticky top-0 z-50 border-b border-green-400 font-mono">
      {/* Logo */}
      <div
        className="text-green-400 font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-40 h-8" src={gr} alt="GR Web Solutions" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-400 focus:outline-none px-6" // Add px-6 to the button for padding
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
    fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-6 md:p-0 z-40 px-6 md:px-24`} // Add px-6 and md:px-24 for padding
      >
        <a href="#about" className="text-white hover:text-green-400">
          Soluções
        </a>
        <a href="#experience" className="text-white hover:text-green-400">
          Quem Somos
        </a>
        <button className="border border-green-400 px-4 py-2 text-green-400 hover:bg-green-400 hover:text-gray-900 rounded-sm">
          Contato
        </button>
      </nav>
    </header>
  );
}
