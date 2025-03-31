import EventCard from "@/components/EventCard"
import EventCarousel from "@/components/EventCarousal"
import { events } from "@/constants"

export default function Events() {
    return (<>
        <div className="flex flex-col items-center mt-24">
            <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
                {events.map((it) =>
                    <EventCard logo={it.logo} title={it.title} desc={it.desc} reg_url={it.reg_url} details_url={it.details_url} />
                )}
            </div>
        </div>
    </>)
}