'use client'
import { useState, useEffect } from "react";
import PriceingContactus from "@/svg/inner-pages-icons/PriceingContactus";

// data type
interface price_content_type {
    title: string;
    sm_info: string;
    contact_us: string;
    btn_text: string;
    priceing_list: {
        id: number;
        inner_head: string;
        inner_title: string;
        inner_price: JSX.Element;
        inner_y_price: JSX.Element;
    }[];
}
// price data
const price_content: price_content_type  = {
    title: "Plans & Pricing",
    sm_info: "Stay cool, we have a 48-hour money back guarantee!",
    contact_us: "Need Custom Us",
    btn_text: "Contact Us",
    priceing_list: [
        {
            id: 1, 
            inner_head: "Beginner",
            inner_title: "Essential",
            inner_price: <><span>$</span>469<span>.06</span></>,
            inner_y_price: <><span>$</span>599<span>.09</span></>,
        },
        {
            id:  2, 
            inner_head: "For Future",
            inner_title: "Business",
            inner_price: <><span>$</span>969<span>.06</span></>,
            inner_y_price: <><span>$</span>999<span>.09</span></>,
        },
        {
            id: 3, 
            inner_head: "Mid size",
            inner_title: "Pro",
            inner_price: <><span>$</span>869<span>.06</span></>,
            inner_y_price: <><span>$</span>789<span>.09</span></>,
        },
    ]
}
const {title, sm_info, contact_us, btn_text, priceing_list}  = price_content

const PricingArea = () => {

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
            <section className="pricing-area tp-inner-pricing-switch tp-price-parent mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-inner-wrapper text-center">
                                <div className="pricing-inner-top">
                                    <h4 className="pricing-inner-top-title">{title}</h4>
                                    <p>{sm_info}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tpprice-switch text-center p-relative mb-55">
                                <div className="tpprice-switch-wrapper d-flex align-items-center justify-content-center">
                                    <div className="tppricing-switch-btn-switch">
                                        <div className="toggle">
                                            <input type="checkbox"
                                            onClick={handleSwitcherClick} defaultChecked={!isMonthlyActive}
                                            id="switcher" className="check" />
                                            <b className="switch"></b>
                                        </div>
                                    </div>
                                    <div className="tppricing-switch-btn-switch-item mt-10">
                                        <label  onClick={handleYearlyClick} 
                                            className={`toggler ${isMonthlyActive ? "toggler--is-active" : ""}`} 
                                            id="filt-monthly">Billed Yearly</label>
                                        <label  onClick={handleMonthlyClick} 
                                            className={`toggler ${isMonthlyActive ? "" : "toggler--is-active"}`} 
                                            id="filt-yearly">Billed Monthy</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-price-toggle">
                                <div id="monthly" className={`wrapper-full ${isMonthlyActive ? "hide" : ""}`}>
                                    <div className="pricing-inner">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3">
                                                <div className="pricing-custom text-center">
                                                    <div className="pricing-custom-icon">
                                                        <span> <PriceingContactus />  </span>
                                                    </div>
                                                    <div className="pricing-custom-content">
                                                        <span>{contact_us}</span>
                                                        <div className="pricing-inner-btn">
                                                            <button className="tp-btn">{btn_text}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {priceing_list.map((item, i) => 
                                                <div key={i} className="col-lg-3 col-md-3">
                                                    <div className={`pricing-inner-item ${i === 1 ? "active" : ""} ${i === 2 ? "mr-45" : ""} text-center`}>
                                                        <div className="pricing-inner-head">
                                                            <span>{item.inner_head}</span>
                                                        </div>
                                                        <div className="pricing-inner-title">
                                                            <span>{item.inner_title}</span>
                                                        </div>
                                                        <div className="pricing-inner-price">
                                                            <h4 className="pricing-inner-price-count">{item.inner_price}</h4>
                                                        </div>
                                                        <div className="pricing-inner-btn">
                                                            <button>Get Now</button>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            )} 
                                        </div>
                                    </div>
                                </div>
                                <div id="hourly" className={`wrapper-full ${isMonthlyActive ? "" : "hide"}`}>
                                    <div className="pricing-inner">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3">
                                                <div className="pricing-custom text-center">
                                                    <div className="pricing-custom-icon">
                                                        <span><PriceingContactus /></span>
                                                    </div>
                                                    <div className="pricing-custom-content">
                                                        <span>{contact_us}</span>
                                                        <div className="pricing-inner-btn">
                                                            <button className="tp-btn">{btn_text}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {priceing_list.map((item, i) => 
                                                <div key={i} className="col-lg-3 col-md-3">
                                                    <div className={`pricing-inner-item ${i === 1 ? "active" : ""} ${i === 2 ? "mr-45" : ""} text-center`}>
                                                        <div className="pricing-inner-head">
                                                            <span>{item.inner_head}</span>
                                                        </div>
                                                        <div className="pricing-inner-title">
                                                            <span>{item.inner_title}</span>
                                                        </div>
                                                        <div className="pricing-inner-price">
                                                            <h4 className="pricing-inner-price-count">{item.inner_y_price}</h4>
                                                        </div>
                                                        <div className="pricing-inner-btn">
                                                            <button>Get Now</button>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            )}  
                                        </div>
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

export default PricingArea;