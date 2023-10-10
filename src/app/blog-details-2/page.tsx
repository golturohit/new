import BlogDetailsTwo from "@/components/blogs/blog-details-2";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Blog Details Two - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};

const index = () => {
    return (
        <Wrapper>
            <BlogDetailsTwo />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;