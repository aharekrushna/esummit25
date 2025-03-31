"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactCard({
  imageSrc,
  designation,
  socialLinks = {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
}) {
  return (
    <motion.div
      className="relative w-[250px] h-[250px] bg-[#151515] border-2 border-[#fbc503] rounded-xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full h-[200px] overflow-hidden"
        initial={{ borderRadius: "0px" }}
        whileHover={{ borderRadius: "50%" }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={imageSrc}
          alt={designation}
          fill
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Designation */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#151515] p-2 text-center">
        <p className="text-[#fbfcd4] font-medium">{designation}</p>
      </div>

      {/* Social Media Links */}
      <motion.div
        className="absolute inset-0 bg-[#151515] flex items-center justify-center gap-4 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-[#0a0a0a] rounded-full hover:bg-[#fbc503] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-6 h-6 text-[#fbfcd4]" />
        </motion.a>

        <motion.a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-[#0a0a0a] rounded-full hover:bg-[#fbc503] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-6 h-6 text-[#fbfcd4]" />
        </motion.a>

        <motion.a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-[#0a0a0a] rounded-full hover:bg-[#fbc503] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Facebook className="w-6 h-6 text-[#fbfcd4]" />
        </motion.a>

        <motion.a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-[#0a0a0a] rounded-full hover:bg-[#fbc503] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Twitter className="w-6 h-6 text-[#fbfcd4]" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
