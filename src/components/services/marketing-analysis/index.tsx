// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-4.jpg";

import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import TestimonialHomeTwo from "@/components/homes/home-2/TestimonialHomeTwo";
import ToolestAeaHomeFive from "@/components/homes/home-5/ToolestAeaHomeFive";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import KeywordArea from "../keyword-search/KeywordArea";
import KeywordFeatureArea from "../keyword-search/KeywordFeatureArea";
import SocialServicesImportant from "../social-services/SocialServicesImportant";
import MarketingFeatureArea from "./MarketingFeatureArea";


const MarketingAnalysis = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbThree sub_title="Your free SEO analysis."
                    title={<>Why is SEO lounge SEO analysis so much better?</>} img={banner_service} style={true} />
                <KeywordFeatureArea style={true} />
                <KeywordArea />
                <ToolestAeaHomeFive />
                <SocialServicesImportant style={true} />
                <MarketingFeatureArea />
                <TestimonialHomeTwo style={true} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default MarketingAnalysis;