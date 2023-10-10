"use client"
import { useEffect, useState } from "react";
import BGShapeFive from "@/svg/bg_shape_5"; 
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import hand_img from "@/assets/img/shape/hand-shape.png";
import priceing_shape from "@/assets/img/shape/pricing-1-shape-1.png";
import priceing_icon_1 from "@/assets/img/icon/pricing-icon-1.png";
import priceing_icon_2 from "@/assets/img/icon/pricing-icon-2.png";

import save_icon from "@/assets/img/shape/save.png";
import triangle_icon from "@/assets/img/shape/triangle.png";
import smill_icon from "@/assets/img/shape/smill.png";

// priceing data type
interface priceing_content_type {
    sub_title: string;
    title: string;
    monthly_price: {
        id: number;
        icon: StaticImageData;
        title: string;
        fetures: {
            feture: string;
            cls: string;
        }[];
        price: number;
        price_title: string;
    }[];
    yearly_price: {
        id: number;
        icon: StaticImageData;
        title: string;
        fetures: {
            feture: string;
            cls: string;
        }[];
        price: number;
        price_title: string;
    }[];
}
// priceing data 
const priceing_content: priceing_content_type = {
    sub_title: "Our Pricing",
    title: "Choose Your Product.",
    monthly_price: [
        {
            id: 1,
            icon: priceing_icon_1,
            title: "Diamond Pack",
            fetures: [
                {feture: "999 Email", cls: ""},
                {feture: "3gb Hosting", cls: ""},
                {feture: "Email & Live chat", cls: ""},
                {feture: "1 Domain", cls: "tppricing-inactive"},
            ],
            price: 19.99,
            price_title: "up to 10 user + 1.99 per user"
        },
        {
            id: 2,
            icon: priceing_icon_2 ,
            title: "Gold Plan",
            fetures: [
                {feture: "Unlimited Email", cls: ""},
                {feture: "5gb Hosting", cls: ""},
                {feture: "Email & Live chat", cls: ""},
                {feture: "3 Domain", cls: "tppricing-inactive"},
            ],
            price: 120.99,
            price_title: "up to 10 user + 1.99 per user"
        },
    ],
    yearly_price: [
        {
            id: 1,
            icon: priceing_icon_1,
            title: "Diamond Pack",
            fetures: [
                {feture: "999 Email", cls: ""},
                {feture: "3gb Hosting", cls: ""},
                {feture: "Email & Live chat.", cls: ""},
                {feture: "1 Domain", cls: "tppricing-inactive"},
            ],
            price: 209.99,
            price_title: "up to 10 user + 1.99 per user"
        },
        {
            id: 2,
            icon: priceing_icon_2 ,
            title: "Gold Plan",
            fetures: [
                {feture: "499 Email", cls: ""},
                {feture: "2gb Hosting", cls: ""},
                {feture: "Email & Live chat.", cls: ""},
                {feture: "1 Domain", cls: "tppricing-inactive"},
            ],
            price: 320.99,
            price_title: "up to 10 user + 1.99 per user"
        },
    ],

}
const {sub_title, title, monthly_price, yearly_price} = priceing_content

const PricingAreaHomeOne = () => {
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
            <section className="pricing-area tp-price-parent pricing-shape-relative p-relative pt-40 pb-90">
                <div className="tpprice-shape-one d-none d-xl-block">
                    <Image src={hand_img} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="tppricing-wrapper">
                    <div className="tppricing-shape">
                        <div className="tppricing-shape-one d-none d-md-block">
                            <Image src={priceing_shape} alt="theme-pure" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tpprice-switch p-relative mb-40">
                                <div className="tpsection__content pt-65 mb-20">
                                <div className="tpbanner__sub-title mb-15">
                                    <span>{sub_title}</span>
                                    <i> <BGShapeFive /> </i>
                                </div>
                                <h2 className="tpsection__title mb-25">{title}</h2>
                                </div>
                                <div className="tpprice-switch-wrapper">
                                    <label  className={`toggler ${isMonthlyActive ? "toggler--is-active" : ""}`}
                                        onClick={handleMonthlyClick} id="filt-monthly"> Pay Monthly
                                        </label>
                                        <div className="toggle">
                                            <input type="checkbox" id="switcher" 
                                            className="tp-check" onClick={handleSwitcherClick} defaultChecked={!isMonthlyActive} />
                                            <b className="switch"></b>
                                        </div>
                                    <label className={`toggler ${isMonthlyActive ? "" : "toggler--is-active"}`}
                                        onClick={handleYearlyClick} id="filt-yearly"> Pay Yearly
                                    </label> 
                                </div>
                                <div className="tpprice-shape">
                                <div className="tpprice-shape-two d-none d-lg-block">
                                    <Image src={save_icon} alt="theme-pure" />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-price-toggle">
                                <div id="monthly" className={`wrapper-full ${isMonthlyActive ? "" : "hide"}`}>
                                    <div className="tpprice pl-40">
                                        <div className="row">
                                            {monthly_price.map((item, i ) => 
                                                <div key={i} className="col-lg-6 col-md-6">
                                                    <div className="tppricing mb-30">
                                                        <div className="tppricing-head">
                                                            <div className="tppricing-icon mb-30">
                                                                <i><Image src={item.icon} alt="theme-pure" /></i>
                                                            </div>
                                                            <h3 className="tppricing-title mb-50">{item.title}</h3>
                                                        </div>
                                                        <div className="tppricing-content">
                                                            <div className="tppricing-feature mb-45">
                                                                <ul>
                                                                    {item.fetures?.map((fetue, index) => 
                                                                        <li key={index} className={fetue.cls}><i className="fa-light fa-check"></i>{fetue.feture}</li>                                                                 
                                                                    )} 
                                                                </ul>
                                                            </div>
                                                            <div className="tppricing-price mb-40">
                                                                <h4 className="tppricing-price-title">${item.price}</h4>
                                                                <span>{item.price_title}</span>
                                                            </div>
                                                            <div className="tppricing-btn-two">
                                                                <Link href="/contact" className="tp-btn-blue">Get Started</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            )} 
                                        </div>
                                        <div className="tpprice-shape d-none d-lg-block">
                                            <div className="tpprice-shape-two">
                                                <Image src={triangle_icon} alt="theme-pure" />
                                            </div>
                                            <div className="tpprice-shape-three">
                                                <Image src={smill_icon} alt="theme-pure" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hourly" className={`wrapper-full ${isMonthlyActive ? "hide" : ""}`}>
                                    <div className="tpprice pl-40">
                                        <div className="row"> 
                                            {yearly_price.map((item, i ) => 
                                                <div key={i} className="col-lg-6 col-md-6">
                                                    <div className="tppricing mb-30">
                                                        <div className="tppricing-head">
                                                            <div className="tppricing-icon mb-30">
                                                                <i><Image src={item.icon} alt="theme-pure" /></i>
                                                            </div>
                                                            <h3 className="tppricing-title mb-50">{item.title}</h3>
                                                        </div>
                                                        <div className="tppricing-content">
                                                            <div className="tppricing-feature mb-45">
                                                                <ul>
                                                                    {item.fetures?.map((fetue, index) => 
                                                                        <li key={index} className={fetue.cls}><i className="fa-light fa-check"></i>{fetue.feture}</li>                                                                 
                                                                    )} 
                                                                </ul>
                                                            </div>
                                                            <div className="tppricing-price mb-40">
                                                                <h4 className="tppricing-price-title">${item.price}</h4>
                                                                <span>{item.price_title}</span>
                                                            </div>
                                                            <div className="tppricing-btn-two">
                                                                <Link href="/contact" className="tp-btn-blue">Get Started</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                            )}  
                                        </div>
                                        <div className="tpprice-shape d-none d-lg-block">
                                            <div className="tpprice-shape-two">
                                                <Image src={triangle_icon} alt="theme-pure" />
                                            </div>
                                            <div className="tpprice-shape-three">
                                                <Image src={smill_icon} alt="theme-pure" />
                                            </div>
                                        </div>
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

export default PricingAreaHomeOne;