import Image from "next/image"

function SponsorCard({logo, name, what}) {
    return <div className="flex flex-col items-center gap-2">
        {what &&
            <h1 className="text-2xl font-bold text-[#fbc503] text-center mb-8 mt-15">{what}</h1>
        }
        <div className="w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center">
            <Image src={logo} width={150} height={150} className="rounded-full" />
        </div>
        <h1 className="text-xl">{name}</h1> {/* TEMP */}
    </div>
}

const sponsors_2 = [
    {
        logo: '/assets/sponsors/nextgen.jpeg',
        name: 'NexGen',
        what: 'Technology Partner'
    },
    {
        logo: '/assets/sponsors/unacademy.avif',
        name: 'Unacademy',
        what: 'Education Partner',
    },
    {
        logo: '/assets/sponsors/imperial.png',
        name: 'Imperial Lights',
        what: 'Lighting Partner',
    },
]

const sponsors_3 = [
    {
        logo: '/assets/sponsors/kanak news.jpg',
        name: 'Kanak News',
        what: 'Media Partner',
    },
    {
        logo: '/assets/sponsors/otv.svg',
        name: 'OTV',
        what: 'Media Partner',
    },
]

export default function Sponsors() {
    return (<>
        <div className="flex flex-col items-center mb-12">
        <div className="relative flex flex-col items-center justify-center w-full mb-8 mt-24">
            <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">
                OUR SPONSORS
            </span>
            <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
                OUR SPONSORS
            </h1>
            <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
            </div>

            <div className="flex flex-col w-[65vw] justify-center gap-8 md:gap-12 my-8 flex-wrap">
                {/* <SponsorCard name='Company X' what='Co-Powered By' /> */}
                <SponsorCard logo='/assets/sponsors/mcl.jpg' name="MCL" what="Title Sponsor" />
                <div className="flex flex-col md:flex-row justify-center w-full gap-8 md:gap-12">
                {
                    sponsors_2.map(sp =>
                        <SponsorCard logo={sp.logo} name={sp.name} what={sp.what} />
                    )
                }
                </div>
                <h1 className="text-2xl font-bold text-[#fbc503] text-center mt-15">Media Partner</h1>
                <div className="flex flex-col md:flex-row justify-center w-full gap-22 md:gap-12">
                {
                    sponsors_3.map(sp =>
                        <SponsorCard logo={sp.logo} name={sp.name} what={null} />
                    )
                }
                </div>
                <SponsorCard logo='/assets/sponsors/kaveri.jpeg' name="Hotel Kaveri" what="Hospitality Partner" />
                
            </div>
        </div>
    </>)
}