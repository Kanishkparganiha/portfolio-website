"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo, stats } from "@/data/portfolioData";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl floating-delay-2"></div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-800/50 border border-dark-700/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-dark-300 text-sm">
              Available for opportunities
            </span>
          </div>

          {/* Profile Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-purple rounded-full blur-sm opacity-60"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dark-700/50">
              <Image
                src="/profile-2.jpg"
                alt="Kanishka Parganiha"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="text-dark-100">Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-400">
              {personalInfo.title}
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <div className="h-12 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-dark-300 font-mono">
              <span className="text-accent-cyan">&gt; </span>
              {typedText}
              <span className="animate-pulse text-primary-500">|</span>
            </p>
          </div>

          <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#projects" className="btn-primary group">
              <span className="flex items-center">
                View My Work
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-16">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              <FiGithub
                className="text-dark-400 group-hover:text-primary-400 transition-colors"
                size={22}
              />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              <FiLinkedin
                className="text-dark-400 group-hover:text-primary-400 transition-colors"
                size={22}
              />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            >
              <FiMail
                className="text-dark-400 group-hover:text-primary-400 transition-colors"
                size={22}
              />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group p-4 rounded-xl bg-dark-800/30 border border-dark-700/30 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center text-dark-400 hover:text-primary-400 transition-colors group"
          >
            <span className="text-xs mb-2 opacity-60">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
