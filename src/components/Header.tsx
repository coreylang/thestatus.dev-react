import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icon set
import headerLogoBlack from "../assets/header_logo_black.png";
import headerLogoWhite from "../assets/header_logo_white.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // change header background etc...
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // close menu if scrolling
      setMenuOpen(false);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const links: any = [];
  if (!(location.pathname).includes('demo')) {
    links.push({ label: "Home", href: "#home", reactLink: false });
    links.push({ label: "How It Works", href: "#features", reactLink: false });
    links.push({ label: "FAQ", href: "#faq", reactLink: false });
    links.push({ label: "How To Setup", href: "#setup", reactLink: false });
    links.push({ label: "Demo", href: `${import.meta.env.BASE_URL}demo`, reactLink: false });
  } else {
    links.push({ label: "Home", href: "/", reactLink: true })
    links.push({ label: "Demo", href: `${import.meta.env.BASE_URL}demo`, reactLink: true });
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-200 shadow-md text-black"
          : "bg-transparent border-b border-transparent text-white"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <img src={!scrolled ? !(location.pathname).includes('demo') ? headerLogoWhite : headerLogoBlack : headerLogoBlack} alt="The Status" width="120" />
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`absolute left-5 right-5 overflow-hidden transition-all duration-500 ease-in-out ml-2 mr-2 rounded-bl-lg rounded-br-lg shadow-2xl ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 bg-white shadow-inner border-t border-gray-200 text-right">
          {links.map((link: any, idx: any) => !link.reactLink ? (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`transform transition-transform duration-500 ease-out ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              } text-lg font-semibold text-var(--color-brand) hover:text-brand no-underline hover:border-b-2 hover:border-var(--color-brand)`}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className={`transform transition-transform duration-500 ease-out ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              } text-lg font-semibold text-var(--color-brand) hover:text-brand no-underline hover:border-b-2 hover:border-var(--color-brand)`}
              onClick={() => setMenuOpen(false)}
            >{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
