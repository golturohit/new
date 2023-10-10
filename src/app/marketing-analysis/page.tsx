import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import MarketingAnalysis from "@/components/services/marketing-analysis";

export const metadata = {
    title: "Marketing analysis - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <MarketingAnalysis />
            <ScrollToTop  />            
        </Wrapper>
    );
};

export default index;