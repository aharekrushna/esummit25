import Image from "next/image"

function SpeakerCard({photo, name, desig}) {
    return <div className="flex flex-col items-center gap-2">
        <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
        <h1 className="text-xl">{name}</h1>
        <p className="text-sm">{desig}</p>
    </div>
}

export default function Speakers() {
    return (<>
        <div className="flex flex-col items-center mt-24">
            <h1 className="text-5xl w-full text-center font-bold">OUR SPEAKERS</h1>
            <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
                {(new Array(10)).fill(1).map(() =>
                    <SpeakerCard name='Mr. X' desig='XYZ' />
                )}
            </div>
        </div>
    </>)
}