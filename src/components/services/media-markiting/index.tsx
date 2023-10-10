// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-2.jpg";


import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import SocialAreaHomeTwo from "@/components/homes/home-2/SocialAreaHomeTwo";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import MediaFeaturesArea from "./MediaFeaturesArea";
import MediaOptimizeArea from "./MediaOptimizeArea";
import MediaServices from "./MediaServices";
import MediaServicesArea from "./MediaServicesArea";
import MediaVideoArea from "./MediaVideoArea";


const MediaMarkiting = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbThree sub_title="Social Media Marketing"
                    title={<>Enabling your {'brand’s'} Success via social media</>} img={banner_service} style={true} />
                <MediaFeaturesArea />
                <MediaServicesArea />
                <MediaOptimizeArea />
                <MediaVideoArea />
                <MediaServices />
                <SocialAreaHomeTwo style={true} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default MediaMarkiting;