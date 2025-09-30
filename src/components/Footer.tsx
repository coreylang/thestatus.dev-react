import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // show after 200px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-black text-white px-6 py-10 text-sm border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} The Status. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link: any) => !link.reactLink ? (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-brand-light transition-colors no-underline"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className="text-gray-300 hover:text-brand-light transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 px-4 py-2 bg-brand text-white rounded-full shadow-lg hover:bg-brand-light transition-all duration-500 text-sm ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        ↑ Top
      </button>
    </footer>
  );
};

export default Footer;
