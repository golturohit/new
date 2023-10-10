import Link from "next/link";
import UnderlineOne from "@/svg/underline_1";
import Image, { StaticImageData } from "next/image";
// seo thumb images
import seo_thumb_1 from "@/assets/img/banner/seo-tools-1.jpg";
import seo_thumb_2 from "@/assets/img/banner/seo-tools-2.jpg";
import seo_thumb_3 from "@/assets/img/banner/seo-tools-3.jpg";

interface seo_content_type {
    title: JSX.Element;
    seo_data: {
        id: number;
        cls: string;
        title: JSX.Element;
        sm_des: JSX.Element;
        img: StaticImageData;
    }[];
}
const seo_content: seo_content_type = {
    title: <> Introducing <br /> Our SEO <span>Toolbox  <UnderlineOne /> </span></>,
    seo_data: [
        {
            id: 1,
            cls: "", 
            title: <>Growing <br /> Your Business</>,
            sm_des: <>With SEOMY, you get everything you need for a fast website</>,
            img: seo_thumb_1,
        },
        {
            id: 2,
            cls: "tpseo-bg2", 
            title: <>Speed <br /> Optimization</>,
            sm_des: <>With SEOMY, you get everything you need for a fast website</>,
            img: seo_thumb_2,
        },
        {
            id: 3,
            cls: "tpseo-bg3", 
            title: <>Testing <br /> Capabilities</>,
            sm_des: <>With SEOMY, you get everything you need for a fast website</>,
            img: seo_thumb_3,
        },
    ],
}
const {title, seo_data}  = seo_content

const SeoAreaHomeTwo = () => {
    return (
      <>
        <section className="seo-area pt-105 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="tpsection-wrapper text-center mb-75">
                  <h2 className="tpsection-title-two">{title}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {seo_data.map((item, i) => (
                <div key={i} className="col-lg-4 col-sm-6">
                  <div className="tpseo p-relative mb-40">
                    <div className={`tpseo-bg ${item.cls}`}></div>
                    <div className="tpseo-content">
                      <h4 className="tpseo-title mb-15">{item.title}</h4>
                      <div className="tpseo-info">
                        <p>{item.sm_des}</p>
                        <div className="tpseo-details">
                          <Link href="/keyword-search">
                            Learn More{" "}
                            <i className="fa-light fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="tpseo-thumb w-img style_w">
                      <Image src={item.img} alt="theme-pure" />
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

export default SeoAreaHomeTwo;