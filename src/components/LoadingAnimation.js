"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingAnimation = ({ loadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hideBackground, setHideBackground] = useState(false);
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
      // Start scale down animation after 300ms (reduced from 500ms)
      setTimeout(() => setIsLoading(false), 300);
      // Hide background after scale down completes (reduced from 1300ms)
      setTimeout(() => setHideBackground(true), 1000);
    }
  }, [loadingComplete]);

  return (
    <>
      {!hideBackground && (
        <div className={`fixed inset-0 z-50 transition-all duration-500 ${
          isLoading ? "bg-black/90" : "bg-black/0 backdrop-blur-0"
        }`}>
          <div className={`fixed w-32 h-32 sm:w-48 sm:h-48 origin-center transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isLoading
              ? "scale-100 top-12 left-88 -translate-x-0 -translate-y-0"
              : `${isMobile ? "scale-[0.3]" : "scale-[0.4]"} top-24 right-12 -translate-x-0 -translate-y-0`
          }`}>
            {/* Rotating Outer Part */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${
              isLoading ? "opacity-100" : "opacity-0"
            }`}>
              <div className="animate-[spin_8s_linear_infinite]">
                <Image
                  src="/logo-outer.png"
                  alt="Outer Part"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Static Outer with Rotating Inner */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}>
              <Image
                src="/logo-outer.png"
                alt="Outer Part"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-1/2 h-1/2 animate-[spin_8s_linear_infinite]">
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
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;