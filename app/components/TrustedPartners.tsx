"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import Logo1 from "@/public/brand/Logomark (1).png";
import Logo2 from "@/public/brand/Logomark (2).png";
import Logo3 from "@/public/brand/Logomark (3).png";
import Logo4 from "@/public/brand/Logomark (4).png";
import Logo5 from "@/public/brand/Logomark (5).png";
import Logo6 from "@/public/brand/Logomark (6).png";
import Logo7 from "@/public/brand/Logomark (7).png";

type Brand = {
  img: StaticImageData;
  name: string;
};

const partnerLogos: Brand[] = [
  { img: Logo1, name: "Capsule" },
  { img: Logo2, name: "Biosynthesis" },
  { img: Logo3, name: "Galileo" },
  { img: Logo4, name: "Spheride" },
  { img: Logo5, name: "FocalPoint" },
  { img: Logo6, name: "Galileo" },
  { img: Logo7, name: "Nietzsche" },
  { img: Logo1, name: "Orbital" },
];

const PartnerLogo = ({ img, name }: Brand): ReactElement => (
  <div className="flex items-center gap-3 flex-shrink-0 py-4">
    <Image
      src={img}
      alt={`${name} logo`}
      width={20}
      height={20}
      className="object-contain"
    />
    <span className="text-xs text-gray-600">{name}</span>
  </div>
);

export default function TrustedPartners(): ReactElement {
  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-xs uppercase font-medium tracking-widest text-gray-500 mb-8">
          TRUSTED PARTNERS
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-12 py-4 animate-marquee-rtl">
            {partnerLogos.map((p, i) => (
              <PartnerLogo key={`${p.name}-${i}-a`} img={p.img} name={p.name} />
            ))}
            {partnerLogos.map((p, i) => (
              <PartnerLogo key={`${p.name}-${i}-b`} img={p.img} name={p.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
