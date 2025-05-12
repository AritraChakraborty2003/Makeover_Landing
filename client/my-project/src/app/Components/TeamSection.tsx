/* eslint-disable @next/next/no-img-element */
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Priyom Verman",
    role: "Founder & Managing Director",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Mehra",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    linkedin: "#",
  },
  {
    name: "Kavita Sharma",
    role: "Content Director",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    linkedin: "#",
  },
  {
    name: "Anjali Patel",
    role: "Skincare Expert",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    linkedin: "#",
  },
  {
    name: "Ritika Joshi",
    role: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
  },
  {
    name: "Rita Joshi",
    role: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f8edfb] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-3">
          Our Team
        </h2>
        <p className="text-center text-purple-700 max-w-2xl mx-auto mb-10 p-3 leading-7">
          Behind every product and every idea is a passionate team dedicated to
          bringing out your best self.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white w-[260px] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-200 shadow mb-4"
              />
              <h3 className="text-lg font-semibold text-purple-900">
                {member.name}
              </h3>
              <p className="text-sm text-purple-600 mb-3">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                className="inline-flex items-center justify-center text-purple-700 hover:text-purple-900 bg-purple-100 hover:bg-purple-200 w-9 h-9 rounded-full transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
