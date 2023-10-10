import React from 'react';
import Wrapper from '@/layout/Wrapper';
import ScrollToTop from '@/components/common/scroll-to-top'; 
import SignOut from '@/components/inner-pages/sign-out';


export const metadata = {
    title: "Sign Out - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper> 
            <SignOut />
            <ScrollToTop  /> 
        </Wrapper>
    );
};

export default index;