"use client"; // This component needs state to manage the active tab

import { useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import logo from "@/public/NavbarLogo.png"; // Assuming you have this logo in your /public folder

// Setup the font, matching your other sections
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// --- Data for the tabs ---
// You can easily add, remove, or change tabs here
const tabsData = [
  {
    id: "swimming_pool",
    title: "SWIMMING POOL",
    image: logo, // Using the imported logo as a placeholder
  },
  {
    id: "fine_dining",
    title: "FINE DINING RESTAURANTS",
    image: logo,
  },
  {
    id: "luxury_rooms",
    title: "LUXURY ROOMS & SUITES",
    image: logo,
  },
  {
    id: "spa_wellness",
    title: "SPA & WELLNESS",
    image: logo,
  },
];

const HotelHighlights = () => {
  // 'useState' tracks which tab is currently active
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  // Find the data object for the currently active tab
  // We can use this later to avoid repeating the content logic
  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Title and Description */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-medium tracking-widest text-gray-500 mb-2 block">
            HOTEL HIGHLIGHTS
          </span>
          <h2
            className={`${cormorant.className} text-5xl md:text-6xl font-normal leading-tight mb-4`}
          >
            Experience the Extraordinary
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Experience elegance and comfort in our Luxury Rooms & Suites, where
            modern amenities and timeless design create the perfect retreat.
          </p>
        </div>

        {/* This is the tab container from your image */}
        <div className="w-full max-w-7xl mx-auto p-4 md:p-2 ">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-between w-full gap-2">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
        flex-1 min-w-[120px] text-center
         p-4
        text-xs font-medium uppercase tracking-widest
        focus:outline-none transition-all duration-300
        ${
          activeTab === tab.id
            ? "bg-white text-gray-900"
            : "bg-transparent text-gray-500 hover:text-gray-800"
        }
      `}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="w-full p-8 bg-gray-200 min-h-[400px]">
            {/* FIX 3: Updated the 'activeTab' checks to match your 'tabsData' IDs
             */}
            {activeTab === "swimming_pool" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Swimming Pool Content
                </h2>
                <p className="text-gray-600 mt-2">
                  This is the placeholder content for the swimming pool.
                </p>
                {/* You can display the image like this: */}
                {/* <Image src={activeTabData.image} alt={activeTabData.title} className="w-full h-auto mt-4" /> */}
              </div>
            )}
            {activeTab === "fine_dining" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Fine Dining Content
                </h2>
                <p className="text-gray-600 mt-2">
                  This is the placeholder content for fine dining.
                </p>
              </div>
            )}
            {activeTab === "luxury_rooms" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Luxury Rooms & Suites Content
                </h2>
                <p className="text-gray-600 mt-2">
                  This is the placeholder content for rooms and suites.
                </p>
              </div>
            )}
            {activeTab === "spa_wellness" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Spa & Wellness Content
                </h2>
                <p className="text-gray-600 mt-2">
                  This is the placeholder content for the spa.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelHighlights;
