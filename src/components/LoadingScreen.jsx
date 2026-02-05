"use client";

import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-[100]">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 border-r-accent-coral rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-transparent border-b-accent-orange rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary-400 font-bold text-lg">K</span>
          </div>
        </div>
        <p className="text-dark-400 font-mono text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
