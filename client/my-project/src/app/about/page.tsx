import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Features from "../Components/Features";
import OurBlogs from "../Components/OurBlogs";
import CommunityBanner from "../Components/CommunityBanner";
import Contact from "../Components/Contact";

const page = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <OurBlogs />
      <CommunityBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
