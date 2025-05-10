"use client";

import { CustomArrowProps } from "react-slick";
import Image from "next/image";
import Slider from "react-slick";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const blogs = [
  {
    title: "Spring 2024 Makeup Trends to Try",
    date: "April 16, 2024",
    author: "Ana Roberts",
    image: "/cosmo3.jpeg",
    tag: "Trends",
  },
  {
    title: "Tips for Long-Lasting Eyeshadow",
    date: "April 12, 2024",
    author: "Emily White",
    image: "/cosmo2.jpeg",
    tag: "How To",
  },
  {
    title: "My Morning Skincare Routine Explained",
    date: "April 10, 2024",
    author: "Laura Adams",
    image: "/cosmo1.jpg",
    tag: "Reviews",
  },
  {
    title: "Top 5 Lipstick Shades for Indian Skin",
    date: "March 5, 2024",
    author: "Riya Mehta",
    image: "/cosmo3.jpeg",
    tag: "Trends",
  },
  {
    title: "Essential Skincare Steps Before Bed",
    date: "March 10, 2024",
    author: "Isha Gupta",
    image: "/cosmo2.jpeg",
    tag: "How To",
  },
  {
    title: "Beginner’s Guide to Makeup Brushes",
    date: "March 15, 2024",
    author: "Priya Sen",
    image: "/cosmo1.jpg",
    tag: "Reviews",
  },
];

// Arrow components
const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-30 top-[42%] right-[-8px] sm:right-2 md:-right-6 cursor-pointer text-purple-700 hover:text-purple-900"
      onClick={onClick}
    >
      <ArrowRightCircle size={36} />
    </div>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-30 top-[42%] left-[-8px] sm:left-12 md:-left-6 cursor-pointer text-purple-700 hover:text-purple-900"
      onClick={onClick}
    >
      <ArrowLeftCircle size={36} />
    </div>
  );
};

export default function OurBlogsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#faf5ff] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-10">
          Latest Articles
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {blogs.map((blog, idx) => (
              <div key={idx} className="px-3">
                <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-52 rounded-t-2xl"
                    unoptimized
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-purple-600 mb-2">
                      <span className="px-2 py-1 bg-purple-100 rounded-full font-semibold">
                        {blog.tag}
                      </span>
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="font-semibold text-black text-lg mb-2 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-purple-700">by {blog.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition">
            All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
