import BreadcrumbNine from "@/components/common/breadcrumb/breadcrumb-9";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import BlogListPostboxArea from "./BlogListPostboxArea";


const BlogList = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbNine top_title="Blog List" title="Blog List" />
                <BlogListPostboxArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default BlogList;