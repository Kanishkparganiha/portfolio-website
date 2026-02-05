"use client";

import { FiClock, FiArrowRight, FiBookOpen } from "react-icons/fi";
import { blogPosts } from "@/data/portfolioData";

const BlogCard = ({ post, featured = false }) => {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-dark-800/30 border border-dark-700/30 hover:border-primary-500/30 transition-all duration-300 card-hover ${
        featured ? "md:col-span-2 md:flex" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "md:w-1/2" : "h-48"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary-500/80 backdrop-blur-sm text-white text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>

      <div
        className={`p-6 ${
          featured
            ? "md:w-1/2 md:flex md:flex-col md:justify-center"
            : ""
        }`}
      >
        <div className="flex items-center space-x-4 text-dark-500 text-sm mb-3">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center">
            <FiClock className="mr-1" size={12} />
            {post.readTime}
          </span>
        </div>

        <h3
          className={`font-bold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`text-dark-400 text-sm leading-relaxed mb-4 ${
            featured ? "" : "line-clamp-2"
          }`}
        >
          {post.excerpt}
        </p>

        <a
          href={post.link}
          className="inline-flex items-center text-primary-400 font-medium text-sm group/link hover:text-primary-300 transition-colors"
        >
          Read Article
          <FiArrowRight
            className="ml-2 transform group-hover/link:translate-x-1 transition-transform"
            size={14}
          />
        </a>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-coral/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-coral mx-auto rounded-full mb-4"></div>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Sharing insights and learnings from building data systems at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.slice(0, 4).map((post, index) => (
            <BlogCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>

        <div className="mt-16">
          <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-coral/10 to-accent-pink/10"></div>
            <div className="absolute inset-0 bg-dark-800/50 backdrop-blur-sm"></div>
            <div className="absolute inset-0 border border-dark-700/50 rounded-2xl"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-coral flex items-center justify-center flex-shrink-0">
                  <FiBookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-100 mb-1">
                    Stay Updated
                  </h3>
                  <p className="text-dark-400 text-sm">
                    Get notified when I publish new articles about data
                    engineering
                  </p>
                </div>
              </div>

              <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input w-full sm:w-64"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-300 font-medium hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
          >
            <FiBookOpen className="mr-2" />
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
