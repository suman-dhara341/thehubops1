import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"], // Use 400 for text, 600 for headings
});

const NewsletterSignup = () => {
  return (
    <section className="w-full bg-[#54615e] text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`${cormorant.className} text-4xl md:text-5xl font-semibold leading-tight mb-8`}
        >
          GET EXCLUSIVE OFFERS, <br /> EVENT UPDATES, AND INSIDER NEWS
        </h2>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full max-w-sm p-4 bg-white text-gray-800 border-none rounded-sm shadow-md focus:ring-2 focus:ring-[#6b8c82] focus:outline-none placeholder-gray-500"
            aria-label="Your email address"
          />
          <button
            type="submit"
            className="w-full max-w-sm bg-[#1e3c35] text-white py-4 px-8 rounded-sm shadow-lg hover:bg-[#2a524a] transition-colors duration-300 uppercase font-semibold tracking-wider"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
