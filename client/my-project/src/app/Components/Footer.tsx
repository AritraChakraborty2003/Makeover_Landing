import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div className="-ml-8">
          <h4 className="font-semibold text-lg mb-4 ">Cosmetics & Beauty</h4>
          <p className="pr-9 leading-7">
            Empowering beauty through high-quality products and a connected
            community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Join
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social/Legal */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t border-purple-700 pt-4">
        © 2024 Cosmetics & Beauty. All rights reserved.
      </div>
    </footer>
  );
}
