import React, { useEffect } from "react";
import styles from "./parallax.module.css";
import Gallery from "./Gallery";
import Image from "next/image";
import Link from 'next/link';

function Parallax() {
  useEffect(() => {
    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-rise");
          entry.target.style.opacity = "1";
        }
      });
    };

    const observer = new IntersectionObserver(startAnimation, {
      threshold: 0.1,
    });
    document
      .querySelectorAll(".anim-rise")
      .forEach((el) => observer.observe(el));

    const ticker = document.querySelector(".stock-ticker");
    if (ticker) {
      ticker.innerHTML += ticker.innerHTML.repeat(3);
      ticker.style.animation = "marquee 40s linear infinite";
    }
    const goldOverlay = document.querySelector(".gold-overlay");
    if (goldOverlay) {
      goldOverlay.style.animation = "gold-pulse 4s ease-in-out infinite";
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} data-parallax="container">
      <header className={styles.group} data-parallax="group">
        <div className="absolute inset-0 flex items-end pb-50 justify-center z-10">
          <div className="relative w-full max-w-4xl">
            <div className="relative z-20 p-2 pb-30">
              <Image
                src="/assets/esummit.png"
                width={9795}
                height={4500}
                className="drop-shadow-[0_0_50px_rgba(255,211,91,0.9)]"
                alt="E-Summit Logo"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center p-8 bg-gradient-to-t z-[100] from-black via-black/80 to-transparent">
          <Link href="https://unstop.com/college-fests/e-summit-2025-veer-surendra-sai-university-of-technology-vssut-odisha-365189" target="blank"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 hover:shadow-glow hover:rotate-1 group relative overflow-hidden">
            <span className="relative z-10">Join the Wolf Pack</span>
            <div className="absolute -inset-2 rounded-full border-2 border-yellow-400 animate-ping-slow opacity-0 group-hover:opacity-50"></div>
          </Link>
        </div>

        <div
          className={`${styles.layer} group hover:brightness-75 transition-all duration-500`}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{
            backgroundImage: `url('./assets/images/1.jpg')`,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-10deg) saturate(400%)",
          }}
          data-image="captain-america"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{
            backgroundImage: `url('./assets/images/3.jpg')`,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-10deg) saturate(400%)",
          }}
          data-image="scarlet-witch"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{
            backgroundImage: `url('./assets/images/5.jpg')`,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-10deg) saturate(400%)",
          }}
          data-image="black-widow"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{
            backgroundImage: `url('./assets/images/4.jpg')`,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-10deg) saturate(400%)",
          }}
          data-image="vision"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{
            backgroundImage: `url('./assets/images/2.jpg')`,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-10deg) saturate(400%)",
          }}
          data-image="iron-man"
        ></div>
      </header>

      <section id='preamble' className={`${styles.preamble} border-b-3 border-amber-500`}>
        <div className="flex flex-col items-center mb-20  ">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4 w-full overflow-hidden">
            <div className="stock-ticker-animation w-full">
              <div className="stock-ticker whitespace-nowrap text-yellow-400 text-xl font-bold px-4 py-2 bg-black/50 backdrop-blur-sm">
                {Array(8)
                  .fill(
                    "ESUMMIT2025 • WOLF OF WALL STREET EDITION • BULLS MAKE MONEY • BEARS MAKE MONEY • PIGS GET SLAUGHTERED • "
                  )
                  .join("")}
              </div>
            </div>
          </div>
          <div className="relative top-30 md:top-0 gold-flare group flex flex-col items-center gap-0 -mt-20">
            <Image
              src="/assets/images/leo.png"
              width={563}
              height={364}
              className="relative bottom-0 "
            />
            <h1 className="text-7xl uppercase text-center font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Welcome to the Jungle
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 mb-10 w-full top-30 pb-25 md:pb-0 md:top-0 max-w-6xl relative group/stat">
            {[
              { number: "2000+", label: "Attendees" },
              { number: "30+", label: "Startups" },
              { number: "10+", label: "Events" },
            ].map((stat, i) => (
              <div
                key={i}
                className="anim-rise relative overflow-hidden bg-yellow-700/50 backdrop-blur-sm border-2 border-yellow-500/30 p-8
                 transform transition-all duration-500 hover:border-yellow-400
                 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 group/stat-item clip-path-wolf"
                style={{
                  opacity: 0,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div className="text-yellow-400 text-6xl font-bold mb-4 relative z-10">
                  <span className="inline-block animate-float-text">
                    {stat.number}
                  </span>
                </div>

                <div
                  className="text-white uppercase tracking-wider text-lg relative pb-2 
                      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                      after:bg-yellow-400 after:transition-all after:duration-500
                      group-hover/stat-item:after:w-full"
                >
                  {stat.label}
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent 
                      opacity-0 group-hover/stat-item:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>

          <p className="text-xl text-white/90 max-w-4xl text-center leading-relaxed hover:text-white transition-colors">
            This year's E-Summit channels the unbridled energy of Jordan
            Belfort's empire. Dive into a world of:
            <span className="block mt-4 text-yellow-400 font-semibold animate-color-cycle">
              High-stakes pitches • Market domination strategies • Networking
              with the sharks •
              <br />
              And the kind of after-parties that legends are made of
            </span>
          </p>
        </div>
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400 opacity-40 animate-float-money"
              style={{
                fontSize: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                filter: `blur(${Math.random() * 3}px)`,
              }}
            >
              $
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-sm overflow-hidden z-40">
          <div className="flex items-center h-full animate-ticker">
            {Array(8)
              .fill(
                "ESUMMIT2025 ▲ WOLF PACK ▼ $TOCKHOLM SYNDROME ▲ BULL MARKET ▼ 501(c)(3) ▲"
              )
              .map((text, i) => (
                <span
                  key={i}
                  className="text-yellow-400 font-mono text-lg tracking-wider whitespace-nowrap mx-8"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className={`${styles.plot} ${styles.group} relative hidden md:block`} style={{paddingBottom: '90vh', marginTop: 0, paddingTop: 0 }}>
        <div className="absolute inset-0 bg-[url('/assets/stocks-bg.png')] opacity-20 mix-blend-overlay animate-scroll"></div>
        <div className={`${styles["plot--content"]} ${styles.layer} relative`} style={{ paddingBottom: '0', marginBottom: '0', paddingTop: '0', marginTop: 0 }}>
          <div className="relative flex flex-col items-center justify-center w-full my-16 -top-43 z-[10]">
            <span className="absolute text-3xl md:text-6xl font-extrabold text-yellow-700/50 blur-lg">
              GALLERY
            </span>
            <h1 className="relative z-10 text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
              GALLERY
            </h1>
            <div className="mt-4 w-24 md:w-1/4 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
          </div>
          <Gallery theme="wolf" />
        </div>
      </section>

      <footer className="relative md:h-screen h-fit overflow-hidden bg-black">
        {/* Animated Golden Border */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute inset-0 border-[2px] border-yellow-500/80 animate-border-glow">
            <div className="absolute inset-0 bg-[url('/assets/gold-texture.png')] mix-blend-overlay opacity-20" />
          </div>
        </div>

        {/* Video Container with Distortion Effect */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover grayscale-[20%] contrast-125 transform group-hover:scale-105 transition-transform duration-1000"
          >
            <source src="./assets/teaser.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-8 right-8 z-10">
            <Image
              src="/assets/esummit.png"
              width={140}
              height={140}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Parallax;

// import React, { useEffect } from 'react';
// import styles from './parallax.module.css';
// import Gallery from './Gallery';
// import Image from 'next/image';

// function Parallax() {
//     useEffect(() => {
//         {
//             const startAnimation = (entries, observer) => {
//               entries.forEach(entry => {
//                 entry.target.classList.toggle("animate-rise", entry.isIntersecting);
//               });
//             };

//             const observer = new IntersectionObserver(startAnimation);
//             const options = { root: null, rootMargin: '0px', threshold: 1.0 };

//             const elements = document.querySelectorAll('.anim-rise');
//             elements.forEach(element =>
//               observer.observe(element, options)
//             );
//         }
//     }, []);

//   return (
//     <div className={styles.container} data-parallax="container">
//       <header className={styles.group} data-parallax="group">
//         <div
//           className={`${styles.layer} ${styles.title}`}
//           data-parallax="layer"
//           data-parallax-speed="front"
//         >
//           <div className='absolute left-0 -top-5 blur-xl w-full h-[40px] bg-black text-black'>.</div>
//           <Image src='/assets/esummit.png' width={9795} height={4500} />
//         </div>
//         <div
//           className={styles.layer}
//           data-parallax="layer"
//           data-parallax-speed="slowest"
//           style={{ backgroundImage: `url('./assets/images/1.jpg')`, filter: 'brightness(50%)' }}
//           data-image="captain-america"
//         ></div>
//         <div
//           className={styles.layer}
//           data-parallax="layer"
//           data-parallax-speed="slower"
//           style={{ backgroundImage: `url('./assets/images/3.jpg')`, filter: 'brightness(50%)' }}
//           data-image="scarlet-witch"
//         ></div>
//         <div
//           className={styles.layer}
//           data-parallax="layer"
//           data-parallax-speed="slow"
//           style={{ backgroundImage: `url('./assets/images/5.jpg')`, filter: 'brightness(50%)' }}
//           data-image="black-widow"
//         ></div>
//         <div
//           className={styles.layer}
//           data-parallax="layer"
//           data-parallax-speed="slower"
//           style={{ backgroundImage: `url('./assets/images/4.jpg')`, filter: 'brightness(50%)' }}
//           data-image="vision"
//         ></div>
//         <div
//           className={styles.layer}
//           data-parallax="layer"
//           data-parallax-speed="slowest"
//           style={{ backgroundImage: `url('./assets/images/2.jpg')`, filter: 'brightness(50%)' }}
//           data-image="iron-man"
//         ></div>
//       </header>
//       <section className={styles.preamble} data-parallax="none">
//         <div className='flex relative -top-15 flex-col w-screen justify-center items-center'>
//           <div className='flex relative justify-center items-center mb-12 gap-8'>
//             <h1 className="text-3xl text-white md:text-7xl uppercase text-center flex-grow">What is</h1>
//             <Image src='/assets/esummit_name.png' width={3819} height={665} className='h-[90px] w-auto object-contain'
//               style={{ filter: 'drop-shadow(0px 0px 15px #ffd35b)' }} />
//             <h1 className="text-3xl text-white md:text-7xl uppercase text-center flex-grow">?</h1>
//           </div>
//           <p className="md:text-2xl text-white w-[85vw] md:w-[60vw] text-center">
//             This year, E-Summit 2025, the leading entrepreneurial event in western Odisha from E-Cell, VSSUT Burla, is channeling its inner "Wolf of Wall Street." We're assembling industry heavyweights, forward-thinking visionaries, and ambitious budding entrepreneurs for a dynamic gathering. Prepare for engaging panel discussions, skill-building workshops, and keynote sessions packed with the kind of insights that can build empires.
//           </p>
//         </div>
//         <Image src='/assets/images/leo.png' width={563} height={364} className='relative bottom-0' />
//       </section>
//       <section className={`${styles.parallax} ${styles.group}`} data-parallax="group">
//         <div className={`${styles.layer} w-full flex flex-col items-center justify-center`} data-parallax="layer" data-parallax-speed="base">
//           <div className=''>
//               <div className="flex flex-col items-center my-10">
//               <div className="flex flex-col gap-5 w-[60vw] text-right">
//                   <div className="text-4xl relative uppercase bg-yellow-500 max-w-[80%] opacity-0 anim-rise p-3 py-10">
//                       <p className="absolute right-6 bottom-5">2000+&nbsp;Attendees</p>
//                   </div>

//                   <div className="text-4xl relative uppercase bg-yellow-500 max-w-[50%] opacity-0 anim-rise p-3 py-10">
//                       <p className="absolute right-6 bottom-5">30+&nbsp;Startups</p>
//                   </div>

//                   <div className="text-4xl relative uppercase bg-yellow-500 max-w-[30%] opacity-0 anim-rise p-3 py-10">
//                       <p className="absolute right-6 bottom-5">10+&nbsp;Events</p>
//                   </div>
//               </div>
//               </div>
//           </div>

//         </div>

//         {/* <div
//           className={`${styles.layer} ${styles.stars}`}
//           data-parallax="layer"
//           data-parallax-speed="slow"
//           style={{ backgroundImage: `url('./assets/images/money.jpg')` }}
//         ></div> */}

//         <div
//           className={`${styles.layer} ${styles['deep-stars']}`}
//           data-parallax="layer"
//           data-parallax-speed="slowest"
//           style={{ backgroundImage: `url('./assets/images/money.jpg')`, transform: 'scale(1.0)' }}
//         ></div>
//       </section>
//       <section className={`${styles.plot} ${styles.group}`} data-parallax="group">
//         <div
//           className={`${styles['plot--content']} ${styles.layer} z-[-1]`}
//           data-parallax="layer"
//           data-parallax-speed="base"
//         >
//           <Gallery />
//         </div>
//       </section>
//       <footer className={styles.footer} data-parallax="none">
//         <video
//             id="video-parent"
//             autoPlay
//             muted
//             loop
//             className="w-[100%] h-[100%] z-[100]"
//             // style={{ filter: 'brightness(70%)' }}
//             >
//             <source src="./assets/teaser.mp4" type="video/mp4" />
//             Video tag is not supported
//         </video>
//       </footer>
//     </div>
//   );
// }

// export default Parallax;
