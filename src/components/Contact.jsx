"use client";

import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCheckCircle,
} from "react-icons/fi";
import { personalInfo } from "@/data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    {
      icon: FiLinkedin,
      href: personalInfo.social.linkedin,
      label: "LinkedIn",
    },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-dark-900/50"
    >
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-coral/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-coral mx-auto rounded-full mb-4"></div>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-dark-800/30 border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-dark-200 hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-200">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-dark-200 font-semibold mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon
                      className="text-dark-400 group-hover:text-primary-400 transition-colors"
                      size={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-orange/10 border border-primary-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-medium text-sm">
                  Available for opportunities
                </span>
              </div>
              <p className="text-dark-400 text-sm">
                I&apos;m currently open to new data engineering roles and
                interesting projects. Let&apos;s discuss how I can help!
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative p-6 md:p-8 rounded-2xl bg-dark-800/30 border border-dark-700/30">
              {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center bg-dark-800/95 rounded-2xl z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <FiCheckCircle className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-400">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon!
                    </p>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-dark-100 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-dark-300 text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-dark-300 text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-dark-300 text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-dark-300 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
