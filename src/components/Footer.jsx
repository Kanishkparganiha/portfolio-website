"use client";

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
    ],
    more: [
      { name: "Experience", href: "#experience" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
      { name: "Resume", href: personalInfo.resumeLink },
    ],
  };

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    {
      icon: FiLinkedin,
      href: personalInfo.social.linkedin,
      label: "LinkedIn",
    },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: "Twitter" },
    {
      icon: FiMail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg"></div>
                <span className="relative font-bold text-white text-lg">
                  K
                </span>
              </div>
              <span className="font-bold text-xl text-dark-100">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-dark-400 text-sm mb-6 max-w-md">
              {personalInfo.title} passionate about building scalable data
              infrastructure. Let&apos;s connect and create something amazing
              together.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon
                    className="text-dark-400 group-hover:text-primary-400 transition-colors"
                    size={18}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-dark-200 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-dark-200 font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {footerLinks.more.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">
              &copy; {currentYear} {personalInfo.name}. Built with{" "}
              <FiHeart className="inline text-red-500 mx-1" size={14} />
              using Next.js & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all">
                <FiArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-radial from-primary-500/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
