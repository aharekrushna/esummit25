import React, { useEffect, useState, useRef } from "react";
import { Banknote } from "lucide-react";
import Image from "next/image";

const getRandomPosition = () => Math.floor(Math.random() * 100) + 1; // Random X position
const getRandomSpeed = () => Math.random() * (20 - 5) + 5; // Random speed

const Loading = ({ visible }) => {
    const stockBar = useRef(null);

    useEffect(() => {
        const spawn = () => {
            const stock = stockBar.current;
            const circle = document.createElement('div');
            circle.style.position = 'absolute';
            circle.style.width = '10px';
            circle.style.height = '10px';
            circle.style.backgroundColor = '#ffd35b';
            circle.style.left = stock.offsetLeft + 'px';
            circle.style.right = stock.offsetTop + 'px';

            console.log(stock.offsetLeft, stock.offsetTop);
            const parent = document.getElementById('#path-parent');
            parent.appendChild(circle);
        }

        const other = () => {
            spawn();
            setTimeout(other, 500);
        }

        // setTimeout(other, 500);
    }, [stockBar]);
    
  return (
    <div className={`fixed h-screen w-screen bg-black flex items-center justify-center z-[1000] ${ visible ? 'block' : 'hidden' }`}>
        <div className="absolute bg-gradient-to-b from-yellow-600 to-transparent rounded-full blur-3xl opacity-20 w-[30vw] h-[30vh]" />
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48">
            <div className="relative w-full h-full flex flex-col gap-12">
              <Image src='/assets/esummit.png' width={1000} height={500} className="object-fit" />
              <div className="relative w-full h-full h-16">
                <div className="absolute bottom-0 w-full h-1 bg-yellow-400 animate-grow-bar"></div>
                <div ref={stockBar} className="absolute bottom-0 left-0 w-4 h-4 bg-yellow-400 animate-stock-bar"></div>
                <div id='path-parent' className="relative w-full h-full"></div>
              </div>
            </div>
          </div>

          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${getRandomPosition()}%`,
                animation: `float ${getRandomSpeed()}s linear infinite`,
              }}
            >
              <div className="text-yellow-400 text-4xl opacity-25 animate-spin"
              ><Banknote /></div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Loading;
