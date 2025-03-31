
import Accordion from "@/components/Accordion"
import Image from "next/image";
import { events } from '@/constants'

export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.details_url, // Use details_url as the slug
    }));
}

export default async function EventDetails({ params }) {
    const { slug } = await params;
    const event = events.find((e) => e.details_url === slug); // Find the event by slug

    return <div className="flex flex-col items-center">

        <div className="relative flex flex-col items-center justify-center w-full mb-8 mt-24">
            <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">
                {event.title}
            </span>
            <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
                {event.title}
            </h1>
            <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
            </div>

        <Image src={event.logo} width={1500} height={1500} className='w-[80vw] md:w-1/3 h-auto object-contain rounded-lg' />

        <a 
          href={event.reg_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[200px] text-2xl px-4 py-2 mt-18 text-center rounded-lg bg-gradient-to-r from-[#F5A201] to-[#FFD35B] text-[#013C58] font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Register
        </a>

        <h1 className="text-3xl md:text-4xl mt-16 mb-8">ABOUT</h1>
        <p className="w-[85vw] md:w-[70vw] text-justify text-xl text-gray-300 hover:text-gray-400">{event.longdesc}</p>

        <div className="w-[80vw] md:w-[50vw] p-4 flex flex-col items-center mb-10">
        { 
             event.faq &&
             <>
                 <h1 className="text-3xl md:text-4xl mt-16 mb-8 text-center w-full">FAQs</h1>
                 <div className="w-[85vw] md:w-[50vw] p-4 flex flex-col mb-10">
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