import ScrollToTop from "@/components/common/scroll-to-top";
import Portfolio from "@/components/inner-pages/portfolio";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Portfolio - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <Portfolio />  
            <ScrollToTop />                     
        </Wrapper>
    );
};

export default index;