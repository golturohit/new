import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SeoIcon from "@/svg/seo_icon";
import KeywordIcon from "@/svg/keyword_icon";
import ContactTabIcon from "@/svg/contact_tab_icon";
import ScrollLineIcon from "@/svg/scroll_line_icon";
import CompetitorTabIcon from "@/svg/competitor_tab_icon";
import SeoMarketingTabIcon from "@/svg/seo_marketing_tab_icon";

import service_main_shape_1 from "@/assets/img/shape/tab-shape-3.png";
// tab 01
import tab_1_shape_1 from "@/assets/img/bg/tab-1-bg-1.png";
import tab_1_shape_2 from "@/assets/img/bg/tab-1-bg-2.png";
import tab_1_shape_3 from "@/assets/img/bg/tab-1-bg-3.png";
import tab_1_shape_4 from "@/assets/img/shape/tab-shape-1.png";
// tab 02
import tab_2_shape_1 from "@/assets/img/bg/tab-2-bg-1.png";
import tab_2_shape_2 from "@/assets/img/bg/tab-2-bg-2.png";
import tab_2_shape_3 from "@/assets/img/bg/tab-1-bg-3.png";
import tab_2_shape_4 from "@/assets/img/bg/tab-2-bg-3.png";
// tab 03
import tab_3_shape_1 from "@/assets/img/bg/tab-bg-1.png";
import tab_3_shape_2 from "@/assets/img/bg/tab-bg-2.png";
import tab_3_shape_3 from "@/assets/img/shape/tab-shape-1.png";
import tab_3_shape_4 from "@/assets/img/shape/tab-shape-2.png";
import tab_3_shape_5 from "@/assets/img/bg/tab-bg-3.png";
// tab 04
import tab_4_shape_1 from "@/assets/img/bg/tab-4-bg-1.png";
import tab_4_shape_2 from "@/assets/img/bg/tab-4-bg-2.png";
import tab_4_shape_3 from "@/assets/img/bg/tab-4-bg-3.png";
import tab_4_shape_4 from "@/assets/img/bg/tab-4-shape--1.png";
// tab 05
import tab_5_shape_1 from "@/assets/img/bg/tab-5-bg-1.png";
import tab_5_shape_2 from "@/assets/img/bg/tab-5-bg-2.png";
import tab_5_shape_3 from "@/assets/img/bg/tab-1-bg-3.png";
// service data type
interface service_content_type {
    id: number;
    tab_id: string;
    active: string;
    cls: string;
    shape_images: ({
        id: number;
        cls: string;
        shape: StaticImageData;
    } | {
        id: number;
        cls: string;
        shape: string;
    })[];
    title: string;
    sm_des: string;
}
// service content data
const service_content: service_content_type[] = [
  {
    id: 1,
    tab_id: "home",
    active: "",
    cls: "services-tab-one-shape",
    shape_images: [
      {
        id: 1,
        cls: "services-tab-one-shape-one",
        shape: tab_1_shape_1,
      },
      {
        id: 2,
        cls: "services-tab-one-shape-two",
        shape: tab_1_shape_2,
      },
      {
        id: 3,
        cls: "services-tab-one-shape-three d-none d-md-block",
        shape: tab_1_shape_3,
      },
      {
        id: 4,
        cls: "services-tab-one-shape-four d-none d-md-block",
        shape: tab_1_shape_4,
      },
    ],
    title: "SEO Marketing",
    sm_des: "Check the on-page optimization for your website and make sure it is optimized correctly for important",
  },
  {
    id: 2,
    tab_id: "profile",
    active: "",
    cls: "services-tab-one-shape",
    shape_images: [
      {
        id: 1,
        cls: "services-tab-two-shape-one",
        shape: tab_2_shape_1,
      },
      {
        id: 2,
        cls: "services-tab-two-shape-two",
        shape: tab_2_shape_2,
      },
      {
        id: 3,
        cls: "services-tab-two-shape-three d-none d-md-block",
        shape: tab_2_shape_3,
      },
      {
        id: 4,
        cls: "services-tab-two-shape-four d-none d-md-block",
        shape: tab_2_shape_4,
      },
    ],
    title: "Keyword Marketing",
    sm_des: "Check the on-page optimization for your website and make sure it is optimized correctly for important",
  },
  {
    id: 3,
    tab_id: "messages",
    active: "show active",
    cls: "services-tab-shape services-tab-angle-shape",
    shape_images: [
      {
        id: 1,
        cls: "services-tab-angle-shape-one",
        shape: tab_3_shape_1,
      },
      {
        id: 2,
        cls: "services-tab-angle-shape-two",
        shape: tab_3_shape_2,
      },
      {
        id: 3,
        cls: "services-tab-angle-shape-three d-none d-md-block",
        shape: tab_3_shape_3,
      },
      {
        id: 4,
        cls: "services-tab-angle-shape-four d-none d-md-block",
        shape: tab_3_shape_4,
      },
      {
        id: 5,
        cls: "services-tab-angle-shape-five d-none d-md-block",
        shape: tab_3_shape_5,
      },
    ],
    title: "Project Marketing",
    sm_des: "Check the on-page optimization for your website and make sure it is optimized correctly for important",
  },
  {
    id: 4,
    tab_id: "settings",
    active: "",
    cls: "services-tab-four-shape",
    shape_images: [
      {
        id: 1,
        cls: "services-tab-four-shape-one",
        shape: tab_4_shape_1,
      },
      {
        id: 2,
        cls: "services-tab-four-shape-two",
        shape: tab_4_shape_2,
      },
      {
        id: 3,
        cls: "services-tab-four-shape-three d-none d-md-block",
        shape: tab_4_shape_3,
      },
      {
        id: 4,
        cls: "services-tab-four-shape-four d-none d-md-block",
        shape: tab_4_shape_4,
      },
    ],
    title: "Content Analyses",
    sm_des: "Check the on-page optimization for your website and make sure it is optimized correctly for important",
  },
  {
    id: 5,
    tab_id: "report",
    active: "",
    cls: "services-tab-five-shape",
    shape_images: [
      {
        id: 1,
        cls: "services-tab-five-shape-one",
        shape: tab_5_shape_1,
      },
      {
        id: 2,
        cls: "services-tab-five-shape-two",
        shape: tab_5_shape_2,
      },
      {
        id: 3,
        cls: "services-tab-five-shape-three d-none d-md-block",
        shape: "",
      },
      {
        id: 4,
        cls: "services-tab-five-shape-four d-none d-md-block",
        shape: tab_5_shape_3,
      },
    ],
    title: "Content Marketing",
    sm_des: "Check the on-page optimization for your website and make sure it is optimized correctly for important",
  },
];

const ServicesAreaHomeThree = () => {
  return (
    <>
      <section className="services-area theme-bg-4 pb-120 fix">
        <div className="services-bg-wrapper pt-110 pb-20">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tpsection-wrapper text-center">
                  <h2 className="tpsection-title-white-2 mb-30">
                    Discover our SEO Tools
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3 order-2 order-lg-1 ">
                <div className="services-nav">
                  <div className="d-flex align-items-start">
                    <div
                      className="nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="false"
                      >
                        <i className="services-nav-icon mr-10">
                          <SeoIcon />{" "}
                        </i>
                        <span>SEO Audit</span>
                      </button>

                      <button
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        <i className="services-nav-icon mr-10">
                          <KeywordIcon />{" "}
                        </i>
                        <span> Keyword Research</span>
                      </button>

                      <button
                        className="nav-link active"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="true"
                      >
                        <i className="services-nav-icon mr-10">
                          <ContactTabIcon />{" "}
                        </i>
                        <span>Content Marketing</span>
                      </button>

                      <button
                        className="nav-link"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="services-nav-icon mr-10">
                          <CompetitorTabIcon />
                        </i>
                        <span>Competitor Analysis</span>
                      </button>

                      <button
                        className="nav-link"
                        id="v-pills-report-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-report"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-report"
                        aria-selected="false"
                      >
                        <i className="services-nav-icon mr-10">
                          <SeoMarketingTabIcon />{" "}
                        </i>
                        <span>SEO Reporting</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-1 order-lg-2 ">
                <div className="services-tab">
                  <div
                    className="tab-content services-tab-anim"
                    id="v-pills-tabContent"
                  >
                    {service_content.map((item, i) => (
                      <div
                        key={i}
                        className={`tab-pane fade ${item.active}`}
                        id={`v-pills-${item.tab_id}`}
                        role="tabpanel"
                        aria-labelledby={`v-pills-${item.tab_id}-tab`} 
                      >
                        <div className="services-tab-wrapper d-flex align-items-center">
                          <div className="services-tab-img p-relative">
                            <div className="services-tab-main-img">
                              <Image
                                src={service_main_shape_1}
                                alt="theme-pure"
                              />
                            </div>
                            <div className={item.cls}>
                              {item?.shape_images?.map((shape, index) =>
                                shape.shape ? (
                                  <div key={index} className={shape.cls}>
                                    <Image src={shape.shape} alt="theme-pure" />
                                  </div>
                                ) : (
                                  <div className={shape.cls}>
                                    <span>
                                      <ScrollLineIcon />
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                          <div className="services-tab-content">
                            <h4 className="services-tab-title mb-15">{item.title}</h4>
                            <p>{item.sm_des}</p>
                            <Link href="/media-markiting"
                              className="radient-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAreaHomeThree;
