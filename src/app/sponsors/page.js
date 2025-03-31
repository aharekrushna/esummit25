import Image from "next/image"

function SponsorCard({photo, name, what}) {
    return <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl border-solid border-b-2 border-b-white mb-2">{what}</h1>
        <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
        <h1 className="text-xl">{name}</h1> {/* TEMP */}
    </div>
}

export default function Sponsors() {
    return (<>
        <div className="flex flex-col items-center mt-24">
            <h1 className="text-5xl w-full text-center font-bold">OUR SPONSORS</h1>
            <div className="flex flex-col w-[65vw] justify-center gap-8 my-8 flex-wrap">
                <SponsorCard name='Company X' what='Co-Powered By' />
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <SponsorCard name='Company X' what='Outing partner' />
                    <SponsorCard name='Company X' what='Tech partner' />
                    <SponsorCard name='Company X' what='Some partner' />
                </div>
                
            </div>
        </div>
    </>)
}