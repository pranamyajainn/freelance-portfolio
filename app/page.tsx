import Navbar from "@/components/layout/Navbar";
import HeroGrid from "@/components/sections/HeroGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-3 sm:px-4 pb-20 lg:px-8">
        <HeroGrid />
        <Footer />
      </main>
    </>
  );
}
