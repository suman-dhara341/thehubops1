"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { HiChevronDown } from "react-icons/hi";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const faqItems = [
  {
    id: "checkin_checkout",
    question: "What are the check-in and check-out times?",
    answer:
      "Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    id: "airport_transportation",
    question: "Does the hotel offer airport transportation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi at magna gravida interdum. Integer laoreet, turpis id hendrerit pulvinar, magna elit luctus lectus, eget ullamcorper dolor augue id urna. Curabitur non augue vel orci ullamcorper elementum sed non erat.",
  },
  {
    id: "dining_options",
    question: "Does the hotel have dining options?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae lacus nec velit tempor suscipit.",
  },
  {
    id: "weddings_events",
    question: "Do you host weddings or special events?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id lectus non augue interdum varius.",
  },
];

const FAQSection = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id:any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-medium tracking-widest text-gray-500 mb-2 block">
            FAQ
          </span>
          <h2 className={`${cormorant.className} text-4xl md:text-6xl`}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-lg text-gray-800">{item.question}</h3>

                <HiChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openItemId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-out overflow-hidden ${
                  openItemId === item.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-700 border-t border-gray-100 text-md">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
