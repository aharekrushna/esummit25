import Image from "next/image"

function SpeakerCard({photo, name, desig}) {
    return <div className="flex flex-col items-center gap-2 w-[200px]">
        <div className="w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center">
            <Image src={photo} width={150} height={150} className="rounded-full" />
        </div>
        <h1 className="text-xl">{name}</h1>
        <p className="text-sm text-center">{desig}</p>
    </div>
}

const speakers = [
    {
        photo: '/assets/speakers/arnav ray.jpeg',
        name: 'Arnab Ray',
        desig: 'CEO, Array Ventures & BPlan Experts',
    },
    {
        photo: '/assets/speakers/subham acharya.jpeg',
        name: 'Subham Acharya',
        desig: 'Director FxUAV Technologies Pvt Ltd',
    },
    {
        photo: '/assets/speakers/priyadarshi.jpeg',
        name: 'Priyadarshi Sadangi',
        desig: 'Startup Enthusiast and Investor and COO- EmTeK CoE, STPINEXT',
    },
    {
        photo: '/assets/speakers/bibhu.jpeg',
        name: 'Bibhu Bahalia',
        desig: 'Co-Founder ASSAVA Coffee Roasters',
    }
]

export default function Speakers() {
    return (<>
        <div className="flex flex-col items-center mb-12">
            <div className="relative flex flex-col items-center justify-center w-full my-16 mt-24">
            <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">
                OUR SPEAKERS
            </span>
            <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
                OUR SPEAKERS
            </h1>
            <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
            </div>
            <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
                {speakers.map((sp) =>
                    <SpeakerCard photo={sp.photo} name={sp.name} desig={sp.desig} />
                )}
            </div>
        </div>
    </>)
}