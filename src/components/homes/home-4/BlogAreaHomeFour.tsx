import Link from "next/link";
import Image from "next/image";

import blog_shape from "@/assets/img/shape/blog-4-shape-1.png";

// blog content data type
interface blog_content_type {
    sub_title: string;
    title: string;
    blog_data: {
        id: number;
        bg_img: string;
        tag: string;
        title: string;
        sm_info: JSX.Element;
        date: string;
        post_by: string;
    }[];
}

// blog content 
const blog_content: blog_content_type = {
    sub_title: "What's Going On",
    title: "Company blog & Insights",
    blog_data: [
        {
            id: 1, 
            bg_img: "/assets/img/blog/blog-4-bg-1.jpg",
            tag: "SEO agency",
            title: "Wins 2023 good design london Award",
            sm_info: <>The annual good design Awards <br /> is london oldest prestigious.</>,     
            date: "Nev 21,2023",
            post_by: "Admin",      
        },
        {
            id: 2, 
            bg_img: "/assets/img/blog/blog-4-bg-2.jpg",
            tag: "SEO agency",
            title: "Me in resolution pianoforte continuing",
            sm_info: <>The annual good design Awards <br /> is london oldest prestigious.</>,     
            date: "Nev 21,2023",
            post_by: "Admin",      
        },

    ]
}
const {sub_title, title, blog_data}  = blog_content

const BlogAreaHomeFour = () => {
    return (
        <>
            <section className="blog-area pb-50 p-relative fix">
                <div className="tpblog-4-shape wow bounceIn d-none d-lg-block" data-wow-duration=".6s" data-wow-delay=".6s">
                    <Image src={blog_shape} alt="theme-pure" /> 
                </div>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-8 ">
                        <div className="section-wrapper mb-50">
                            <span>{sub_title}</span>
                            <h5 className="section-title-4 section-title-4-2">{title}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-all-btn text-lg-end mb-40">
                            <Link href="/blog-list" className="blue-btn">More Articles</Link>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {blog_data.map((item, i)  => 
                             <div key={i} className="col-lg-6">
                                <div className="tpblog-4 p-relative mb-60">
                                    <div className="tpblog-4-thumb" style={{backgroundImage: `url(${item.bg_img})`}}></div>
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 col-md-7">
                                        <div className="tpblog-4-content">
                                            <h5 className="tpblog-4-content-sub-tilte">{item.tag}</h5>
                                            <h4 className="tpblog-4-content-title">
                                                <Link href="/blog-details">{item.title}</Link>
                                            </h4>
                                            <p>{item.sm_info}</p>  
                                            <div className="tpblog-4-info">
                                                <span>{item.date}</span>
                                                <span><a href="#"><i>By</i>{item.post_by}</a></span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogAreaHomeFour;