import Hero from "@/components/Hero";
import Landlords from "@/components/Landlords";
import RealEstateSection from "@/components/Finds_home";
import Property from "@/components/Property";
import Testimonials from "@/components/Testimonials";
import LandlordCTA from "@/components/LandlordCTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Landlords />
      <RealEstateSection />
      <Property />
      <Testimonials />
      <LandlordCTA />
    </>
  );
}

