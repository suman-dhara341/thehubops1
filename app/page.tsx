// This is your home page: app/page.js
import AboutSection from "./components/AboutSection";
import EventHighlights from "./components/EventHighlights";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import HotelHighlights from "./components/HotelHighlights";
import NewsletterSignup from "./components/NewsletterSignup";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Slider />
      <AboutSection />
      <HotelHighlights />
      <EventHighlights />
      <FAQSection />
      <Testimonials />
      <TrustedPartners />
      <NewsletterSignup />
      <Footer/>
    </>
  );
}
