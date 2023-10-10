import BreadcrumbTwo from "@/components/common/breadcrumb/breadcrumb-2"; 
import NeedAreaHomeThree from "@/components/homes/home-3/NeedAreaHomeThree";
import TestimonialAreaHomeFive from "@/components/homes/home-5/TestimonialAreaHomeFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import KeywordArea from "./KeywordArea";
import KeywordCtaArea from "./KeywordCtaArea";
import KeywordDetailsArea from "./KeywordDetailsArea";
import KeywordFeatureArea from "./KeywordFeatureArea";
import FooterFive from '@/layout/footers/FooterFive';


const KeywordSearch = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <BreadcrumbTwo />
                <KeywordDetailsArea />
                <KeywordFeatureArea />
                <KeywordArea />
                <NeedAreaHomeThree style={true} />
                <TestimonialAreaHomeFive style={true} />
                <KeywordCtaArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default KeywordSearch;