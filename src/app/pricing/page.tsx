import ScrollToTop from "@/components/common/scroll-to-top";
import Pricing from "@/components/inner-pages/pricing";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Pricing - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <Pricing />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;