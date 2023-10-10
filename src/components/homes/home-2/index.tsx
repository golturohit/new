import Wrapper from "@/layout/Wrapper";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import SocialAreaHomeTwo from "./SocialAreaHomeTwo";
import AwardAreaHomeTwo from "./AwardAreaHomeTwo";
import DriveAreaHomeTwo from "./DriveAreaHomeTwo";
import FaqAreaHomeTwo from "./FaqAreaHomeTwo";
import FunfactAreaHomeTwo from "./FunfactAreaHomeTwo";
import HeroBannerHomeTwo from "./HeroBannerHomeTwo";
import ProjectAreaHomeTwo from "./ProjectAreaHomeTwo";
import SeoAreaHomeTwo from "./SeoAreaHomeTwo";
import ServicesAreaHomeTwo from "./ServicesAreaHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import CtaAreaHomeTwo from "./CtaAreaHomeTwo";
import BrandHomeTwo from "./BrandHomeTwo";
import FooterTwo from "@/layout/footers/FooterTwo";

const HomeTwo = () => {
    return (
        <Wrapper>
            <HeaderTwo />
            <main>
                <HeroBannerHomeTwo />
                <SeoAreaHomeTwo />
                <DriveAreaHomeTwo />
                <ServicesAreaHomeTwo />
                <AwardAreaHomeTwo />
                <ProjectAreaHomeTwo style={false} />
                <FunfactAreaHomeTwo />
                <TestimonialHomeTwo />
                <FaqAreaHomeTwo />
                <SocialAreaHomeTwo />
                <CtaAreaHomeTwo />
                <BrandHomeTwo /> 
            </main>
            <FooterTwo />
        </Wrapper>
    );
};

export default HomeTwo;