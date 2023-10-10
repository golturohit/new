"use client"
import React,{useState} from 'react';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

import portfolio_shape from "@/assets/img/shape/portfolio-shape-bg-4.png";
// tab 01 
import tab_1_img_1 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-1.jpg";
import tab_1_img_3 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-2.jpg";
import tab_1_img_2 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-3.jpg";
// tab 02 
import tab_2_img_1 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-4.jpg";
import tab_2_img_2 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-5.jpg";
import tab_2_img_3 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-6.jpg";
// tab 03 
import tab_3_img_1 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-7.jpg";
import tab_3_img_2 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-8.jpg";
import tab_3_img_3 from "@/assets/img/portfolio/portfolio-4/portfolio-bg-5.jpg";


// all categories 
const categories:string[] = ['All Work','Marketing','Web Design','Branding']
// portfolio data type 
type IPortfolio = {
	id: number;
	img: StaticImageData;
	sub_title: string;
	title: string;
	category: string;
}
// portfolio_data
const portfolio_items:IPortfolio[] = [
	{
		id: 1,
		img: tab_1_img_1,
		sub_title: "MARKETING",
		title: "Tips for the good UI design",
		category:'Marketing'
	},
	{
		id: 2,
		img: tab_1_img_2,
		sub_title: "MARKETING",
		title: "Online Media Management",
		category:'Marketing'
	},
	{
		id: 3,
		img: tab_1_img_3,
		sub_title: "MARKETING",
		title: "Tips for the good UI design",
		category:'Marketing'
	},
	// web design category
	{
		id: 4,
		img: tab_2_img_1,
		sub_title: "WEB DESIGN",
		title: "Tips for the good UI design",
		category:'Web Design'
	},
	{
		id: 5,
		img: tab_2_img_2,
		sub_title: "WEB DESIGN",
		title: "Online Media Management",
		category:'Web Design'
	},
	{
		id: 6,
		img: tab_2_img_3,
		sub_title: "WEB DESIGN",
		title: "Tips for the good UI design",
		category:'Web Design'
	},
	// branding category
	{
		id: 7,
		img: tab_3_img_1,
		sub_title: "BRANDING",
		title: "Tips for the good UI design",
		category:'Branding'
	},
	{
		id: 8,
		img: tab_3_img_2,
		sub_title: "BRANDING",
		title: "Online Media Management",
		category:'Branding'
	},
	{
		id: 9,
		img: tab_3_img_3,
		sub_title: "BRANDING",
		title: "Tips for the good UI design",
		category:'Branding'
	}
]

// slider setting
const setting = {
	fade: false,
	autoplay: false,
	slidesToShow: 2,
	arrows: false,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	],
}
const PortfolioAreaHomeFour = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [productItems,setProductItems] = useState<IPortfolio[]>([...portfolio_items.reverse()])
	const [active,setActive] = useState<string>('All Work')
	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	// handleCategory
	const handleCategory = (cate:string) => {
		setActive(cate)
		if(cate === 'All Work'){
			setProductItems([...portfolio_items.reverse()])
		}
		else {
			const filter_category = portfolio_items.filter(p => p.category.toLowerCase() === cate.toLowerCase());
			setProductItems(filter_category)
		}
	}

	return (
		<>
			<section className="portfolio-area portfolio-4-bg pb-140 mb-115 fix p-relative">
				<div className="portfolio-4-main-bg-shape">
					<Image src={portfolio_shape} alt="theme-pure" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="portfolio-4-wrapper">
								<div className="portfolio-4 mt-20">
									<div className="section-wrapper mb-20">
										<span>Our Case Studies</span>
										<h5 className="section-title-4 section-title-4-2">Creative <br /> Works we done</h5>
									</div>
								</div>
								<div className="portfolio-tab-4 mb-35">
									<div className="nav flex-column nav-pills me-3">
										{categories.map((tab_btn, i) =>
											<button key={i} onClick={() => handleCategory(tab_btn)}
												className={`nav-link ${active === tab_btn ? "active" : ""}`}>
													{tab_btn}
											</button>
										)}
									</div>
								</div>
								<div className="nav-tab-slider-4">
									<div className="tpnav-tab-4 p-relative">
										<button className="prv-testi-case prv-nav-tab" onClick={handlePrev}>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"
													viewBox="0 0 8 14">
													<path fillRule="evenodd"
														d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"
														fill="currentColor"></path>
												</svg>
											</span>
										</button>
										<button className="next-testi-case next-nav-tab" onClick={handleNext}>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"
													viewBox="0 0 8 14">
													<path fillRule="evenodd"
														d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
														fill="currentColor"></path>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div >
								<div>		
											<Slider {...setting} ref={sliderRef} className="protfolio-wrapper-4 portfolio-4-active">
												{productItems.map((p_item, index) =>
													<div key={index} className="portfolio-4-item-single">
														<div className="portfolio-4-item p-relative">
															<div className="portfolio-4-thumb">
																<Image src={p_item.img} alt="theme-pure" />
															</div>
															<div className="portfolio-4-content">
																<div className="portfolio-4-content-top">
																	<span>{p_item.sub_title}</span>
																	<h4 className="title">{p_item.title}</h4>
																</div>
																<div className="portfolio-4-content-bottom">
																	<Link href="/portfolio-details">
																		View Case Study <i className="fa-light fa-plus"></i>
																	</Link>
																</div>
															</div>
														</div>
													</div>
												)}
											</Slider>
								</div>
							</div>
						</div> 
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioAreaHomeFour;