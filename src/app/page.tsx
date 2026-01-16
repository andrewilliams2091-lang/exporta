"use client";


import ApparelFashionSection from "./components/ApparelFashionSection";
import AutomobileSection from "./components/AutomobileSection";
import BottomFooter from "./components/BottomFooter";
import CategoriesSection from "./components/CategoriesSection";
import ClientLogoSlider from "./components/ClientLogoSlider";
import ClientTestimonials from "./components/ClientTestimonials";
import ConsumerElectronics from "./components/ConsumerElectronics";
import CosmeticsPersonalCare from "./components/CosmeticsPersonalCare";
import ExportersIndiaFooterText from "./components/ExportersIndiaFooterText";
import FindSuppliersByCountry from "./components/FindSuppliersByCountry";
import FindSuppliersByRegion from "./components/FindSuppliersByRegion";
import FoodBeverages from "./components/FoodBeveragesSection";
import Header from "./components/HeaderComp";
import HomeFurnishings from "./components/HomeFurnishing";
import HomeSuppliesSection from "./components/HomeSuppliesSection";
import IndustrialMachinerySection from "./components/IndustrialMachinerySection";
import PharmaceuticalDrugsSection from "./components/PharmaceuticalDrugsSection";
import PopularProducts from "./components/PopularProducts";
import PremiumBrandsSection from "./components/PremiumBrandsSection";
import RealEstateConstructionSection from "./components/RealEstateConstructionSection";
import RecentBlogs from "./components/RecentBlogs";
import SportsEntertainmentSection from "./components/SportsEntertainmentSection";
import ToolsEquipment from "./components/ToolsEquipment";
import UpperFooter from "./components/UpperFooter";
import WebStories from "./components/WebStories";

export default function Home() {
  return (
   <div>
    {/* <Header */}
    <Header />
    <CategoriesSection />
    <ApparelFashionSection />
    {/* first slider here */}
    <div className="px-[6rem]">
     <ClientLogoSlider />
    </div>
    <ConsumerElectronics />
    <HomeFurnishings />
    <FoodBeverages/>
    <ToolsEquipment />
    {/* grid ads block here... */}
    <FindSuppliersByRegion />
    <CosmeticsPersonalCare />
    <PharmaceuticalDrugsSection />
    <HomeSuppliesSection />
    <IndustrialMachinerySection />
    <RealEstateConstructionSection />
    <SportsEntertainmentSection />
    <AutomobileSection />
    <PremiumBrandsSection />
    <FindSuppliersByCountry />
    <ClientTestimonials />
    <WebStories />
    <RecentBlogs />
    <PopularProducts /> 
    <ExportersIndiaFooterText />
    <UpperFooter />
    <BottomFooter />
   </div>      
  );
}
