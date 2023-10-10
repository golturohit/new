import ScrollToTop from "@/components/common/scroll-to-top";
import Team from "@/components/inner-pages/team";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Team - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <Team />
            <ScrollToTop  /> 
        </Wrapper>
    );
};

export default index;