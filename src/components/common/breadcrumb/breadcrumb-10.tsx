import Image from "next/image";
import ClockBlogIcon from "@/svg/blogs_icon/ClockBlogIcon";
import CommentBlogIcon from "@/svg/blogs_icon/CommentBlogIcon";
import ViewsBlogIcon from "@/svg/blogs_icon/ViewsBlogIcon";

import shape_dots from "@/assets/img/shape/inner-dots-shape.png";
import Link from "next/link";


type breadcrumb_content_type = {
    bg_img: string;
    top_title: string;
    title: JSX.Element;
    post_writer: string;
    time: string;
    comments: string;
}

const breadcrumb_content: breadcrumb_content_type = {
    bg_img: "/assets/img/blog/blog-details-banner-1.jpg",
    top_title: "Technical SEO",
    title: <>10 Quick Tips About <br /> Blogging</>,
    post_writer: "Jim Séchen",
    time: "Oct 16,2023",
    comments: "05",
}
const { bg_img, top_title, title, post_writer, time, comments } = breadcrumb_content

const BreadcrumbTen = () => {
    return (
        <>
            <section className="blog-details-area blog-details-bg pb-120 pt-200"
                style={{ backgroundImage: `url(${bg_img})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-content">
                                <div className="blog-details-tag">
                                    <span><Link href="/blog-details">{top_title}</Link></span>
                                </div>
                                <h4 className="blog-details-banner-title">{title}</h4>
                                <div className="blog-details-meta">
                                    <span className="blog-details-meta-author">
                                        <a href="#">
                                            <img src="assets/img/blog/comments/blog-details-avatar-1.png" alt="theme-pure" />
                                            {post_writer}
                                        </a>
                                    </span>
                                    <span>
                                        <i> <ClockBlogIcon /> </i>
                                        {time}
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i> <CommentBlogIcon /> </i>
                                            {comments} Comment
                                        </a>
                                    </span>
                                    <span> <i> <ViewsBlogIcon /> </i> Views </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-shape-dots">
                    <Image src={shape_dots} alt="theme-pure" />
                </div>
            </section>
        </>
    );
};

export default BreadcrumbTen;