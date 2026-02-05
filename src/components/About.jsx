"use client";

import Image from "next/image";
import {
  FiCheck,
  FiDownload,
  FiCode,
  FiDatabase,
  FiCloud,
  FiCpu,
} from "react-icons/fi";
import {
  aboutMe,
  personalInfo,
  education,
  certifications,
} from "@/data/portfolioData";

const About = () => {
  const services = [
    {
      icon: FiDatabase,
      title: "Data Pipeline Development",
      description:
        "Building robust ETL/ELT pipelines that process billions of records with reliability and efficiency.",
    },
    {
      icon: FiCloud,
      title: "Cloud Architecture",
      description:
        "Designing scalable data infrastructure on AWS, GCP, and Azure with cost optimization.",
    },
    {
      icon: FiCpu,
      title: "Real-Time Processing",
      description:
        "Implementing streaming solutions with Kafka, Spark Streaming, and Flink for low-latency insights.",
    },
    {
      icon: FiCode,
      title: "Data Platform Design",
      description:
        "Creating modern data platforms with data lakes, warehouses, and lakehouse architectures.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-coral mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-coral rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-coral rounded-xl"></div>
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/profile.jpg"
                        alt="Kanishka Parganiha"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-100">
                      {personalInfo.name}
                    </h3>
                    <p className="text-primary-400 font-medium">
                      {personalInfo.title}
                    </p>
                    <p className="text-dark-400 text-sm mt-1">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {aboutMe.bio.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-dark-300 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-dark-700/50">
                  <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
                    Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {aboutMe.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <FiCheck className="text-primary-400 flex-shrink-0" />
                        <span className="text-dark-300 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={personalInfo.resumeLink}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-orange/10 border border-primary-500/30 text-primary-400 font-medium hover:border-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-dark-800/30 border border-dark-700/30">
                <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h5 className="text-dark-100 font-medium">
                        {edu.degree}
                      </h5>
                      <p className="text-primary-400 text-sm">{edu.school}</p>
                      <p className="text-dark-500 text-xs">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-dark-800/30 border border-dark-700/30">
                <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-4">
                  Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-dark-200 text-sm font-medium">
                          {cert.name}
                        </p>
                        <p className="text-dark-500 text-xs">
                          {cert.issuer} &bull; {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dark-100 mb-2">
                What I Do
              </h3>
              <p className="text-dark-400">
                I specialize in building data infrastructure that enables
                organizations to derive value from their data.
              </p>
            </div>

            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-dark-800/30 border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-dark-100 font-semibold mb-1">
                        {service.title}
                      </h4>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-dark-800/50 border border-dark-700/50">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-dark-500 text-xs ml-2">pipeline.py</span>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code>
                  <span className="text-accent-purple">class</span>{" "}
                  <span className="text-primary-400">DataPipeline</span>:
                  {"\n"}
                  {"    "}
                  <span className="text-accent-purple">def</span>{" "}
                  <span className="text-primary-400">__init__</span>(
                  <span className="text-accent-orange">self</span>):{"\n"}
                  {"        "}self.spark = SparkSession.builder
                  {"\n"}
                  {"        "}self.kafka = KafkaConsumer()
                  {"\n"}
                  {"        "}self.warehouse = Snowflake()
                  {"\n\n"}
                  {"    "}
                  <span className="text-accent-purple">def</span>{" "}
                  <span className="text-primary-400">transform</span>(
                  <span className="text-accent-orange">self</span>, data):
                  {"\n"}
                  {"        "}
                  <span className="text-dark-500">
                    {"// Magic happens here"}
                  </span>
                  {"\n"}
                  {"        "}
                  <span className="text-accent-purple">return</span> insights
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
