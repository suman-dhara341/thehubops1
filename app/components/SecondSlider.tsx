"use client";

import {
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";
import { useRef } from "react";

type Slide = {
  id: string;
  img: string;
  progress: string;
  title: string;
};

const sliderData: Slide[] = [
  {
    id: "01",
    img: "/slides/slide1.jpg",
    progress: "w-1/3",
    title: "GREEN AREA",
  },
  {
    id: "02",
    img: "/slides/slide2.jpg",
    progress: "w-2/3",
    title: "THE LOUNGE",
  },
  {
    id: "03",
    img: "/slides/slide3.jpg",
    progress: "w-full",
    title: "POOL DECK",
  },
];

export default function SecondSlider() {
  // properly typed ref for a div element
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Scroll handlers with null-safety
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="w-full py-6 overflow-hidden">
      {/* SLIDER WRAPPER */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar px-4 pb-10"
      >
        {sliderData.map((item) => (
          <article
            key={item.id}
            className="group relative w-[220px] md:w-[300px] lg:w-[450px] shrink-0"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-[250px] md:h-[250px] rounded-lg overflow-hidden bg-gray-200">
              {/* PROGRESS BAR */}
              <div
                className="
                absolute left-4 right-4 bottom-6
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500
              "
              >
                <div className="w-full bg-white/40 h-1 rounded">
                  <div className={`${item.progress} bg-white h-1 rounded`} />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                absolute left-0 right-0 -bottom-12
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-in-out pb-2
              "
            >
              <div className="bg-white border border-gray-200 rounded-b-md shadow-sm">
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-gray-500">
                      {item.id}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-[#1e3c35] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <button className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#1e3c35]">
                    NEXT <HiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* BOTTOM CONTROLS */}
      <div className="flex justify-between items-center px-4 mt-4">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="text-[#1e3c35] p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <HiOutlineChevronLeft size={24} />
        </button>

        {/* INDICATORS */}
        <div className="flex gap-2">
          <span className="w-8 h-[2px] bg-[#1e3c35]" />
          <span className="w-8 h-[2px] bg-gray-300" />
          <span className="w-8 h-[2px] bg-gray-300" />
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="text-[#1e3c35] p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <HiOutlineChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
