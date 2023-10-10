
import BlogDetails from '@/components/blogs/blog-details';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
    title: "Blog Details - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};
const index = () => {
    return (
        <Wrapper>
            <BlogDetails />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;