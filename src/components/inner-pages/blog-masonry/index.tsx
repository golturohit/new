import BreadcrumbNine from "@/components/common/breadcrumb/breadcrumb-9";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import PostboxAreaMasonry from "./PostboxAreaMasonry";


const BlogMasonry = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbNine top_title="Blog Masonry" title="Blog Masonry" />
                <PostboxAreaMasonry />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default BlogMasonry;