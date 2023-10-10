
import FooterFour from "@/layout/footers/FooterFour";
import HeaderFour from "@/layout/headers/HeaderFour";
import AwardAreaHomeFour from "./AwardAreaHomeFour";
import BlogAreaHomeFour from "./BlogAreaHomeFour";
import BrandAreaHomeFour from "./BrandAreaHomeFour";
import ContactAreaHomeFour from "./ContactAreaHomeFour";
import CounterAreaHomeFour from "./CounterAreaHomeFour";
import FeatureAreaHomeFour from "./FeatureAreaHomeFour";
import HeroBannerHomefour from "./HeroBannerHomefour";
import OptimizeAreaHomeFour from "./OptimizeAreaHomeFour";
import PortfolioAreaHomeFour from "./PortfolioAreaHomeFour";
import PricingAreaHomeFour from "./PricingAreaHomeFour";
import ReviewAreaHomeFour from "./ReviewAreaHomeFour";
import ServicesAreaHomeFour from "./ServicesAreaHomeFour";
import TestimonialAreaHomeFour from "./TestimonialAreaHomeFour";

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <HeroBannerHomefour />
        <ServicesAreaHomeFour />
        <BrandAreaHomeFour />
        <FeatureAreaHomeFour />
        <OptimizeAreaHomeFour />
        <CounterAreaHomeFour />
        <PortfolioAreaHomeFour />
        <PricingAreaHomeFour />
        <TestimonialAreaHomeFour />
        <ReviewAreaHomeFour />
        <ContactAreaHomeFour />
        <BlogAreaHomeFour />
        <AwardAreaHomeFour />
      </main>
      <FooterFour />
    </>
  );
};

export default HomeFour;
