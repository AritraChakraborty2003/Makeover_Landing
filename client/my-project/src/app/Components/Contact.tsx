import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7ebf8] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left: Contact Info */}
        <div className="text-purple-900">
          <h2 className="text-4xl font-bold mb-4">Let&lsquo;s Connect</h2>
          <p className="text-purple-700 mb-6 leading-relaxed">
            Got a question, idea, or just want to chat about beauty? Drop us a
            message—we&apos;re here to help you shine ✨
          </p>

          <div className="space-y-4 text-base">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-700 w-5 h-5" />
              <span>hello@cosmeticsbeauty.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-700 w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-700 w-5 h-5" />
              <span>123 Beauty Lane, Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                className="bg-white border border-purple-300 text-purple-700 hover:bg-purple-700 hover:text-white rounded-full p-2 transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form className="w-full bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl space-y-5 border border-purple-100">
          <h3 className="text-2xl font-semibold text-purple-900 mb-2">
            Send a Message
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full bg-white border border-purple-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded-lg font-semibold transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
