import { Newspaper, Users, Search, Globe } from "lucide-react";

const features = [
  {
    title: "Blogs",
    description:
      "Read articles on the latest beauty trends, tips, and product reviews.",
    icon: <Newspaper className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "Community",
    description:
      "Join our community of beauty enthusiasts and share your experiences.",
    icon: <Users className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "Find Services",
    description:
      "Discover beauty services near you for skincare, makeup, and more.",
    icon: <Search className="w-8 h-8 text-purple-700" />,
  },
  {
    title: "Global Reach",
    description:
      "Discover beauty services near you for skincare, makeup, and more.",
    icon: <Globe className="w-8 h-8 text-purple-700" />,
  },
];

export default function Features() {
  return (
    <section id="features" className=" py-12 px-6 text-center">
      <h2 className="text-4xl   mb-6 text-purple-800 font-bold">
        Our Features
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl border border-gray-300 hover:border-purple-400 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] p-6"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-black p-3">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
