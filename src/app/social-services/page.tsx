import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialServices from "@/components/services/social-services";

export const metadata = {
    title: "Link Building Services - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <SocialServices />
            <ScrollToTop  />            
        </Wrapper>
    );
};

export default index;