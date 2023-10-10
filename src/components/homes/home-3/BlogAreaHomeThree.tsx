import Link from "next/link";
import Image, { StaticImageData } from "next/image";
// blog thumb  
import blog_thumb_1 from "@/assets/img/blog/blog-bg-1.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-bg-2.jpg";
import blog_thumb_3 from "@/assets/img/blog/blog-bg-3.jpg";
// blog type
interface blog_content_type {
    top_title: string;
    tag_1: string;
    tag_2: string;
    title: JSX.Element;
    sm_des: JSX.Element;
    blog_data: {
        id: number;
        img: StaticImageData;
        time: string;
        title: string;
    }[];
}
// blog content 
const blog_content: blog_content_type = {
    top_title: "Handige tips en inspiratie",
    tag_1: "SEO Analysis",
    tag_2: "8 Min Read",
    title: <>5 things to note down <br /> when analyzing competitors</>,
    sm_des: <>Leverage agile frameworks to provide a robust <br /> synopsis for high level overviews.</>,
    blog_data: [
        {
            id: 1,
            img: blog_thumb_1,
            time: "8 Min Read",
            title: "How to improve your content strategy",
        },
        {
            id: 2,
            img: blog_thumb_2,
            time: "2 Min Read",
            title: "How to rebrand a search rankings",
        },
        {
            id: 3,
            img: blog_thumb_3,
            time: "6 Min Read",
            title: "How to outdo a competitor",
        },

    ],
}
const {top_title, tag_1, tag_2, title, sm_des, blog_data} = blog_content

const BlogAreaHomeThree = () => {
    return (
      <>
        <section className="blog-area theme-bg-4 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tpsection-wrapper text-center">
                  <h2 className="tpsection-title-white-2 mb-50">{top_title}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="blog-single mb-40 p-relative">
                  <div
                    className="blog-single-thumb"
                    style={{ backgroundImage: `url(/assets/img/blog/blog-3-bg-1.jpg)`}}></div>
                  <div className="row align-items-center justify-content-end">
                    <div className="col-lg-5 col-md-6">
                      <div className="blog-single-content">
                        <div className="blog-single-meta mb-20">
                          <Link href="/blog-details-2">{tag_1}</Link>
                          <span className="meta-list">{tag_2}</span>
                        </div>
                        <h4 className="blog-single-title mb-20">
                          <Link href="/blog-details-2">{title}</Link>
                        </h4>
                        <p>{sm_des}</p>
                        <Link className="radient-btn" href="/blog-details-2">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {blog_data.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="blog-item d-flex align-items-center mb-30">
                    <div className="blog-thumb">
                      <Link href="/blog-details-2">
                        <Image src={item.img} alt="theme-pure" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <span>{item.time}</span>
                      <h4 className="blog-title">
                        <Link href="/blog-details-2">{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default BlogAreaHomeThree;