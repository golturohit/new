import Link from "next/link";
import ServiceImportantIcon from "@/svg/services_icon/ServiceImportantIcon";

import social_shape_1 from "@/assets/img/services/analysis/analysis-dots.png";
import social_shape_2 from "@/assets/img/services/analysis/analysis-round.png";
import social_shape_3 from "@/assets/img/services/analysis/analysis-round-2.png";
import social_shape_4 from "@/assets/img/services/analysis/analysis-line-1.png";
import social_shape_5 from "@/assets/img/services/analysis/analysis-line-2.png";
import social_shape_6 from "@/assets/img/services/analysis/analysis-line-3.png";
import Image, { StaticImageData } from "next/image";


interface social_service_content_type {
    sub_title: string;
    title: JSX.Element;
    title_2: JSX.Element;
    sm_info_2: string;

    service_important_list: {
        id: number;
        title: string;
        sm_des: string;
    }[];
    table_title: string;
    table_header: {
        id: number;
        cls: string;
        text: string;
    }[];
    services_seo_item: {
        id: number,
        blankink_title: string,
        blankink: string,
        score: number,
        keyword: string,
        domain: string,
        type: string,
        type_2: string,
    }[];
    social_shapes: {
        id: number,
        img: StaticImageData,
        duration?: string,
        delay?: string,
        cls?: string,
    }[];
}

// social service data 
const social_service_content: social_service_content_type = {
    sub_title: "We get results, plain and simple",
    title: <>Why should you <br /> use an SEO agency?</>,
    title_2: <>Conduct website audience analysis <br /> and explore its geography</>,
    sm_info_2: "Research traffic segmentation by Country and Continent",


    service_important_list: [
        {
            id: 1, 
            title: "Backlink building",
            sm_des: "See the link placement in the website preview",
        },
        {
            id: 2, 
            title: "Syndicated Content",
            sm_des: "See the link placement in the website preview",
        },
        {
            id: 3, 
            title: "Local Citations",
            sm_des: "See the link placement in the website preview",
        },
    ],
    table_title: "Blankink",
    table_header: [
        {id: 1, cls: "one",     text: "Score"},
        {id: 2, cls: "two",     text: "Keyword"},
        {id: 3, cls: "three",   text: "Domain"},
        {id: 4, cls: "four",    text: "Type"},
    ],
    services_seo_item: [
        {
            id: 1, 
            blankink_title: "WOG PRIDE on the app store",
            blankink: "https://www.amazon.com/gameing-laptops/",
            score: 86,
            keyword: "Laptop",
            domain: "amazon.com",
            type: "DF TXT",
            type_2: "TXT",
        },
        {
            id: 2, 
            blankink_title: "SEO PRIDE on the app store",
            blankink: "https://www.amazon.com/gameing-laptops/",
            score: 105,
            keyword: "Laptop",
            domain: "amazon.com",
            type: "DF TXT",
            type_2: "TXT",
        },
        {
            id: 3, 
            blankink_title: "PRIDE on the app store",
            blankink: "https://www.amazon.com/gameing-laptops/",
            score: 42,
            keyword: "Laptop",
            domain: "amazon.com",
            type: "DF TXT",
            type_2: "TXT",
        },
        {
            id: 4, 
            blankink_title: "WOG on the Online store",
            blankink: "https://www.amazon.com/gameing-laptops/",
            score: 6,
            keyword: "Laptop",
            domain: "amazon.com",
            type: "DF TXT",
            type_2: "TXT",
        },

    ],
    social_shapes: [
        {id: 1, img: social_shape_1 , duration: "", delay: "", cls: "  d-none d-md-block"},
        {id: 2, img: social_shape_2 , duration: "", delay: "", cls: ""},
        {id: 3, img: social_shape_3 , duration: "", delay: "", cls: " d-none d-md-block"},
        {id: 4, img: social_shape_4 , duration: ".4s", delay: ".6s", cls: " wow bounceIn"},
        {id: 5, img: social_shape_5 , duration: ".4s", delay: ".4s", cls: " wow bounceIn"},
        {id: 6, img: social_shape_6 , duration: ".4s", delay: ".6s", cls: " wow bounceIn"},
    ],
}
const {sub_title, title, title_2, sm_info_2, service_important_list, table_title, table_header, services_seo_item, social_shapes} = social_service_content

type style_type = {
    style?: any,
}

const SocialServicesImportant = ({style} : style_type) => {
    return (
        <>                      
           <section className={`${style ? "analysis-area pt-110 pb-110" : "services-area services-section-bottom pb-155"}`}>
                <div className="container"> 
                    <div className={`row ${style? "justify-content-center" : ""}`}>
                        <div className={`${style? "col-lg-10" : "col-12"}`}>
                            {style ? 
                                <div className="analysis-inner-section text-center mb-50">
                                    <h4 className="analysis-inner-title">{title_2}</h4>
                                    <span>{sm_info_2}</span>
                                </div>
                                : 
                                <div className="optimize-subtitle mb-45">
                                    <span> {sub_title}</span>
                                    <h5 className="section-title-4 fs-54">{title}</h5>
                                </div>                          
                            }
                        </div>
                    </div>
                    {style ? <></> :
                        <div className="row">
                            {service_important_list.map((item, i) => 
                                <div key={i} className="col-xl-4 col-lg-4">
                                    <div className={`services-important-item ${i === 1 ? "ml-50j" : ""} mb-30`}>
                                        <div className="services-important-icon">
                                            <span> <ServiceImportantIcon /> </span>
                                        </div>
                                        <div className="services-important-content">
                                            <h4 className="services-important-title">{item.title}</h4>
                                            <p>{item.sm_des}</p>
                                        </div>
                                    </div>
                                </div>                        
                            )} 
                        </div>   
                    }
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-seo p-relative mt-20">
                                <div className="services-seo-scroll">

                                    <div className="services-seo-head">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-5 col-5">
                                                <div className="services-seo-heading">
                                                    <h4 className="services-seo-heading-title">
                                                    <input id="remeber" type="checkbox" />
                                                    <label htmlFor="remeber">{table_title}</label>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-7 col-7">
                                                <div className="services-seo-catagory">
                                                    <div className="row">
                                                        {table_header.map((tab_head, t_index) => 
                                                            <div key={t_index} className="col-lg-3 col-3">
                                                                <div className={`services-seo-heading-item services-seo-catagory-${tab_head.cls}`}>
                                                                    <span>{tab_head.text}</span>
                                                                </div>
                                                            </div>
                                                        )} 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="services-seo-info">
                                        {services_seo_item.map((tab_item, t_i) => 
                                            <div key={t_i} className="services-seo-item">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-4 col-lg-5 col-5">
                                                        <div className="services-seo-link d-flex">
                                                        <div className="services-seo-link-check">
                                                            <input id="seo-link-check" type="checkbox" />
                                                            <label htmlFor="seo-link-check">{tab_item.blankink_title}</label>
                                                            <span><Link href={tab_item.blankink} target="_blank">{tab_item.blankink}</Link></span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8 col-lg-7 col-7">
                                                        <div className="services-seo-catagory">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-3">
                                                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                                                    <span>{tab_item.score}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3">
                                                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                                                    <span>{tab_item.keyword}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3">
                                                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                                                    <span><Link href={tab_item.domain} target="_blank">{tab_item.domain}</Link></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-3">
                                                                <div className="services-seo-catagory-item services-seo-catagory-four">
                                                                    <b>{tab_item.type}</b> {' '}
                                                                    <b>{tab_item.type_2}</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 
                                    </div>
                                </div>
                                <div className="analysis-chart-shape-wrap">
                                    {social_shapes.map((shape, s_index)  => 
                                        <div key={s_index} className={`analysis-chart-shape-${shape.id} ${shape.cls}`} data-wow-duration={shape.duration} data-wow-delay={shape.delay}>
                                            <Image src={shape.img} alt="theme-pure" />
                                        </div> 
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default SocialServicesImportant;