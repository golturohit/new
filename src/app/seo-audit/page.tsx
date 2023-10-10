import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SeoAudit from "@/components/services/seo-audit";

export const metadata = {
    title: "SEO Audit Services - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <SeoAudit />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;