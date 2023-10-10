import ScrollToTop from "@/components/common/scroll-to-top";
import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layout/Wrapper";


export const metadata = {
    title: "Team Details - SEO Marketing - Digital Marketing & SEO Agency Next js Template", 
  };
const index = () => {
    return (
        <Wrapper>
            <TeamDetails />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;