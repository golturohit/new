
 
import HomeFive from "@/components/homes/home-5";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "SEO Campaign - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <HomeFive />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;