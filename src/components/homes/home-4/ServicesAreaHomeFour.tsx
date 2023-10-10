import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SmollRound from "@/svg/smoll_round";
import MarketingIcon from "@/svg/marketing_icon";
import RightArrowThree from "@/svg/right_arrow_3";
import SEOAnalyticsIcon from "@/svg/SEO_analytics_icon";
import SocialMarketingIcon from "@/svg/social_marketing_icon";

import header_rocket from "@/assets/img/shape/header-rocket.png";
import service_shape_1 from "@/assets/img/shape/choose-4-shape-1.png";
import service_shape_2 from "@/assets/img/shape/choose-4-shape-2.png";
import service_shape_3 from "@/assets/img/shape/choose-4-shape-3.png";

interface service_content_type {
    sub_title: string;
    sub_title_2: string;
    title: string;
    service_data: {
        id: number;
        shape: StaticImageData;
        icon: JSX.Element;
        title: string;
        sm_des: string;
    }[];
    sm_info: JSX.Element;
}

const service_content: service_content_type = {
    sub_title: 'Why services Us',
    sub_title_2: "Why Choose Us",
    title: "Our à services",
    service_data: [
        {
            id: 1, 
            shape: service_shape_1,
            icon: <MarketingIcon />,
            title: "Digital Marketing",
            sm_des: "We develop digital strategies, products and services appreciated by clients.",
        },
        {
            id: 2, 
            shape: service_shape_2,
            icon: <SEOAnalyticsIcon />,
            title: "SEO Analytics",
            sm_des: "We develop digital strategies, products and services appreciated by clients.",
        },
        {
            id: 3, 
            shape: service_shape_3,
            icon: <SocialMarketingIcon />,
            title: "Social Marketing",
            sm_des: "We develop digital strategies, products and services appreciated by clients.",
        },
    ],
    sm_info: <>You can also find our <Link href="/service"> Services <i className="d-none d-md-block"> <SmollRound /> </i> </Link> to contact for the consulting.</>,
}
const {sub_title, sub_title_2, title, service_data, sm_info}  = service_content


const ServicesAreaHomeFour = ({style}: any) => {
    return (
        <>
           <section className="services-area pb-120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12"> 
                        <div className={`${style ? "optimize-subtitle mb-50" : "section-wrapper mb-60"} text-center`}>
                            <span>{style ? sub_title_2 : sub_title }</span>
                            <h5 className={`section-title-4 ${style ? "fs-54" : ""}`}>{title}</h5>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="services-item-4 text-center mb-55">
                                    <div className="services-icon-4 mb-30">
                                        <Image src={item.shape} alt="theme-pure" />
                                        <i> {item.icon} </i>
                                    </div>
                                    <div className="services-content-4">
                                        <h5 className="title mb-20">{item.title}</h5>
                                        <p>{item.sm_des}</p> 
                                        <div className={`${style ? "services-inner-btn" : "services-btn-4"} p-relative`}>
                                            <Link href="/marketing-analysis">
                                                <span>Read More</span>
                                                <i> <RightArrowThree />  </i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        )} 
                    </div>
                    {style ? "" : 
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="services-bottom text-center">
                                    <div className="servics-details-4 d-flex align-items-center justify-content-center">
                                        <Image src={header_rocket} alt="theme-pure" />
                                        <p>{sm_info}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section> 
        </>
    );
};

export default ServicesAreaHomeFour;