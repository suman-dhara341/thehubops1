const Banner = () => {
  const textContent = (
    <span className="text-white text-xs uppercase font-medium tracking-wide mx-4">
      EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY! — LIMITED TIME ONLY! BOOK
      NOW! ◆
    </span>
  );

  return (
    <div className="w-full bg-[#1e3c35] py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {textContent}
        {textContent}
        {textContent}
        {textContent}
      </div>
    </div>
  );
};

export default Banner;
