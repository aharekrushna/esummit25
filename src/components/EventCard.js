import Link from "next/link";
import Image from "next/image";
import styles from './event-card.module.css';

export default function EventCard({ logo, title, desc, reg_url, details_url }) {
  return (
    <div className="group relative flex flex-col items-center p-6 rounded-xl bg-blue-950/10 backdrop-blur-lg border border-yellow-600/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

      
      <div className={`${styles['flip-card']} w-full mb-4`}>
        <div className={styles['flip-card-inner']}>
          <div className={`${styles['flip-card-front']} rounded-lg overflow-hidden border border-[#A8E8F9]/30 shadow-md`}>
            <Image 
              src={logo} 
              alt="Event" 
              width={300} 
              height={300} 
              className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <div className={`${styles["flip-card-back"]} rounded-lg backdrop-blur-md bg-gradient-to-br from-[#013C58]/90 to-[#00537A]/80 p-4 flex items-center justify-center text-center border border-[#A8E8F9]/30`}>
            <p className="text-white/90 font-light leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
      <h1 className="uppercase font-bold text-xl tracking-wide text-white mb-1">
        {title}
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#FFD35B] to-[#F5A201] mt-1 transition-all duration-500"></div>
      </h1>
      <div className="flex justify-around w-full text-center p-1 gap-3">
        <a 
          href={reg_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full px-4 py-2 text-center rounded-lg bg-gradient-to-r from-[#F5A201] to-[#FFD35B] text-[#013C58] font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Register
        </a>
        <Link 
          href={details_url}
          className="w-full px-4 py-2 text-center rounded-lg bg-transparent border border-[#A8E8F9]/40 text-white hover:bg-white/10 hover:border-[#FFD35B]/40 hover:scale-105 transition-all duration-300"
        >
          Event Details
        </Link>
      </div>
    </div>
  );
}