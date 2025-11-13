import { Cormorant_Garamond } from "next/font/google"; // Assuming for consistency, though not strictly needed for the footer
import logo from "@/public/Footer Logo.png";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

// Placeholder for the Luxort logo
const LuxortLogo = () => (
  <div className="flex items-center space-x-2 text-white">
    {/* This is a generic SVG for the Luxort logo */}
    <Image src={logo} alt="logo" className="h-8 w-auto" />
  </div>
);

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Events", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const socialMedia = [
    { name: "X", href: "#" }, // Formerly Twitter
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#172b27] text-gray-300 py-11 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo, Description, Links */}
        <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-gray-700 space-y-10 md:space-y-0">
          {/* Left: Logo and Description */}
          <div className="md:w-1/3">
            <LuxortLogo />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Luxort combines timeless elegance with modern luxury, offering
              unparalleled comfort and unforgettable experiences
            </p>
          </div>

          {/* Right: Quick Links and Social Media */}
          <div className="flex flex-col sm:flex-row md:w-2/3 justify-around md:justify-end md:space-x-16 lg:space-x-24 space-y-10 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h4 className="font-serif text-white mb-4">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-auto">
              <h4 className="font-semibold text-white mb-4">Social Media</h4>
              <ul className="space-y-4 text-sm">
                {socialMedia.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center  md:space-y-0">
          <span>© 2025 Luxort. All Right Reserved</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
