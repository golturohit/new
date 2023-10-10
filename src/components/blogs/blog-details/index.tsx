import BreadcrumbTen from "@/components/common/breadcrumb/breadcrumb-10";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import BlogDetailsArticleArea from "./BlogDetailsArticleArea";
import BlogDetailsPostboxArea from "./BlogDetailsPostboxArea";


const BlogDetails = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main> 
                <BreadcrumbTen />
                <BlogDetailsPostboxArea />
                <BlogDetailsArticleArea />
            </main>
            <FooterFive style={true} style_2={true} />
        </>
    );
};

export default BlogDetails;