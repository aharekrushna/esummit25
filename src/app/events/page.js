import EventCard from "@/components/EventCard"
import EventCarousel from "@/components/EventCarousal"
import { events } from "@/constants"

export default function Events() {
    return (<>
        <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center justify-center w-full my-16 mt-24">
            <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">
                EVENTS
            </span>
            <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
                EVENTS
            </h1>
            <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
            </div>
        
            <div className="flex w-[85vw] md:w-[65vw] justify-center gap-8 my-8 flex-wrap">
                {events.map((it) =>
                    <EventCard logo={it.logo} title={it.title} desc={it.desc} reg_url={it.reg_url} details_url={it.details_url} />
                )}
            </div>
        </div>
    </>)
}