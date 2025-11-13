import { Cormorant_Garamond } from "next/font/google";

type TestimonialCardProps = {
  name: string;
  location?: string;
  review: string;
  date?: string;
};
// Setup the font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// --- Data for Testimonials ---
// You can easily add or change reviews here.
const testimonialsData = [
  {
    id: 1,
    name: "Jerome Bell",
    location: "Israel",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "5/27/19",
    // avatar: "/images/avatars/jerome.png", // Add a path if you have an image
  },
  {
    id: 2,
    name: "Courtney Henry",
    location: "Monaco",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "1/15/20",
  },
  {
    id: 3,
    name: "Arlene McCoy",
    location: "Saint Barthelemy",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "6/19/12",
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    location: "Poland",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "6/18/23",
  },
  {
    id: 5,
    name: "Ronald Richards",
    location: "Guinea",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "5/19/16",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    location: "Sao Tome and Principe",
    review:
      "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
    date: "2/08/17",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f6f4e9] text-[#1e3c35] py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-16">
        {/* === Left Column (Static) === */}
        <div className="lg:w-1/3 flex-shrink-0 text-center lg:text-left">
          <span className="text-xs uppercase font-medium tracking-widest text-gray-500 mb-2 block">
            TESTIMONIALS
          </span>
          <h2
            className={`${cormorant.className} text-5xl md:text-6xl font-normal leading-tight mb-4`}
          >
            What Our Guests Say
          </h2>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            Exceptional Experiences, Shared by Those Who've Lived Them.
          </p>
          <button className="bg-[#1e3c35] text-white text-xs font-semibold uppercase tracking-widest py-4 px-8 rounded-md hover:bg-[#2a524a] transition-colors">
            Read More Testimonials
          </button>
        </div>

        {/* === Right Column (Testimonial Cards) === */}
        <div className="lg:w-2/3">
          <div className="md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonialsData.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                location={item.location}
                review={item.review}
                date={item.date}
                // avatar={item?.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Individual Card Component ---
// This makes the mapping logic cleaner
const TestimonialCard = ({
  name,
  location,
  review,
  date,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 break-inside-avoid">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* This is where you use the <img> tag (or <Image> in Next.js).
            I'm using a gray placeholder div to exactly match your screenshot.
          */}

          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>

          <h4 className="font-semibold text-gray-800">{name}</h4>
        </div>
        <span className="text-sm text-gray-500">{location}</span>
      </div>

      {/* Card Body (Review) */}
      <p className="text-gray-700 leading-relaxed mb-4">{review}</p>

      {/* Card Footer (Date) */}
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  );
};

export default Testimonials;
