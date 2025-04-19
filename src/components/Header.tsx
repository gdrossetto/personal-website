import { useState, useEffect, useRef } from "react";
import gr from "../assets/GRlogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
        className="md:hidden neon-green focus:outline-none p-2 hover:text-green-400 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={`${
          isOpen ? "flex border-b neon-border-only" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 
    fixed md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-[#0A1124] md:bg-transparent p-6 md:p-0 z-40 px-6 md:px-24 mt-2`}
      >
        <a
          href="#about"
          onClick={(e) => handleNavigation("about", e)}
          className="text-white hover:text-green-400"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavigation("projects", e)}
          className="text-white hover:text-green-400"
        >
          Projects
        </a>
        <a
          href="#blog"
          onClick={(e) => handleNavigation("blog", e)}
          className="text-white hover:text-green-400"
        >
          Blog
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavigation("contact", e)}
          className="px-6 py-2 border-2 neon-border font-semibold rounded-lg transition neon-text"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
