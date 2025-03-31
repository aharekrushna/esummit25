"use client";

import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#fbc503] text-center mb-12">
          Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          <ContactCard
            imageSrc="/assets/past-speakers/khalid.jpg"
            name="Anshu Agrawal"
            designation="Co-Ordinator"
            socialLinks={{
              linkedin: "https://linkedin.com/in/anshu",
              instagram: "https://instagram.com/anshu",
              facebook: "https://facebook.com/anshu",
              twitter: "https://twitter.com/anshu",
            }}
          />

          {/* Add more ContactCard components as needed */}
        </div>
      </div>
    </div>
  );
}
