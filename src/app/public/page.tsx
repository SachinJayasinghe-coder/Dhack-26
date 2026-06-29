import Navbar from "@/components/navbar/Navbar";

import Hero from "@/components/hero/Hero";

import Stats from "@/components/statistics/Stats";

import Categories from "@/components/categories/Categories";

import WhyDhack from "@/components/about/WhyDhack";

import Workshops from "@/components/workshops/Workshops";

import Timeline from "@/components/timeline/Timeline";

import Gallery from "@/components/gallery/Gallery";

import FAQ from "@/components/faq/FAQ";

import Contact from "@/components/contact/Contact";

import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <Stats />

      <Categories />

      <WhyDhack />

      <Workshops />

      <Timeline />

      <Gallery />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}