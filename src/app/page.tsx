import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import GiftCards from "@/components/GiftCards";
import HoursLocation from "@/components/HoursLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <GiftCards />
        <HoursLocation />
      </main>
      <Footer />
    </>
  );
}
