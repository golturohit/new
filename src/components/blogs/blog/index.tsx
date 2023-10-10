import BreadcrumbNine from "@/components/common/breadcrumb/breadcrumb-9";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import BlogPostboxArea from "./BlogPostboxArea";


const Blog = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbNine top_title="Blog" title="Blog" />
                <BlogPostboxArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Blog;