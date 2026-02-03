import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedOffers from "@/components/FeaturedOffers";
import LatestProducts from "@/components/LatestProducts";
import Inspiration from "@/components/Inspiration";
import ShopByColor from "@/components/ShopByColor";
import LightingCollection from "@/components/LightingCollection";
import EnvironmentSection from "@/components/EnvironmentSection";
import Specialization from "@/components/Specialization";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedOffers />
        <LatestProducts />
        <Inspiration />
        <ShopByColor />
        <LightingCollection />
        <EnvironmentSection />
        <Specialization />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
