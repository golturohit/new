import BreadcrumbFive from "@/components/common/breadcrumb/breadcrumb-5";
import TestimonialAreaHomeOne from "@/components/homes/home/TestimonialAreaHomeOne";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import KeywordCtaArea from "@/componentsservices/keyword-search/KeywordCtaArea";
import AboutArea from "./AboutArea";

 

 
 const Team = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbFive />
                <AboutArea />
                <TestimonialAreaHomeOne />
                <KeywordCtaArea />
            </main>
            <FooterFive style={true} />
        </>
    );
 };
 
 export default Team;