import HomeThree from "@/components/homes/home-3";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Business SEO - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <HomeThree />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;