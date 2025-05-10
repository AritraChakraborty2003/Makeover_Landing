import About from "./Components/About";
import CommunityBanner from "./Components/CommunityBanner";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import OurBlogs from "./Components/OurBlogs";
import TestimonialSlider from "./Components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <OurBlogs />
      <TestimonialSlider />

      <CommunityBanner />
      <Contact />
      <Footer />
    </>
  );
}
