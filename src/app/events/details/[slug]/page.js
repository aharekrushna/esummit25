
import Accordion from "@/components/Accordion"

const events = {
    'bootcamp': {
        reg_link: 'https://www.google2.com',
        title: 'Bootcamp',
        desc: 'Allow yourself to our exclusive bootcamp, where aspiring entrepreneurs will learn about the startup business from the renowned founders. This event provides the ideal balance of networking opportunities and priceless insights as attendees gain firsthand knowledge from seasoned founders who have successfully navigated the startup setting. Establish important relationships, share ideas, be a part of their experiences and acquire personal information while you set out on an entrepreneurial adventure.'
    }
}

export async function generateStaticParams() {
    return Object.keys(events).map((slug) => ({ slug }));
}

export default function EventDetails({ params }) {
    const { slug } = params;
    const event = events[slug];

    return <div className="flex flex-col items-center">
        <div>Hero</div>
        <div className="w-[250px] bg-black p-4 rounded-lg cursor-pointer hover:scale-105 transition text-center text-2xl">
            <a href={event.reg_link} target="blank">Register</a>
        </div>

        <h1 className="text-4xl mt-16 mb-8">ABOUT</h1>
        <p className="w-[70vw] text-justify text-xl text-gray-300 hover:text-gray-400">{event.desc}</p>

        <h1 className="text-4xl mt-16 mb-8">FAQs</h1>
        <div className="w-[80vw] md:w-[50vw] p-4 flex flex-col mb-10">
            <Accordion 
                title='Hello there, are you ok?'
                answer='No i m not'
            />
            <Accordion 
                title='Hello there, are you ok?'
                answer='No i m not'
            />
            <Accordion 
                title='Hello there, are you ok?'
                answer='No i m not'
            />
        </div>
    </div>
}