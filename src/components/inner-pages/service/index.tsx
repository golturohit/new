import BreadcrumbFour from "@/components/common/breadcrumb/breadcrumb-4";
import TestimonialHomeTwo from "@/components/homes/home-2/TestimonialHomeTwo";
import ReviewAreaHomeFour from "@/components/homes/home-4/ReviewAreaHomeFour";
import ProjectFeaturHomefive from "@/components/homes/home-5/ProjectFeaturHomefive";
import PricingAreaHomeOne from "@/components/homes/home/PricingAreaHomeOne";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import KeywordCtaArea from "@/componentsservices/keyword-search/KeywordCtaArea";
import AuditServiceArea from "@/componentsservices/seo-audit/AuditServiceArea";
import ServiceAboutArea from "./ServiceAboutArea";
import Serviceabout from "./Serviceabout";


const Service = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbFour />
                <ServiceAboutArea />
                <AuditServiceArea style={true} />
                <Serviceabout />
                <ProjectFeaturHomefive style={true} />
                <PricingAreaHomeOne />
                <TestimonialHomeTwo  service_style={true} /> 
                <ReviewAreaHomeFour style={true} service_style={true} />
                <KeywordCtaArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Service