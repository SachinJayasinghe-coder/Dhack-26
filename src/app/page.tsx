import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import WhyDhack from "@/components/about/WhyDhack";
import Categories from "@/components/categories/Categories";
import Timeline from "@/components/timeline/Timeline";
import Gallery from "@/components/gallery/Gallery";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <WhyDhack />

      <Categories />

      <Timeline />

      <Gallery />

      <Footer />
    </main>
  );
}