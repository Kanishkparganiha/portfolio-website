"use client";

import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronRight,
  FiLayers,
} from "react-icons/fi";
import { projects } from "@/data/portfolioData";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-dark-800/30 border border-dark-700/30 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>

        <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-dark-900/80 backdrop-blur-sm flex items-center justify-center">
          <span className="text-primary-400 font-mono font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div
          className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-dark-900/80 backdrop-blur-sm flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-primary-500/20 transition-colors"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-dark-900/80 backdrop-blur-sm flex items-center justify-center text-dark-300 hover:text-primary-400 hover:bg-primary-500/20 transition-colors"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 rounded-md bg-dark-700/50 text-dark-300 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {project.highlights.map((highlight, hIndex) => (
            <div key={hIndex} className="flex items-center space-x-2 text-sm">
              <FiChevronRight
                className="text-primary-500 flex-shrink-0"
                size={14}
              />
              <span className="text-dark-300">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4"></div>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A selection of data engineering projects showcasing my expertise in
            building scalable data infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-300 font-medium hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
            >
              <FiLayers className="mr-2" />
              {showAll
                ? "Show Less"
                : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-4 rounded-2xl bg-dark-800/30 border border-dark-700/30">
            <FiGithub className="text-dark-400 mr-3" size={24} />
            <div className="text-left mr-4">
              <p className="text-dark-200 font-medium">Want to see more?</p>
              <p className="text-dark-500 text-sm">
                Check out my GitHub for more projects
              </p>
            </div>
            <a
              href="https://github.com/Kanishkparganiha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-400 font-medium hover:bg-primary-500/20 transition-colors"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
