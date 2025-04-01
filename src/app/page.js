"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import EventCard from "@/components/EventCard"
import { events } from "@/constants"
import Parallax from "@/components/Parallax"
import Accordion from "@/components/Accordion"


function LoadingAnimation({ loadingComplete }) {
  const [opacity, setOpacity] = useState(1)
  const [hideLoader, setHideLoader] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 639px)").matches)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (loadingComplete) {
      // Start fade out animation
      setOpacity(0)
      // Remove from DOM after animation completes
      setTimeout(() => setHideLoader(true), 500)
    }
  }, [loadingComplete])

  
  if (hideLoader) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48">
        
        <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite]">
          <Image src="/logo-outer.png" alt="Outer Part" fill className="object-contain" />
        </div>
       
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-1/2 h-1/2">
            <Image src="/logo-center.png" alt="Center Part" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SpeakerCard({ photo, name, desig }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[200px] md:min-w-[250px] px-4">
      <Image
        src={photo || "/placeholder.svg"}
        className="h-[120px] w-[120px] md:h-[180px] md:w-[180px] aspect-square object-cover rounded-full"
        width={180}
        height={180}
        alt={name}
      />
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
      <p className="text-xs md:text-sm text-gray-300">{desig}</p>
    </div>
  )
}

function SponsorCard({ photo, name }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[180px] md:min-w-[220px] px-4">
      <Image
        src={photo || "/placeholder.svg"}
        className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] aspect-square object-cover rounded-full"
        width={150}
        height={150}
        alt={name}
      />
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
    </div>
  )
}

function ImageCard() {
  return (
    <div className="min-w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[300px] bg-yellow-500 hover:scale-105 hover:rotate-[2deg] transition duration-300 active:scale-105 active:rotate-[2deg]">
      Hii
    </div>
  )
}

const speakers = [
  {
    img: "/assets/past-speakers/khalid.jpg",
    name: "Khalid Wani",
    desig: "Founder & Ceo of KWCG, Director at ONE CAPITAL NBFC, TDEX SPEAKER",
  },
  {
    img: "/assets/past-speakers/satyajeet.jpg",
    name: "Satyajeet Pattnaik",
    desig: "Co-founder of Fydo",
  },
  {
    img: "/assets/past-speakers/archana.jpg",
    name: "Archana Tripathy",
    desig: "Tata-cumins, Co-founder of The Kalinga Heritage",
  },
  {
    img: "/assets/past-speakers/debabrata.jpeg",
    name: "Debabrata Giri",
    desig: "DGM of Tata-Motors",
  },
  {
    img: "/assets/past-speakers/chinmayee.jpeg",
    name: "Chinmay Satpathy",
    desig: "Founder & CEO of Village Kraft",
  },
  {
    img: "/assets/past-speakers/samar.jpg",
    name: "Samar Pratap Naayak",
    desig: "Founder & MD of Olive Ridley Media",
  },
  {
    img: "/assets/past-speakers/sasmita.jpeg",
    name: "Sasmita Samanta",
    desig: "Founder & Chairperson at SOUL Limited",
  },
  {
    img: "/assets/past-speakers/vvgiri.jpeg",
    name: "Vonkayala Venkata Giri",
    desig: "CTO at KFin Technologies",
  },
]

const sponsors = [
  { img: "/assets/past-sponsors/unstop.jpg", name: "Unstop" },
  { img: "/assets/past-sponsors/village Kraft.jpeg", name: "Village Kraft" },
  { img: "/assets/past-sponsors/scomm india.jpeg", name: "SCOMM India" },
  { img: "/assets/past-sponsors/pc.jpg", name: "Prabhu Chandra" },
  { img: "/assets/past-sponsors/nextgen.jpeg", name: "NexGen" },
  {
    img: "/assets/past-sponsors/entertainment kingdom.jpeg",
    name: "Entertainment Kingdom",
  },
  {
    img: "/assets/past-sponsors/burger company.jpg",
    name: "The Burger Company",
  },
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("animate-zoom-in", entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(startAnimation)
    const options = { root: null, rootMargin: "0px", threshold: 0.8 }

    const horizontalScrollContainer = document.getElementsByClassName("horizontal-scroll-container")

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollX = -scrollY * 0.5
      for (const h of horizontalScrollContainer) h.style.transform = `translateX(${scrollX}px)`
    }

    window.addEventListener("scroll", handleScroll)

    
    const video = videoRef.current
    if (video) {
      video.muted = true
      try {
        video.play()
      } catch (error) {
        console.warn("Autoplay failed:", error)
      }
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <LoadingAnimation loadingComplete={!isLoading} />

      
      <div>
        <Parallax />
      </div>

      <div className="flex flex-col items-center mt-12">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
          <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">EVENTS</span>
          <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
            EVENTS
          </h1>
          <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
        </div>

        <div className="flex w-full justify-center gap-8 my-8 px-10 flex-wrap">
          {events.map((it, index) => (
            <EventCard
              key={index}
              logo={it.logo}
              title={it.title}
              desc={it.desc}
              reg_url={it.reg_url}
              details_url={it.details_url}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center pt-16">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
          <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">PAST SPEAKERS</span>
          <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
            PAST SPEAKERS
          </h1>
          <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="flex animate-marquee">
            {speakers.map((it, index) => (
              <SpeakerCard key={index} photo={it.img} name={it.name} desig={it.desig} />
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {speakers.map((it, index) => (
              <SpeakerCard key={`clone-${index}`} photo={it.img} name={it.name} desig={it.desig} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-0 pb-8">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
          <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">PAST SPONSORS</span>
          <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
            PAST SPONSORS
          </h1>
          <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="flex animate-marquee2">
            {sponsors.map((it, index) => (
              <SponsorCard key={index} photo={it.img} name={it.name} />
            ))}
          </div>
          <div className="flex animate-marquee2" aria-hidden="true">
            {sponsors.map((it, index) => (
              <SponsorCard key={`clone-${index}`} photo={it.img} name={it.name} />
            ))}
          </div>
        </div>
      </div>

      <div id="faq" className="flex flex-col items-center pt-4 py-16">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
          <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">FAQ</span>
          <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
            FAQ
          </h1>
          <div className="mt-4 w-24 md:w-40 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
        </div>
        <div className="w-[80vw] md:w-[60vw] p-4 rounded-lg flex flex-col mb-10">
          <Accordion
            title="Who should attend E-Summit?"
            answer="E-Summit is designed for aspiring and established entrepreneurs, startup founders, investors, industry professionals, students interested in entrepreneurship, and anyone looking to learn, network, and be inspired in the world of innovation and business."
          />
          <Accordion
            title="How can I register for E-Summit?"
            answer="You can register for E-Summit by visiting our official website and following the registration process. Ensure you provide accurate details to complete your registration successfully."
          />
          <Accordion
            title="Will E-Summit be held in person or virtually?"
            answer="E-Summit will be held in a hybrid format, offering both in-person and virtual attendance options to accommodate participants from different locations."
          />
          <Accordion
            title="What kind of speakers will be at E-Summit?"
            answer="E-Summit features a wide range of speakers, including successful entrepreneurs, industry experts, investors, and thought leaders. Our speakers come from various sectors, including technology, business, and sustainability."
          />
          <Accordion
            title="Will there be opportunities for networking at E-Summit?"
            answer="Yes, networking is a key aspect of E-Summit. We will have dedicated networking sessions, social events, and opportunities to connect with speakers, investors, mentors, and fellow attendees throughout the summit."
          />
        </div>
      </div>
    </>
  )
}




