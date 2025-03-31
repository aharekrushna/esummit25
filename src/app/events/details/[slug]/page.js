
import Accordion from "@/components/Accordion"
import { events } from '@/constants'

export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.details_url, // Use details_url as the slug
    }));
}

export default async function EventDetails({ params }) {
    const { slug } = await params;
    const event = events.find((e) => e.details_url === slug); // Find the event by slug

    return <div className="flex flex-col items-center mt-22">
        <div className="w-[250px] bg-black p-4 rounded-lg cursor-pointer hover:scale-105 transition text-center text-2xl">
            <a href={event.reg_url} target="blank">Register</a>
        </div>

        <h1 className="text-4xl mt-16 mb-8">ABOUT</h1>
        <p className="w-[70vw] text-justify text-xl text-gray-300 hover:text-gray-400">{event.longdesc}</p>

        <div className="w-[80vw] md:w-[50vw] p-4 flex flex-col mb-10">
        { 
             event.faq &&
             <>
                 <h1 className="text-4xl mt-16 mb-8 text-center w-full">FAQs</h1>
                 <div className="w-[80vw] md:w-[50vw] p-4 flex flex-col mb-10">
                     {event.faq.map(item =>
                         <Accordion 
                             title={item.title}
                             answer={item.answer}
                         />
                     )}
                 </div>
             </>
         }
        </div>
    </div>
}