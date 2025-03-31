"use client";
import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import EventCard from './EventCard'; // Import the new component
import { events } from '@/constants';

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-x-hidden p-12 mx-20">
      <div
        ref={carouselRef}
        className="flex gap-25 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((it) => (
            <EventCard
              logo={it.logo}
              title={it.title}
              desc={it.desc}
              reg_url={it.reg_url}
              details_url={it.details_url}
            />
        ))}
      </div>
      {events.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
            disabled={currentIndex === 0}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
            disabled={currentIndex === events.length - 1}
          >
            <ArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default EventCarousel;