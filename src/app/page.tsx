import HomeOne from "@/components/homes/home";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Home Main - SEO Marketing - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
  return (
    <Wrapper> 
       <HomeOne />
       <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default index;