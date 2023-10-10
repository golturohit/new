import Contact from "@/components/contact";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Contact SEOMY Team - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <Contact />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;