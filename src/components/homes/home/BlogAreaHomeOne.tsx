import Link from "next/link";
import Image from "next/image";
import blog_data from "@/data/blog-data";
import BGSshapeSix from "@/svg/bg_shape_6";
import RightArrowTwo from "@/svg/right_arrow_2";

// blog content type
type blog_content_type = {
  sub_title: string;
  title: string;
};
const blog_content: blog_content_type = {
  sub_title: "From our blog",
  title: "Latest blog & news",
};
const { sub_title, title } = blog_content;

const BlogAreaHomeOne = () => {
  return (
    <>
      <section className="blog-area pb-75">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="tpsection__wrapper mb-45">
                <div className="tpbanner__sub-title mb-15">
                  <span>{sub_title}</span>
                  <i> {' '}
                    <BGSshapeSix /> 
                  </i>
                </div>
                <h2 className="tpsection__title">{title}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tpblog-all mb-60">
                <Link href="/blog-grid">
                  See all our Blog{" "}
                  <i>
                    <RightArrowTwo />
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {blog_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <div className="tpblog mb-30">
                  <div className="tpblog-thumb mb-25 fix">
                    <Link href="/blog-details">
                      <Image src={item.thumb} alt={item.avatar_name} />
                    </Link>
                  </div>
                  <div className="tpblog-content">
                    <div className="tpblog-tag">
                      <Link href="/blog-details">{item.tag_1}</Link>{" "}
                      <Link href="/blog-details">{item.tag_2}</Link>
                    </div>
                    <h3 className="tpblog-title">
                      <Link href="/blog-details" dangerouslySetInnerHTML={{__html: item.title}}></Link>
                    </h3>
                    <div className="tpblog-avatar d-flex align-items-center">
                      <div className="tpblog-avatar-thub mr-10">
                        <Image src={item.avatar} alt="theme-pure" />
                      </div>
                      <div className="tpblog-avatar-info">
                        <h5 className="tpblog-avatar-title">
                          {item.avatar_name}
                        </h5>
                        <span>{item.titme}</span>
                      </div>
                    </div>
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

export default BlogAreaHomeOne;
