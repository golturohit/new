 
import HomeFour from "@/components/homes/home-4";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "SEO Agency - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <HomeFour />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;