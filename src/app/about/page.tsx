import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";

export const metadata = {
    title: "About - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <About />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;