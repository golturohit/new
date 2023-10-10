"use client"
import Image from "next/image";
import {useEffect, useState } from 'react'; 
import PriceSaveRound from '@/svg/price_save_round';

import priceing_shape_1 from "@/assets/img/shape/pricing-4-shape-3.png";
import priceing_shape_2 from "@/assets/img/shape/pricing-4-shape-2.png";

// priceing data type
interface priceing_data_home_4_type {
    sub_title: string;
    title: string;
    essential: string;
    monthly_e_price: string;
    yearly_e_price: string;
    pro: string;
    monthly_pro_price: string;
    yearly_pro_price: string;
    business: string;
    monthly_business_price: string;
    yearly_business_price: string;
    priceing_data: {
        id: number,
        title: string,
        m_e_price: string,
        m_p_price: string,
        m_b_price: string,
        y_e_price: string,
        y_p_price: string,
        y_b_price: string,
        
    }[];
    btn_items: {
         id: number,
         btn_cls: string,
         btn_text: string,
    }[];
}

// priceing content 
const priceing_data_home_4: priceing_data_home_4_type = {
    sub_title: "Pricing Plans",
    title: "Packages for everyone",

    // priceing data 
    essential: "Essential",
    monthly_e_price: '36.00',
    yearly_e_price: '46.00',

    pro: "Rro",
    monthly_pro_price: '54.00',
    yearly_pro_price: '64.00',
    
    business: "Business",
    monthly_business_price: '89.00',
    yearly_business_price: '99.00',
    // priceing data
    priceing_data: [
        {
            id: 1, 
            title: "keyword Research",
            // monthly price
            m_e_price: "100",
            m_p_price: "200",
            m_b_price: "250",
            // yearly price 
            y_e_price: "200",
            y_p_price: "300",
            y_b_price: "350",
        },
        {
            id: 2, 
            title: "On-page and SERP analysis",
            // monthly price
            m_e_price: "10",
            m_p_price: "20",
            m_b_price: "30",
            // yearly price 
            y_e_price: "40",
            y_p_price: "60",
            y_b_price: "80",
        },
        {
            id: 3, 
            title: "Tools for Agencies",
            // monthly price
            m_e_price: "Limited",
            m_p_price: "Limited",
            m_b_price: "Limited",
            // yearly price 
            y_e_price: "Limited",
            y_p_price: "Unlimited",
            y_b_price: "Limited",
        },
        {
            id: 4, 
            title: "Сontent Marketing",
            // monthly price
            m_e_price: "15 articles",
            m_p_price: "30 articles",
            m_b_price: "20 articles",
            // yearly price 
            y_e_price: "35 articles",
            y_p_price: "60 articles",
            y_b_price: "90 articles",
        },
        {
            id: 5, 
            title: "Additional Features",
            // monthly price
            m_e_price: "5",
            m_p_price: "10",
            m_b_price: "15",
            // yearly price 
            y_e_price: "12",
            y_p_price: "26",
            y_b_price: "35",
        },
    ],
    // btn items
    btn_items: [
        {
            id: 1,
            btn_cls: "tppricing-4-price tppricing-right tppricing-4-btn",
            btn_text: "Join this Plan",
        },
        {
            id: 2,
            btn_cls: "tppricing-4-price active tppricing-4-btn",
            btn_text: "Join this Plan",
        },
        {
            id: 3,
            btn_cls: "tppricing-4-price tppricing-right tppricing-4-btn",
            btn_text: "Join this Plan",
        },
    ]

}
const {sub_title, title, essential, monthly_e_price, yearly_e_price, pro, monthly_pro_price, yearly_pro_price, business, monthly_business_price, yearly_business_price, priceing_data, btn_items } = priceing_data_home_4


const PricingAreaHomeFour = () => {

    const [isMonthlyActive, setIsMonthlyActive] = useState(true);
    const handleMonthlyClick = () => {
      setIsMonthlyActive(true);
    };
  
    const handleYearlyClick = () => {
      setIsMonthlyActive(false);
    };
  
    const handleSwitcherClick = () => {
      setIsMonthlyActive((prevState) => !prevState);
    };

  useEffect(() => {
    const monthlySEOElement = document.getElementById("monthly-seo");
    const hourlySEOElement = document.getElementById("hourly-seo");

    if (isMonthlyActive) {
      if (monthlySEOElement) {
        monthlySEOElement.classList.remove("analisis-hide");
      }
      if (hourlySEOElement) {
        hourlySEOElement.classList.add("analisis-hide");
      }
    } else {
      if (monthlySEOElement) {
        monthlySEOElement.classList.add("analisis-hide");
      }
      if (hourlySEOElement) {
        hourlySEOElement.classList.remove("analisis-hide");
      }
    }
  }, [isMonthlyActive]);

    return (
        <>
            <section className="pricing-area tp-price-parent tppricing-box-active pb-170 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-wrapper text-center mb-40">
                                <span>{sub_title}</span>
                                <h5 className="section-title-4 section-title-4-2">{title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="tpprice-4-switch-box  p-relative">
                        <div className="tpprice-4-switch p-relative">
                            <div className="tpprice-switch-wrapper tpprice-4-position tppricing-switch-2">
                                <div className="toggle">
                                    <input type="checkbox" id="switcher-price" className="tp-check" onClick={handleSwitcherClick} defaultChecked={!isMonthlyActive} />
                                    <b className="switch"></b>
                                </div>
                                <div className="label-text">
                                    <label className={`toggler ${isMonthlyActive ? "toggler-price-active" : ""}`} id="filt-monthly-price" onClick={handleYearlyClick}>Billed Yearly</label>
                                    <label className={`toggler ${isMonthlyActive ? "" : "toggler-price-active"}`} id="filt-yearly-price" onClick={handleMonthlyClick}>Billed Monthy</label>
                                </div>
                            </div>
                        </div>
                        <div className="tppricing-shape-4">
                            <div className="tppricing-shape-1">
                                <Image src={priceing_shape_1} alt="theme-pure" />
                            </div>
                            <div className="tppricing-shape-3">
                                <PriceSaveRound />
                            </div>
                            <div className="tppricing-shape-2">
                                <Image src={priceing_shape_2} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    <div className="price-scroll">
                        <div className="price-scroll-width">
                            <div className="row gx-0">
                                <div className="col-12">

                                    <div id="monthly-price" className={`wrapper-full ${isMonthlyActive ? "" : "price-is-hide"}`}>
                                    {/* <!-- priceing-top --> */}
                                    <div className="tppriceing-top">
                                        <div className="row gx-0">
                                            <div className="price-custom-col-1">
                                            </div>
                                            <div className="price-custom-col-2">
                                                <div className="row gx-0">
                                                    <div className="col-4">
                                                        <div className="tppricing-4-head text-center">
                                                            <span>{essential}</span>
                                                            <h4 className="title">${monthly_e_price}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="tppricing-4-head active text-center p-relative">
                                                            <div className="big-price-shape"></div>
                                                            <div className="sm-price-shape"></div>
                                                            <span>{pro}</span>
                                                            <h4 className="title">${monthly_pro_price}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="tppricing-4-head text-center"> 
                                                            <span>{business}</span>
                                                            <h4 className="title">${monthly_business_price}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- priceing-top-end -->
                                    <!-- pricing-box --> */}
                                    <div className="pricing-box-4">
                                        {priceing_data.map((y_item, i) => 
                                            <div key={i} className="row gx-0">
                                                <div className="price-custom-col-1">
                                                    <div className="tppricing-4-title">
                                                        <h4 className="title">{y_item.title}</h4>
                                                    </div>
                                                </div>
                                                <div className="price-custom-col-2">
                                                    <div className="row gx-0">
                                                    <div className="col-4">
                                                        <div className="tppricing-4-price tppricing-right text-center">
                                                            <p>{y_item.y_e_price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="tppricing-4-price active text-center">
                                                            <p>{y_item.y_p_price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="tppricing-4-price tppricing-left text-center">
                                                            <p>{y_item.y_b_price}</p>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 
                                        {/* <!-- pricing-item-end -->
                                        <!-- pricing-item --> */}
                                        <div className="row gx-0">
                                            <div className="price-custom-col-1"></div>
                                            <div className="price-custom-col-2">
                                                <div className="row gx-0">
                                                    {btn_items.map((btn_y_item, b_y_index) => 
                                                        <div key={b_y_index} className="col-4">
                                                            <div className={btn_y_item.btn_cls}>
                                                                <p>
                                                                    <button>{btn_y_item.btn_text}</button>
                                                                </p>
                                                            </div>
                                                        </div>                                                        
                                                    )} 
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- pricing-item-end --> */}
                                    </div>
                                    {/* <!-- pricing-box-end --> */}
                                    </div>

                                    <div id="hourly-price" className={`wrapper-full ${isMonthlyActive ? "price-is-hide" : ""}`}>
                                    {/* <!-- priceing-top --> */}
                                    <div className="tppriceing-top">
                                        <div className="row gx-0">
                                            <div className="price-custom-col-1">
                                            </div>
                                            <div className="price-custom-col-2">
                                                <div className="row gx-0">
                                                <div className="col-4">
                                                    <div className="tppricing-4-head text-center">
                                                        <span>{essential}</span>
                                                        <h4 className="title">${yearly_e_price}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="tppricing-4-head active text-center p-relative">
                                                        <div className="big-price-shape"></div>
                                                        <div className="sm-price-shape"></div>
                                                        <span>{pro}</span>
                                                        <h4 className="title">${yearly_pro_price}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="tppricing-4-head text-center"> 
                                                        <span>{business}</span>
                                                        <h4 className="title">${yearly_business_price}</h4>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- priceing-top-end -->
                                    <!-- pricing-box --> */}
                                    <div className="pricing-box-4">
                                        {priceing_data.map((m_item, index) => 
                                                <div key={index} className="row gx-0">
                                                    <div className="price-custom-col-1">
                                                        <div className="tppricing-4-title">
                                                            <h4 className="title">{m_item.title}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="price-custom-col-2">
                                                        <div className="row gx-0">
                                                        <div className="col-4">
                                                            <div className="tppricing-4-price tppricing-right text-center">
                                                                <p>{m_item.m_e_price}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="tppricing-4-price active text-center">
                                                                <p>{m_item.m_p_price}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="tppricing-4-price tppricing-left text-center">
                                                                <p>{m_item.m_b_price}</p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            )} 
                                        {/* <!-- pricing-item-end -->
                                        <!-- pricing-item --> */}
                                        <div className="row gx-0">
                                            <div className="price-custom-col-1"></div>
                                            <div className="price-custom-col-2">
                                                <div className="row gx-0">
                                                        {btn_items.map((btn_item, b_index) => 
                                                            <div key={b_index} className="col-4">
                                                                <div className={btn_item.btn_cls}>
                                                                    <p>
                                                                        <button>{btn_item.btn_text}</button>
                                                                    </p>
                                                                </div>
                                                            </div>                                                        
                                                        )} 
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- pricing-item-end --> */}
                                    </div>
                                    {/* <!-- pricing-box-end --> */}
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

export default PricingAreaHomeFour;