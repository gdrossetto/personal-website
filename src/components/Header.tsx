import { useState, useEffect, useRef } from "react";
import gr from "../assets/GRlogo.png";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close menu when a link is clicked
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-[#0A1124] flex justify-between items-center p-6 md:px-24 sticky top-0 z-50 border-b border-green-400 titillium-web">
      {/* Logo */}
      <div
        className="neon-text font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-40 h-8" src={gr} alt="GR Web Solutions" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden neon-green focus:outline-none px-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={`${
          isOpen ? "flex border-b neon-border-only" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 
    fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0A1124] md:bg-transparent p-6 md:p-0 z-40 px-6 md:px-24`}
      >
        <a
          href="#solucoes"
          onClick={(e) => handleNavigation("solucoes", e)}
          className="text-white hover:text-green-400"
        >
          Soluções
        </a>
        <a
          href="#sobre"
          onClick={(e) => handleNavigation("sobre", e)}
          className="text-white hover:text-green-400"
        >
          Quem Somos
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/4kqjmf"
          className="px-6 py-2 border-2 neon-border font-semibold rounded-lg transition neon-text"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
