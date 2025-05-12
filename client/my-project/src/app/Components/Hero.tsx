import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <section
          id="home"
          className="bg-[#e6d3e9] h-[92vh] px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl pr-1 font-[520] text-[#4c0f60] leading-25 font-serif">
              Welcome to our
              <br />
              <span className="text-[#4c0d68]">Cosmetics & Beauty Website</span>
            </h2>
            <p className="mt-6 text-[#5e2c6c] text-base md:text-md leading-10 p-2">
              Discover the best beauty products and tips for your skincare and
              makeup routines.We are your one stop destination for all your
              beauty needs
            </p>
            <button className="mt-6 px-6 py-4 bg-[#5e2c6c] text-white rounded-md text-md hover:bg-[#58117f] transition">
              Get Started
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/hero4.png" // Use the high-res image you generated
              height={500}
              width={500}
              alt="Cosmetic Products"
              className=" "
              priority
            />
          </div>
        </section>
      </div>
      <>{/*For Mobile */}</>
      <div className="block lg:hidden w-screen py-[79vmin] bg-[#e6d3e9] relative">
        <div className="text w-[75%] pl-3 top-[12%] absolute z-[100]">
          <h2 className="text-[8.9vmin] md:text-6xl font-bold text-[#500a67] leading-14 font-serif">
            <span className="text-[10vmin]">Welcome to</span>
            <br />
            <span className="text-[#4c0d68]">Cosmetics & Beauty Website</span>
          </h2>
          <p className="mt-6 text-[#5e2c6c] w-[52%] text-sm md:text-lg leading-8 pr-1">
            Discover the best beauty products and tips for your skin and makeup
            plans & routines
          </p>
          <button className="mt-6 px-3 py-2 bg-[#6a1b9a] text-white rounded-lg text-sm hover:bg-[#58117f] transition">
            Get Started
          </button>
        </div>

        <div className="absolute z-[10] top-[41%] w-[58%] left-[40.35%] h-[56vmin]">
          <Image
            src="/hero-image.png" // Use the high-res image you generated
            height={150}
            width={150}
            alt="Cosmetic Products"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
}
