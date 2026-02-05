"use client";

import { useState } from "react";
import { FiDatabase, FiCloud, FiCode, FiTool } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolioData";

const iconMap = {
  database: FiDatabase,
  cloud: FiCloud,
  code: FiCode,
  tools: FiTool,
};

const SkillBar = ({ skill, delay, inView }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-dark-200 font-medium text-sm">{skill.name}</span>
        <span className="text-primary-400 text-sm font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${delay * 100}ms`,
            transition: "width 1s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const technologies = [
    "Python",
    "SQL",
    "Scala",
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "dbt",
    "Snowflake",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
    "Delta Lake",
    "Git",
    "FastAPI",
  ];

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-dark-900/50"
    >
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-coral/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-coral mx-auto rounded-full mb-4"></div>
          <p className="text-dark-400 max-w-2xl mx-auto">
            My technical toolkit for building scalable data infrastructure and
            processing systems
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.categories.map((category, index) => {
                const Icon = iconMap[category.icon];
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-gradient-to-r from-primary-500 to-accent-orange text-dark-950 font-semibold"
                        : "bg-dark-800/50 text-dark-400 hover:text-dark-200 hover:bg-dark-800"
                    }`}
                  >
                    <Icon className="mr-2" size={16} />
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30">
              <div className="flex items-center space-x-3 mb-6">
                {(() => {
                  const Icon =
                    iconMap[skills.categories[activeCategory].icon];
                  return (
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-orange/20 flex items-center justify-center">
                      <Icon className="text-primary-400" size={20} />
                    </div>
                  );
                })()}
                <h3 className="text-lg font-semibold text-dark-100">
                  {skills.categories[activeCategory].name}
                </h3>
              </div>
              <div>
                {skills.categories[activeCategory].skills.map(
                  (skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={index}
                      inView={inView}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-dark-100 mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-dark-800/50 border border-dark-700/50 text-dark-300 text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-dark-800/30 border border-dark-700/30">
              <h4 className="text-dark-200 font-semibold mb-4">
                Typical Data Flow I Build
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <div className="px-3 py-2 rounded-lg bg-accent-sage/10 border border-accent-sage/30 text-accent-sage">
                  Sources
                </div>
                <span className="text-dark-500">&rarr;</span>
                <div className="px-3 py-2 rounded-lg bg-primary-500/10 border border-primary-500/30 text-primary-400">
                  Ingestion
                </div>
                <span className="text-dark-500">&rarr;</span>
                <div className="px-3 py-2 rounded-lg bg-accent-purple/10 border border-accent-purple/30 text-accent-purple">
                  Processing
                </div>
                <span className="text-dark-500">&rarr;</span>
                <div className="px-3 py-2 rounded-lg bg-accent-pink/10 border border-accent-pink/30 text-accent-pink">
                  Storage
                </div>
                <span className="text-dark-500">&rarr;</span>
                <div className="px-3 py-2 rounded-lg bg-accent-orange/10 border border-accent-orange/30 text-accent-orange">
                  Analytics
                </div>
              </div>
              <p className="text-dark-500 text-xs text-center mt-4">
                Kafka &bull; Spark &bull; Airflow &bull; Snowflake &bull; dbt
                &bull; BI Tools
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-800/30 border border-dark-700/30 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                <div className="text-dark-400 text-sm">Technologies</div>
              </div>
              <div className="p-4 rounded-xl bg-dark-800/30 border border-dark-700/30 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-dark-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
