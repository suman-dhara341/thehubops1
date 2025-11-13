import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[400px] bg-[#f6f4e9] flex items-center justify-center py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex flex-col text-center md:text-left">
          <h1
            className={`${cormorant.className} text-7xl md:text-8xl font-light leading-tight text-[#1e3c35]`}
          >
            WELCOME TO
          </h1>
          <h1
            className={`${cormorant.className} text-7xl md:text-8xl font-light leading-tight text-[#1e3c35] mt-2`}
          >
            LUXORT
          </h1>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md pt-32">
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            Discover a world where luxury and comfort blend seamlessly, offering
            unforgettable experiences in a setting of elegance and tranquility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <Link href="/book" passHref>
              <button className="bg-[#1e3c35] text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-opacity-90 transition-colors w-full sm:w-auto">
                BOOK YOUR STAY
              </button>
            </Link>
            <Link href="/suites" passHref>
              <button className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
                EXPLORE OUR SUITES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
