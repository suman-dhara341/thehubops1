"use client"; // optional — only if you add client hooks

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import SecondSlider from "./SecondSlider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
        <div className="flex flex-col justify-between col-span-1">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-6 w-[2px] bg-[#1E3E32]" />
              <span
                className={`${cormorant.className} text-[18px] uppercase tracking-wide text-[#213E32] font-semibold`}
              >
                ABOUT LUXORT
              </span>
            </div>
          </div>

          <div className="mt-12 lg:mt-20 flex flex-col gap-4 max-w-sm">
            <p className="leading-relaxed text-gray-700">
              Luxort is where elegance meets comfort, creating unforgettable
              moments with every stay. Welcome to your perfect escape.
            </p>

            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300"></div>

            <div>
              <p className="font-semibold text-lg">Roberto Poliys</p>
              <p className="text-sm text-gray-600">Founder of Luxort</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-2">
          <div className="mb-10 lg:mb-16">
            <h3 className="text-xl md:text-3xl font-normal leading-snug text-[#1e3c35] mb-6">
              Where Timeless Elegance Meets Exceptional Comfort and
              Unforgettable Experiences in Luxury Hospitality
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              At Luxort, we redefine the meaning of luxury hospitality. Our
              hotel offers a seamless blend of classic sophistication and modern
              comfort, providing guests with an unparalleled experience.
            </p>
          </div>

          <SecondSlider />
        </div>
      </div>
    </section>
  );
}
