"use client";

import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";
import { experience } from "@/data/portfolioData";

const ExperienceCard = ({ exp, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } mb-8 md:mb-0`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-purple md:hidden"></div>

      <div className="absolute left-0 top-6 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-500 border-4 border-dark-900 md:hidden z-10"></div>

      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12"
        } pl-6 md:pl-0`}
      >
        <div className="group relative p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300 card-hover">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 to-accent-purple/0 group-hover:from-primary-500/10 group-hover:to-accent-purple/10 rounded-2xl transition-all duration-300"></div>

          <div className="relative">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-mono mb-3`}
            >
              <FiCalendar className="mr-1.5" size={12} />
              {exp.period}
            </div>

            <h3 className="text-xl font-bold text-dark-100 mb-1">
              {exp.role}
            </h3>
            <div
              className={`flex items-center ${
                isEven ? "md:justify-end" : ""
              } space-x-2 text-dark-400 mb-3`}
            >
              <FiBriefcase size={14} />
              <span>{exp.company}</span>
              <span className="text-dark-600">&bull;</span>
              <FiMapPin size={14} />
              <span>{exp.location}</span>
            </div>

            <p className="text-dark-400 text-sm mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-2">
              {exp.achievements.map((achievement, aIndex) => (
                <div
                  key={aIndex}
                  className={`flex items-start ${
                    isEven ? "md:flex-row-reverse md:text-right" : ""
                  } space-x-2 ${isEven ? "md:space-x-reverse" : ""}`}
                >
                  <FiCheck
                    className="text-primary-400 flex-shrink-0 mt-0.5"
                    size={14}
                  />
                  <span className="text-dark-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple border-4 border-dark-900 z-10 group-hover:scale-125 transition-transform"></div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-dark-900/50"
    >
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4"></div>
          <p className="text-dark-400 max-w-2xl mx-auto">
            My professional journey building data infrastructure across various
            industries
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-pink"></div>

          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
              <span className="text-2xl">&#x1F680;</span>
            </div>
            <h4 className="text-dark-100 font-semibold mb-2">Career Growth</h4>
            <p className="text-dark-400 text-sm">
              From junior engineer to leading data platform teams, continuously
              leveling up
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
              <span className="text-2xl">&#x1F3E2;</span>
            </div>
            <h4 className="text-dark-100 font-semibold mb-2">
              Industry Expertise
            </h4>
            <p className="text-dark-400 text-sm">
              Experience across finance, healthcare, retail, and technology
              sectors
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
              <span className="text-2xl">&#x1F3AF;</span>
            </div>
            <h4 className="text-dark-100 font-semibold mb-2">Impact Driven</h4>
            <p className="text-dark-400 text-sm">
              Focused on delivering measurable business value through data
              solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
