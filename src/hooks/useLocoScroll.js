"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    // Initialize Locomotive Scroll
    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
      smartphone: {
        smooth: true,
        breakpoint: 767,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
    });

    // Handle window resize
    const handleResize = () => {
      locoScroll.update();
    };

    // Update scroll on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (locoScroll) {
        window.removeEventListener("resize", handleResize);
        locoScroll.destroy();
      }
    };
  }, [start]);
}
