import Image from "next/image";

export default function About() {
  return (
    <section id="about" className=" py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row  gap-12">
        {/* Text Section */}
        <div className=" w-full md:w-1/2 md:text-left">
          <h2 className="text-5xl text-[#43008f] font-extrabold  mb-6 leading-tight">
            About Us
          </h2>
          <p className="text-[#43008f] mb-4 text-base">
            Welcome to Cosmetics & Beauty , your destination for expert
            skincare, makeup tips, and beauty services. Our mission is to help
            you embrace your natural beauty with confidence.
          </p>
          <p className="text-[#43008f] mb-4 text-base leading-relaxed">
            From detailed tutorials and ingredient insights to personalized
            service recommendations, we bring together the best beauty knowledge
            under one roof. Whether you&lsquo;re a beginner or a seasoned
            enthusiast, we guide you through the latest trends and timeless
            techniques.
          </p>
          <p className="text-[#43008f] text-base leading-relaxed">
            Our expert editors and community contributors are passionate about
            helping you glow—inside and out. Start your beauty journey with us
            and elevate your routine like never before.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button className="bg-violet-800 text-white px-6 py-2 rounded-md">
              Explore Blogs
            </button>
            <button className="bg-white border border-violet-800 text-violet-800 px-6 py-2 rounded-md">
              Explore Community
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about1.png"
            alt="Cosmetic items"
            width={500}
            height={400}
            className="rounded-xl shadow-md w-full max-w-sm md:max-w-md object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
