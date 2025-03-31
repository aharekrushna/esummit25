"use client";

import ContactCard from "@/components/ContactCard";
import { team } from "@/constants";

const sections = [
  {
    h: 'For any Website and Technical Queries',
    members: [
      team.hkbhai, team.ys,
    ]
  },
  {
    h: 'For any Speaker related Queries',
    members: [
      team.pdinesh, team.astha
    ]
  },
  {
    h: 'For any Events related Queries',
    members: [
      team.nishant, team.rakesh, team.omshree
    ]
  },
  {
    h: 'For any Media related Queries',
    members: [
      team.pratyush, team.swapna,
    ]
  },
  {
    h: 'For any Sponsorship related Queries',
    members: [
      team.sriniket, team.ppanda,
    ]
  },
  {
    h: 'Organisers',
    members: [
      team.hitesh, team.adishree, team.sudipta,
    ]
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#fbc503] text-center mb-12">
          OUR TEAM
        </h1>
        {
          sections.map(section => <div>
            <h1 className="text-2xl font-bold text-[#fbc503] text-center mb-8 mt-15">{section.h}</h1>
            <div className="gap-12 flex justify-center items-center w-full">
              { section.members.map(member =>
                  <ContactCard
                    imageSrc={member.url}
                    name={member.name}
                    designation="Co-Ordinator"
                    socialLinks={{
                      linkedin: member.llink,
                      instagram: member.ilink,
                      facebook: member.flink,
                      twitter: member.tlink,
                  }} />
              )
            }
              
            </div>

          </div>)
        }


        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"> */}
          {/* {
            Object.values(team).map((member) =>
              <ContactCard
                imageSrc={member.url}
                name={member.name}
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: member.llink,
                  instagram: member.ilink,
                  facebook: member.flink,
                  twitter: member.tlink,
                }}
              />
            )
          } */}

          {/* <ContactCard
            imageSrc="/assets/past-speakers/khalid.jpg"
            name="Anshu Agrawal"
            designation="Co-Ordinator"
            socialLinks={{
              linkedin: "https://linkedin.com/in/anshu",
              instagram: "https://instagram.com/anshu",
              facebook: "https://facebook.com/anshu",
              twitter: "https://twitter.com/anshu",
            }}
          /> */}

          {/* Add more ContactCard components as needed */}
        {/* </div> */}
      </div>
    </div>
  );
}
