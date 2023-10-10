import ScrollToTop from "@/components/common/scroll-to-top";
import PortfolioDetails from "@/components/inner-pages/portfolio-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Portfolio Details - SEO Marketing - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <PortfolioDetails />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;