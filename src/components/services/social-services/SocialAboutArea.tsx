import LeftArrowIcon from "@/svg/services_icon/LeftArrowIcon";


import main_bg_1 from "@/assets/img/bg/seo-5-bg-1.png";
import main_bg_2 from "@/assets/img/bg/services-tab/social-services-tab-3.png";
import main_bg_3 from "@/assets/img/bg/services-tab/social-services-tab-2.png";
// tab 01 
import tab_1_1 from "@/assets/img/shape/seo-5-shape-1.png";
import tab_1_2 from "@/assets/img/shape/seo-5-shape-2.png";
import tab_1_3 from "@/assets/img/shape/seo-5-shape-3.png";
import tab_1_4 from "@/assets/img/shape/seo-5-shape-4.png";
// tab 02 
import tab_2_1 from "@/assets/img/seo-shape/seo-tab-shape-1.png";
import tab_2_2 from "@/assets/img/seo-shape/seo-tab-shape-2.png";
import tab_2_3 from "@/assets/img/shape/seo-5-shape-3.png";
import tab_2_4 from "@/assets/img/seo-shape/seo-tab-shape-3.png";
// tab 03 
import tab_3_1 from "@/assets/img/seo-shape/seo-tab-shape-4.png";
import tab_3_2 from "@/assets/img/seo-shape/seo-tab-shape-5.png";
import tab_3_3 from "@/assets/img/shape/seo-5-shape-3.png";
import tab_3_4 from "@/assets/img/shape/seo-5-shape-4.png";
import Image, { StaticImageData } from "next/image";


// data type
interface social_about_content_type {
    tab_content: {
        id: number;
        tab_id: string;
        bg_img: StaticImageData;
        inner_items: {
            id: number;
            cls: string;
            img: StaticImageData;
        }[];
    }[];
    title: JSX.Element;
    sm_info: JSX.Element;
    social_tabs: {
        id: number,
        tab_id:  string,
        title: string,
    }[];
}
// social about data 
const social_about_content: social_about_content_type = {
    tab_content: [
        {
            id: 1, 
            tab_id: "home",
            bg_img: main_bg_1,
            inner_items: [  
                {
                id: 1, 
                cls: "one", 
                img: tab_1_1,
                }, 
                {
                id: 2, 
                cls: "two", 
                img: tab_1_2,
                }, 
                {
                id: 3, 
                cls: "three", 
                img: tab_1_3,
                }, 
                {
                id: 4, 
                cls: "four", 
                img: tab_1_4,
                },
            ],
        },
        {
            id: 2, 
            tab_id: "profile",
            bg_img: main_bg_2,
            inner_items: [ 
                {
                id: 1, 
                cls: "one", 
                img: tab_2_1,
                }, 
                {
                id: 2, 
                cls: "two", 
                img: tab_2_2,
                }, 
                {
                id: 3, 
                cls: "three", 
                img: tab_2_3,
                }, 
                {
                id: 4, 
                cls: "four", 
                img: tab_2_4,
                },
            ]
        },
        {
            id: 3, 
            tab_id: "messages",
            bg_img: main_bg_3,
            inner_items: [ 
                {
                id: 1, 
                cls: "one", 
                img: tab_3_1,
                }, 
                {
                id: 2, 
                cls: "two", 
                img: tab_3_2,
                }, 
                {
                id: 3, 
                cls: "three", 
                img: tab_3_3,
                }, 
                {
                id: 4, 
                cls: "four", 
                img: tab_3_4,
                },
            ]
        },
    ],
    title: <>Total link <br /> building visibility</>,
    sm_info: <>Link building agency Reporting, measurement, <br /> and Analysis.</>,
    social_tabs: [
        {
            id: 1, 
            tab_id: "home",
            title: "Backlink Generation",
        },
        {
            id: 2, 
            tab_id: "profile",
            title: "Dedicated link building ",
        },
        {
            id: 3, 
            tab_id: "messages",
            title: "High Value Linking ",
        },
    ],
}
const {tab_content , title, sm_info, social_tabs}  = social_about_content

const SocialAboutArea = () => {
    return (
        <>
            <section className="about-area pb-20">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 order-lg-1 order-2">
                        <div className="about-inner-thums mb-60">
                            <div className="d-flex align-items-start">
                                <div className="tab-content" id="tool-v-pills-tabContent">
                                    {tab_content.map((item, i) => 
                                        <div key={i} 
                                        className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                                        id={`tool-v-pills-${item.tab_id}`} 
                                        role="tabpanel"
                                        aria-labelledby={`tool-v-pills-${item.tab_id}-tab`} >
                                            <div className="seo-5-thumb seo-inner-shape p-relative mb-40">
                                                <div className="seo-5-main-bg">
                                                    <Image src={item.bg_img} alt="theme-pure" />
                                                </div>
                                                <div className="seo-5-shape d-none d-md-block">
                                                    {item.inner_items?.map((i_item, inner_i) => 
                                                        <div key={inner_i} className={`seo-5-shape-${i_item.cls}`} data-parallax='{"x": -100, "smoothness": 20}'>
                                                            <Image src={i_item.img} alt="theme-pure" />
                                                        </div>                                                    
                                                    )} 
                                                </div>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="about-inner-wrapper mb-60 mt-25">
                                <div className="optimize-subtitle pl-100 mb-50">
                                    <h5 className="section-title-4 fs-54">{title}</h5>
                                    <p>{sm_info}</p>
                                </div>
                                <div className="nav flex-column nav-pills nav-tab-area pr-170 pl-40" id="tool-v-pills-tab" role="tablist"
                                    aria-orientation="vertical">

                                    {social_tabs.map((tab_item, tab_index) => 
                                        <button  key={tab_index}
                                        className={`nav-link ${tab_index === 0 ? "active" : ""}`} 
                                        id={`tool-v-pills-${tab_item.tab_id}-tab`} 
                                        data-bs-toggle="pill"
                                        data-bs-target={`#tool-v-pills-${tab_item.tab_id}`} 
                                        type="button" role="tab" 
                                        aria-controls={`tool-v-pills-${tab_item.tab_id}`}
                                        aria-selected={`${tab_index === 0 ? "true" : "false"}`}><span> <LeftArrowIcon /> </span> {tab_item.title}</button>
                                    
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

export default SocialAboutArea;