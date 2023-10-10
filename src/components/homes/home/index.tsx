import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import AnalysisAreaHomeOne from "./AnalysisAreaHomeOne";
import BannerHomeOne from "./BannerHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import CaseAreaHomeOne from "./CaseAreaHomeOne";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import ContactAreaHomeOne from "./ContactAreaHomeOne";
import FunfactAreaHomeOne from "./FunfactAreaHomeOne";
import PricingAreaHomeOne from "./PricingAreaHomeOne";
import ProcessAreaHomeOne from "./ProcessAreaHomeOne";
import ServicesAreaHomeOne from "./ServicesAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";

const HomeOne = () => {
  return (
    <Wrapper>
      <ScrollIndicator />
      <HeaderOne />
      <main className="overflow-hidden">
        <BannerHomeOne />
        <ProcessAreaHomeOne />
        <AnalysisAreaHomeOne />
        <CaseAreaHomeOne />
        <ServicesAreaHomeOne />
        <FunfactAreaHomeOne />
        <ChooseAreaHomeOne />
        <PricingAreaHomeOne />
        <TestimonialAreaHomeOne />
        <BlogAreaHomeOne />
        <ContactAreaHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HomeOne;
