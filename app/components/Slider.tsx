"use client";

import { HiOutlineArrowRight } from "react-icons/hi";

const sliderData = [
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

export default function Slider() {
  return (
    <section className="w-full bg-[#f6f4e9] py-6 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar px-1 pb-10">
        {sliderData.map((item) => (
          <article
            key={item.id}
            className="group relative w-[300px] md:w-[600px] lg:w-[800px] shrink-0"
          >
            {/* IMAGE SECTION */}
            <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden bg-gray-200">
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
    </section>
  );
}
