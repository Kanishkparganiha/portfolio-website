"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/90 backdrop-blur-lg shadow-lg shadow-dark-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="flex items-center space-x-2 group"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-coral rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <span className="relative font-bold text-white text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-dark-100 hidden sm:block">
              {personalInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link px-4 py-2 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiTwitter size={20} />
              </a>
            </div>
            <a
              href={personalInfo.resumeLink}
              className="btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-dark-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t border-dark-700/50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="container-custom py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-3 text-dark-300 hover:text-primary-400 transition-colors border-b border-dark-700/30"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4 pt-4">
            <div className="flex items-center space-x-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FiTwitter size={22} />
              </a>
            </div>
            <a
              href={personalInfo.resumeLink}
              className="btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
