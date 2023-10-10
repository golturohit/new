import ScrollToTop from "@/components/common/scroll-to-top";
import SignIn from "@/components/inner-pages/sign-in";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Sign in - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <SignIn />
            <ScrollToTop  />  
        </Wrapper>
    );
};

export default index;