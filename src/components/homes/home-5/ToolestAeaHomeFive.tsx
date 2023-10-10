 

import Image, { StaticImageData } from "next/image";
import tools_shape from "@/assets/img/shape/toolest-1.png";

import toolset_icon_1 from "@/assets/img/shape/toolest-icon-1.png";
import toolset_icon_2 from "@/assets/img/shape/toolest-icon-2.png";
import toolset_icon_3 from "@/assets/img/shape/toolest-icon-3.png";
import toolset_icon_4 from "@/assets/img/shape/toolest-icon-4.png";  

import toolset_shape_1 from "@/assets/img/shape/toolest-icon-shape-1.png";
import toolset_shape_2 from "@/assets/img/shape/toolest-icon-shape-2.png";
import toolset_shape_3 from "@/assets/img/shape/toolest-icon-shape-3.png";
import toolset_shape_4 from "@/assets/img/shape/toolest-icon-shape-4.png"; 
// tab 
import shape_1_1 from "@/assets/img/tool/tool-1-shape-1.png";
import shape_1_2 from "@/assets/img/tool/tool-1-shape-2.png";
import shape_1_3 from "@/assets/img/tool/tool-1-shape-4.png";
import shape_1_4 from "@/assets/img/tool/tool-1-shape-3.png";  
// tab 2
import shape_2_1 from "@/assets/img/shape/toolest-2.png";
import shape_2_2 from "@/assets/img/shape/toolest-3.png";
import shape_2_3 from "@/assets/img/shape/toolest-4.png";
import shape_2_4 from "@/assets/img/shape/tool-overly.png"; 
import shape_2_5 from "@/assets/img/shape/tool-dots.png"; 
// tab 3
import shape_3_1 from "@/assets/img/shape/toolest-2.png";
import shape_3_2 from "@/assets/img/tool/tool-3-shape-1.png";
import shape_3_3 from "@/assets/img/shape/tool-overly.png";
import shape_3_4 from "@/assets/img/shape/tool-dots.png";
// tab 4 
import shape_4_1 from "@/assets/img/tool/tool-4-shape-1.png";
import shape_4_2 from "@/assets/img/tool/tool-4-shape-2.png";
import shape_4_3 from "@/assets/img/tool/tool-4-shape-3.png";
import shape_4_4 from "@/assets/img/shape/tool-overly.png";  
import shape_4_5 from "@/assets/img/shape/tool-dots.png";  
import shape_4_6 from "@/assets/img/tool/tool-4-shape-4.png";  
 // toolset data types
interface tools_content_type {
    title: string;
    sm_info: JSX.Element;
    tab_content: {
        id: number;
        tab_id: string;
        cls: string;
        inner_items: {
            id: number;
            cls: string;
            img: StaticImageData;
        }[];
    }[];
    tab_data: {
        id: number;
        active: string;
        tab_id: string;
        icon: StaticImageData,
        shape: StaticImageData,
        title: JSX.Element;
        sm_des: JSX.Element;
    }[];
}
// toolset content 
const tools_content: tools_content_type = {
    title: "All in one SEO toolset",
    sm_info: <>Looking for a quick way to pull data for multiple keywords or <br /> URLs? Our cloud-based tools
    can scan up to <span>100,000</span> keywords,<br /> domains or URLs in one go.</>,
    tab_content: [
        {
            id: 2,
            tab_id: "profile",          
            cls: "toolest-shape",
            inner_items: [
                {id: 1, cls: "shape-one", img: shape_2_1},
                {id: 2, cls: "shape-two", img: shape_2_2},
                {id: 3, cls: "shape-three", img: shape_2_3},
                {id: 4, cls: "shape-four d-none d-lg-block", img: shape_2_4},
                {id: 5, cls: "shape-five", img: shape_2_5}, 
            ],    
        },
        {
            id: 3,
            tab_id: "messages",  
            cls: "toolest-three-shape",
            inner_items: [
                {id: 1, cls: "three-shape-one d-none d-md-block", img: shape_3_1},
                {id: 2, cls: "three-shape-two", img: shape_3_2},
                {id: 3, cls: "shape-four d-none d-lg-block", img: shape_3_3},
                {id: 4, cls: "shape-five", img: shape_3_4}, 
            ],
        },
        {
            id: 4,
            tab_id: "settings",  
            cls: "toolest-four-shape",
            inner_items: [
                {id: 1, cls: "four-shape-one", img: shape_4_1},
                {id: 2, cls: "four-shape-two d-none d-md-block", img: shape_4_2},
                {id: 3, cls: "four-shape-three", img: shape_4_3},
                {id: 4, cls: "shape-four d-none d-lg-block", img: shape_4_4}, 
                {id: 5, cls: "shape-five", img: shape_4_5}, 
                {id: 6, cls: "four-shape-six", img: shape_4_6}, 
            ],
        },

    ],
    tab_data: [
        {
            id: 1,
            active: "",
            tab_id: "home",  
            icon: toolset_icon_1,
            shape: toolset_shape_1,
            title: <>Find powerful <br /> backlinks</>,
            sm_des: <>Dig into search results, SERP features, <br /> CTRs and 45+ SEO metrics.</>,
        },
        {
            id: 2,
             
            active: "active",
            tab_id: "profile",  
            icon: toolset_icon_2,
            shape: toolset_shape_2,
            title: <>Find powerful <br /> backlinks</>,
            sm_des: <>Dig into search results, SERP features, <br /> CTRs and 45+ SEO metrics.</>,
        },
        {
            id: 3,
             
            active: "",
            tab_id: "messages",  
            icon: toolset_icon_3,
            shape: toolset_shape_3,
            title: <>Find powerful <br /> backlinks</>,
            sm_des: <>Dig into search results, SERP features, <br /> CTRs and 45+ SEO metrics.</>,
        },
        {
            id: 4,
             
            active: "",
            tab_id: "settings",  
            icon: toolset_icon_4,
            shape: toolset_shape_4,
            title: <>Find powerful <br /> backlinks</>,
            sm_des: <>Dig into search results, SERP features, <br /> CTRs and 45+ SEO metrics.</>,
        },
    ],
}
const {title, sm_info, tab_data, tab_content}   = tools_content

 
const ToolestAeaHomeFive = () => {
    return (
        <>    
            <section className="toolest-area toolest-bg pt-105 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-3 text-center mb-70">
                            <div className="section-3-title mb-15">{title}</div>
                            <p>{sm_info}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-gradient-tab-details pt-75 tab-content services-tab-anim" id="v-pills-tabContent">
                                
                                <div className="tab-pane fade" id="v-pills-home" role="tabpanel"
                                    aria-labelledby="v-pills-home-tab"  >
                                    <div className="toolest-one-thumb toolest-thumb p-relative">
                                        <div className="row"> 

                                            <div className="col-lg-6 col-md-6">
                                                <div className="toolest-one-thumb-one">
                                                    <div className="toolest-one-shape-one">
                                                        <Image src={shape_1_1} alt="theme-pure" />
                                                    </div>
                                                    <div className="toolest-one-shape-two mb-10">
                                                        <Image src={shape_1_2} alt="theme-pure" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="toolest-one-shape-three mb-30">
                                                    <Image src={shape_1_3} alt="theme-pure" />
                                                </div>
                                                <div className="toolest-one-shape-four d-none d-md-block">
                                                    <Image src={shape_1_4} alt="theme-pure" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="toolest-one-shape-five">
                                            <img src="assets/img/tool/tool-1-overlay-1.png" alt="theme-pure" />
                                        </div>
                                    </div>
                                </div>

                                {tab_content.map((item, i)  => 
                                    <div key={i} className={`tab-pane fade ${item.id === 2? "show active" : ""}`} id={`v-pills-${item.tab_id}`} role="tabpanel"
                                        aria-labelledby={`v-pills-${item.tab_id}-tab`} >
                                        <div className="toolest-thumb p-relative">
                                                <Image src={tools_shape} alt="theme-pure" />
                                            <div className={`${item.cls}`}>
                                                {item.inner_items?.map((inner, index)  => 
                                                    <div key={index} className={`toolest-${inner.cls}`}>
                                                        <Image src={inner.img} alt="theme-pure" />
                                                    </div>                                                
                                                )} 
                                            </div>
                                        </div>
                                    </div>                                
                                )} 
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="nav flex-column tp-gradient-tab-btn nav-pills me-3" id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                    {tab_data.map((tab_item, index) => 
                                        <div key={index} className={`nav-link ${tab_item.active}`} id={`v-pills-${tab_item.tab_id}-tab`} data-bs-toggle="pill"
                                            data-bs-target={`#v-pills-${tab_item.tab_id}`} role="tab" aria-controls="v-pills-home"
                                            aria-selected={`${tab_item.id === 2 ? "true" : "false"}`}>
                                            <div className={`tp-accordion-item tp-accordion-item-${tab_item.id}`}>
                                                <div className="tp-accordion-head">
                                                    <div className="tp-accordion-icon p-relative">
                                                        <Image src={tab_item.icon} alt="theme-pure" />
                                                        <div className="tp-accordion-icon-shape">
                                                            <Image src={tab_item.shape} alt="theme-pure" />
                                                        </div>
                                                        <span></span>
                                                    </div>
                                                    <div className="tp-accordion-title pl-30">
                                                        <h4 className="tp-toolest-title-info">{tab_item.title}</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-accordion-content">
                                                    <p>{tab_item.sm_des}</p>
                                                </div>
                                            <div className="tp-accordion-progress">
                                                <div className="tp-accordion-progress-dark p-relative">
                                                    <div className="tp-accordion-progress-active"></div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>   
                                    )} 
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
};

export default ToolestAeaHomeFive;