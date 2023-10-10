import Link from "next/link";
import Image from "next/image";
import our_service_data from "@/data/our-service-data";
import WellcomeShape from "@/svg/wellcome_shape";

interface service_content_type {
  sub_title: string;
  title: string;
  sm_des: JSX.Element;
}
const service_content: service_content_type = {
  sub_title: "Our Services",
  title: "From your SEO Agency",
  sm_des: (
    <>
      Our strategy includes consistently evolving, to ensure {"we’re"} producing{" "}
      <br />
      exceptional SEO for business.
    </>
  ),
};
const { sub_title, title, sm_des } = service_content;

const ServicesAreaHomeOne = () => {
  return (
    <>
      <section className="services-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpsection__content text-center mb-70">
                <div className="tpbanner__sub-title mb-15">
                  <span>{sub_title}</span>
                  <i>
                    <WellcomeShape />
                  </i>
                </div>
                <h2 className="tpsection__title mb-15">{title}</h2>
                <p>{sm_des}</p>
              </div>
              <div className="tpservices">
                <div className="tpservices-list">
                  <ul>
                    {our_service_data.slice(0, 6).map((item, i) => (
                      <li key={i}>
                        <div
                          className={`tpservices-wrapper tpservices-item${item.id}`}
                        >
                          <div className="tpservices-img mb-35">
                            <Image src={item.img} alt="theme-pure" />
                          </div>
                          <div className="tpservices-content">
                            <span>{item.category}</span>
                            <h4 className="tpservices-title">
                              <Link
                                href="/seo-audit"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></Link>
                            </h4>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAreaHomeOne;
