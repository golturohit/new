
import FooterThree from "@/layout/footers/FooterThree";
import HeaderThree from "@/layout/headers/HeaderThree";
import BlogAreaHomeThree from "./BlogAreaHomeThree";
import BrandHomeThree from "./BrandHomeThree";
import CtaAreaHomethree from "./CtaAreaHomethree";
import DashbordAreaHomeThree from "./DashbordAreaHomeThree";
import FeatureAreaHomeThree from "./FeatureAreaHomeThree";
import HeroBannerHomeThree from "./HeroBannerHomeThree";
import KeywordAreaHomeThree from "./KeywordAreaHomeThree";
import NeedAreaHomeThree from "./NeedAreaHomeThree";
import RatingAreaHomeThree from "./RatingAreaHomeThree";
import ReviewAreaHomeThree from "./ReviewAreaHomeThree";
import ServicesAreaHomeThree from "./ServicesAreaHomeThree";
import TestimonialAreaHomeThree from "./TestimonialAreaHomeThree";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
        <main>
          <HeroBannerHomeThree />
          <DashbordAreaHomeThree />
          <BrandHomeThree />
          <FeatureAreaHomeThree />
          <NeedAreaHomeThree />
          <KeywordAreaHomeThree />
          <ServicesAreaHomeThree />
          <RatingAreaHomeThree />
          <TestimonialAreaHomeThree />
          <ReviewAreaHomeThree />
          <BlogAreaHomeThree />
          <CtaAreaHomethree />
        </main>
      <FooterThree />
    </>
  );
};

export default HomeThree;
