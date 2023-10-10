
import ScrollToTop from '@/components/common/scroll-to-top';
import BlogMasonry from '@/components/inner-pages/blog-masonry';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
    title: "Blog Masonry - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};

const index = () => {
    return (
        <Wrapper>
            <BlogMasonry />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default index;