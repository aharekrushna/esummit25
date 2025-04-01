"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingAnimation = ({ loadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [hideLoader, setHideLoader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => 
      setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      // Start fade out animation
      setOpacity(0);
      // Remove from DOM after animation completes
      setTimeout(() => setHideLoader(true), 500);
    }
  }, [loadingComplete]);

  
  if (hideLoader) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48">
       
        <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite]">
          <Image
            src="/logo-outer.png"
            alt="Outer Part"
            fill
            className="object-contain"
          />
        </div>

        
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-1/2 h-1/2">
            <Image
              src="/logo-center.png"
              alt="Center Part"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;




