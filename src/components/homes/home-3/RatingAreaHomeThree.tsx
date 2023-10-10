import Image from "next/image";
import EditIcon from "@/svg/edit_icon";
import YellowIcon from "@/svg/yellow_icon";
import GoogleIcon from "@/svg/google_icon"; 
import GreenIconUp from "@/svg/green_icon_up";
import flag_img from "@/assets/img/shape/rating-flag.jpg";

import rating_shape from "@/assets/img/shape/rating-shape.png";
import rating_shape_1 from "@/assets/img/shape/rating-3-shape-1.png";
import rating_shape_2 from "@/assets/img/shape/rating-3-shape-2.png";
import rating_shape_3 from "@/assets/img/shape/rating-3-shape-3.png";
import UnderlineTen from "@/svg/underline_10";

// RATING DATA TYPE
interface rating_content_type {
    left_data: ({
        id: number;
        keyword_title: string;
        keyword: string;
        item_coutn: number;
        item_icon: JSX.Element;
        item_coutn_2: number;
    } | {
        id: number;
        keyword_title: string;
        keyword: string;
        item_coutn: number;
        item_icon: JSX.Element;
        item_coutn_2: string;
    })[];
    right_data: ({
        id: number;
        keyword_title: string;
        keyword: string;
        item_coutn: number;
        item_icon: JSX.Element;
        item_coutn_2: number;
    } | {
        id: number;
        keyword_title: string;
        keyword: string;
        item_coutn: number;
        item_icon: JSX.Element;
        item_coutn_2: string;
    })[];
}
// RATING DATA 
const rating_content: rating_content_type = {
    left_data: [
        {
            id: 1, 
            keyword_title: "wordprss seo agency",
            keyword: "/wordprss-seo",
            item_coutn: 1,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 1,
        },
        {
            id: 2, 
            keyword_title: "ebay seo services",
            keyword: "/ebay.seo-services/",
            item_coutn: 1,
            item_icon:  <><b></b></>,
            item_coutn_2: "",
        },
        {
            id: 3, 
            keyword_title: "shopify seo london",
            keyword: "/local-seo/",
            item_coutn: 1,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 1,
        },
        {
            id: 4, 
            keyword_title: "youtube seo agency",
            keyword: "/youtube-seo/",
            item_coutn: 2,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 2,
        },
        {
            id: 5, 
            keyword_title: "wix seo services",
            keyword: "/wix.seo-services/",
            item_coutn: 3,
            item_icon: <><b></b></>,
            item_coutn_2: "",
        },
        {
            id: 6, 
            keyword_title: "local seo services london",
            keyword: "/local-seo/",
            item_coutn: 3,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 3,
        },
        {
            id: 7, 
            keyword_title: "youtube seo agency",
            keyword: "/youtube-seo/",
            item_coutn: 3,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 3,
        },
    ],
    right_data: [
        {
            id: 1, 
            keyword_title: "shopify seo london",
            keyword: "/local-seo/",
            item_coutn: 4,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 1,
        },
        {
            id: 2, 
            keyword_title: "youtube seo agency",
            keyword: "/youtube-seo/",
            item_coutn: 4,
            item_icon:  <><GreenIconUp /></>,
            item_coutn_2: 2,
        },
        {
            id: 3, 
            keyword_title: "wordprss seo agency",
            keyword: "/wordprss-seo/",
            item_coutn: 2,
            item_icon: <><b></b></>,
            item_coutn_2: "",
        },
        {
            id: 4, 
            keyword_title: "ebay seo services",
            keyword: "/ebay.seo-services/",
            item_coutn: 4,
            item_icon: <><YellowIcon /></>,
            item_coutn_2: 1,
        },
        {
            id: 5, 
            keyword_title: "local seo services london",
            keyword: "/local-seo/",
            item_coutn: 5,
            item_icon: <><YellowIcon /></>,
            item_coutn_2: 1,
        },
        {
            id: 6, 
            keyword_title: "youtube seo agency",
            keyword: "/youtube-seo/",
            item_coutn: 3,
            item_icon: <><GreenIconUp /></>,
            item_coutn_2: 1,
        },
        {
            id: 7, 
            keyword_title: "wix seo services",
            keyword: "/wix.seo-services/",
            item_coutn: 3,
            item_icon: <><b></b></>,
            item_coutn_2: "",
        },
    ], 
}
const {left_data, right_data} = rating_content

const RatingAreaHomeThree = () => {
    return (
      <>
        <section className="rating-area theme-bg-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="tpsection-wrapper rating-title-3 text-center">
                  <h2 className="tpsection-title-white-2 mb-90">
                    We practice what we preach
                  </h2>
                  <span className="d-none d-sm-block">
                    <UnderlineTen />
                  </span>
                </div>
              </div>
            </div>
            <div className="tprating-radient-bg p-relative">
              <div className="tprating-radient-shape">
                <Image src={rating_shape} alt="theme-pure" />
              </div>
              <div className="row gx-10 justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="tprating p-relative mb-25">
                    <div className="rating-shape d-none d-sm-block">
                      <div
                        className="rating-shape-one wow bounceIn"
                        data-wow-duration=".4s"
                        data-wow-delay=".6s"
                      >
                        <Image src={rating_shape_1} alt="theme-pure" />
                      </div>
                      <div
                        className="rating-shape-two wow bounceIn"
                        data-wow-duration=".4s"
                        data-wow-delay=".4s"
                      >
                        <Image src={rating_shape_2} alt="theme-pure" />
                      </div>
                      <div
                        className="rating-shape-three wow bounceIn"
                        data-wow-duration=".4s"
                        data-wow-delay=".6s"
                      >
                        <Image src={rating_shape_3} alt="theme-pure" />
                      </div>
                    </div>
                    <div className="tprating-heading d-flex align-items-center justify-content-between mb-15">
                      <h4 className="title">Keyword</h4>
                      <div className="rank">
                        <span>
                          Rank <i className="fa-light fa-angle-up"></i>
                          <EditIcon />
                        </span>
                      </div>
                    </div>
                    <ul>
                      {left_data.map((item, i) => (
                        <li key={i}>
                          <div className="tprating-item d-flex align-items-center flex-wrap justify-content-between">
                            <div className="tprating-content">
                              <div className="tprating-content-wrap flex-wrap d-flex align-items-center">
                                <div className="icon">
                                  <GoogleIcon />
                                </div>
                                <div className="flag">
                                  <i>
                                    <Image src={flag_img} alt="theme-pure" />
                                  </i>
                                  <span>en</span>
                                </div>
                                <p>{item.keyword_title}</p>
                              </div>
                              <span>{item.keyword}</span>
                            </div>
                            <div className="tprating-rank d-flex align-items-center mr-20">
                              <div className="tprating-rank-list mr-20">
                                <span>{item.item_coutn}</span>
                              </div>
                              <div className="tprating-rank-updaet">
                                <i>{item.item_icon}</i>
                                {item.item_coutn_2 ? <span>1</span> : ""}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="tprating mb-25">
                    <div className="tprating-heading d-flex align-items-center justify-content-between mb-15">
                      <h4 className="title">Keyword</h4>
                      <div className="rank">
                        <span>
                          Rank <i className="fa-light fa-angle-up"></i>
                          <EditIcon />
                        </span>
                      </div>
                    </div>
                    <ul>
                      {right_data.map((right_item, index) => (
                        <li key={index}>
                          <div className="tprating-item d-flex align-items-center flex-wrap justify-content-between">
                            <div className="tprating-content">
                              <div className="tprating-content-wrap flex-wrap d-flex align-items-center">
                                <div className="icon">
                                  <GoogleIcon />
                                </div>
                                <div className="flag">
                                  <i>
                                    {" "}
                                    <Image
                                      src={flag_img}
                                      alt="theme-pure"
                                    />{" "}
                                  </i>
                                  <span>en</span>
                                </div>
                                <p>{right_item.keyword_title}</p>
                              </div>
                              <span>{right_item.keyword}</span>
                            </div>
                            <div className="tprating-rank d-flex align-items-center mr-20">
                              <div className="tprating-rank-list mr-20">
                                <span>{right_item.item_coutn}</span>
                              </div>
                              <div className="tprating-rank-updaet">
                                <i>{right_item.item_icon}</i>
                                {right_item.item_coutn_2 ? (
                                  <span> {right_item.item_coutn_2}</span>
                                ) : (
                                  ""
                                )}
                              </div>
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

export default RatingAreaHomeThree;