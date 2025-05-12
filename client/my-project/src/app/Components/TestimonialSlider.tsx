"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Ayesha Kapoor",
    feedback: "Such beautifully written tutorials and genuine product reviews.",
    role: "Makeup Artist",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Riya Sharma",
    feedback: "Such beautifully written tutorials and genuine product reviews.",
    role: "Beauty Enthusiast",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Nikita Verma",
    feedback:
      "Such beautifully written tutorials and genuine product reviews. ",
    role: "Stylist",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-14 pb-16 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8">
          What Our Users Say
        </h2>

        {/* Arrows for lg+ only */}
        <div className="hidden lg:flex justify-between absolute top-[55%] left-0 right-0 max-w-5xl mx-auto z-10 px-4">
          <button className="swiper-button-prev text-purple-800 hover:text-purple-600 transition text-2xl">
            &#10094;
          </button>
          <button className="swiper-button-next text-purple-800 hover:text-purple-600 transition text-2xl">
            &#10095;
          </button>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="px-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border-gray-300 border shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl px-8 py-10 md:py-14 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full border-[3px] border-purple-400 shadow-lg mb-6 transition hover:scale-105 duration-300"
                  />
                  <p className="text-lg md:text-md text-black font-medium mb-4 max-w-xl">
                    &ldquo; {item.feedback} &rdquo;
                  </p>
                  <h4 className="text-purple-900 font-semibold text-lg mt-4">
                    {item.name}
                  </h4>
                  <span className="text-sm text-purple-600">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
