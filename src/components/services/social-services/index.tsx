// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-3.jpg"; 
 
import SocialCtaArea from "./SocialCtaArea";
import SocialAboutArea from "./SocialAboutArea";
import HeaderSix from "@/layout/headers/HeaderSix"; 
import FooterFive from "@/layout/footers/FooterFive";
import SocialServicesImportant from "./SocialServicesImportant";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import QualityServicesArea from "../seo-audit/QualityServicesArea";
import ServicesAreaHomeFour from "@/components/homes/home-4/ServicesAreaHomeFour";

const SocialServices = () => {
    return (
        <>
             <HeaderSix style={true} />
             <main>
                <BreadcrumbThree sub_title="Honest Link Building Services" 
                title={<>Link building propels <br /> you to the top of search.</>} img={banner_service} style={true} /> 
                <ServicesAreaHomeFour style={true} />
                <QualityServicesArea />
                <SocialServicesImportant />
                <SocialAboutArea />
                <SocialCtaArea /> 
             </main>
             <FooterFive style={true} />
        </>
    );
};

export default SocialServices;