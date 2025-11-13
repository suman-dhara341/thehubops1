import { Cormorant_Garamond } from "next/font/google";
import Slider from "./Slider";

// Setup the font (assuming it's consistent across your site)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const EventHighlights = () => {
  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-between px-4 md:px-10 lg:px-20">
        {/* Left Side: Small Title */}
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <span className="inline-flex items-center justify-center gap-2 text-xs uppercase font-medium tracking-widest text-gray-500">
            <span className="h-6 w-[2px] bg-gray-500"></span>
            <span className="">unforgettagle events at luxort</span>
          </span>
        </div>

        {/* Right Side: Large Title and Description */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2
            className={`${cormorant.className} text-4xl md:text-5xl font-normal leading-tight mb-4`}
          >
            Celebrate Life’s Finest Moments in Style and Elegance Celebrate
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            At Luxort, we create extraordinary settings for unforgettable
            events. Whether you're planning an intimate gathering or a grand
            celebration.
          </p>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default EventHighlights;
