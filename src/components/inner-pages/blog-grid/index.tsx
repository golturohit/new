import BreadcrumbNine from "@/components/common/breadcrumb/breadcrumb-9";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import PostboxArea from "./PostboxArea";

const BlogGrid = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbNine title={"Blog Grid"} top_title={"Blog Grid"} />
                <PostboxArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default BlogGrid;