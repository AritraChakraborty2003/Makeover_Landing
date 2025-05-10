export default function CommunityBanner() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-10 bg-[#6d11af] text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Join Our Beauty Community
      </h2>
      <p className="text-sm md:text-base mb-6 leading-relaxed">
        Connect with fellow beauty enthusiasts, get exclusive skincare & makeup
        tips, and share your routine!
      </p>
      <button className="bg-white text-violet-800 font-semibold px-6 py-2 rounded-full hover:bg-purple-100 transition-all">
        Join Now
      </button>
    </div>
  );
}
