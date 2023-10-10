
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

import shape_1 from "@/assets/img/banner/hero-bg-4.png";
import shape_2 from "@/assets/img/shape/banner-4-shape-1.png";
import shape_3 from "@/assets/img/shape/banner-4-shape-2.png";
import shape_4 from "@/assets/img/shape/banner-shape-4-1.png";
import shape_5 from "@/assets/img/shape/banner-shape-4-2.png";
import shape_6 from "@/assets/img/shape/banner-shape-4-3.png";
import shape_7 from "@/assets/img/shape/banner-shape-4-4.png";
import shape_8 from "@/assets/img/shape/banner-shape-4-5.png";

const shapes_data = [
	{ id: 1, img: shape_1, cls: "one" },
	{ id: 2, img: shape_2, cls: "two" },
	{ id: 3, img: shape_3, cls: "three" },
	{ id: 4, img: shape_4, cls: "six" },
	{ id: 5, img: shape_5, cls: "seven" },
	{ id: 6, img: shape_6, cls: "eight" },
	{ id: 7, img: shape_7, cls: "nine" },
	{ id: 8, img: shape_8, cls: "ten" },
]

type hero_content_type = {
	title: React.JSX.Element;
	questions: string;
	phone: string;
}

const hero_content: hero_content_type = {
	title: <>All in one SEO for your business to give real impact <br /> consultancy and analysis.!</>,
	questions: "Got Questions?",
	phone: "+800 2563 123",
}
const {title, questions, phone} = hero_content

const HeroBannerHomefour = () => {

	return (
		<>
			<div className="banner-area banner-4-spaces pt-150 pb-195">
				<div className="container custom-container">
					<div className="row">
						<div className="col-xxl-7 col-xl-10 col-lg-7">
							<div className="banner-4">
								<div className="banner-4-content">
									<h4 className="banner-4-title cd-headline clip is-full-width">
										SEO marketing <br />
										<span className="cd-words-wrapper">
											<TypeAnimation
												sequence={[
													'agency',
													1000,
													'analysis',
													1000,
													'value',
													1000,
												]}
												wrapper="b"
												speed={5}
												style={{ display: 'inline-block' }}
												repeat={Infinity}
											/>
										</span>
										in UK
									</h4>
									<p>{title}</p>
									<div className="banner-4-btn mb-30">
										<Link href="/contact" className="blue-btn">Get Started Now</Link>
									</div>
									<div className="contact-4 d-flex align-items-center">
										<div className="contact-4-icon">
											<i>
												<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M24.964 20.596C24.964 21.028 24.868 21.472 24.664 21.904C24.46 22.336 24.196 22.744 23.848 23.128C23.26 23.776 22.612 24.244 21.88 24.544C21.16 24.844 20.38 25 19.54 25C18.316 25 17.008 24.712 15.628 24.124C14.248 23.536 12.868 22.744 11.5 21.748C10.12 20.74 8.812 19.624 7.564 18.388C6.328 17.14 5.212 15.832 4.216 14.464C3.232 13.096 2.44 11.728 1.864 10.372C1.288 9.004 1 7.696 1 6.448C1 5.632 1.144 4.852 1.432 4.132C1.72 3.4 2.176 2.728 2.812 2.128C3.58 1.372 4.42 1 5.308 1C5.644 1 5.98 1.072 6.28 1.216C6.592 1.36 6.868 1.576 7.084 1.888L9.868 5.812C10.084 6.112 10.24 6.388 10.348 6.652C10.456 6.904 10.516 7.156 10.516 7.384C10.516 7.672 10.432 7.96 10.264 8.236C10.108 8.512 9.88 8.8 9.592 9.088L8.68 10.036C8.548 10.168 8.488 10.324 8.488 10.516C8.488 10.612 8.5 10.696 8.524 10.792C8.56 10.888 8.596 10.96 8.62 11.032C8.836 11.428 9.208 11.944 9.736 12.568C10.276 13.192 10.852 13.828 11.476 14.464C12.124 15.1 12.748 15.688 13.384 16.228C14.008 16.756 14.524 17.116 14.932 17.332C14.992 17.356 15.064 17.392 15.148 17.428C15.244 17.464 15.34 17.476 15.448 17.476C15.652 17.476 15.808 17.404 15.94 17.272L16.852 16.372C17.152 16.072 17.44 15.844 17.716 15.7C17.992 15.532 18.268 15.448 18.568 15.448C18.796 15.448 19.036 15.496 19.3 15.604C19.564 15.712 19.84 15.868 20.14 16.072L24.112 18.892C24.424 19.108 24.64 19.36 24.772 19.66C24.892 19.96 24.964 20.26 24.964 20.596Z" stroke="#775AFC" strokeWidth="1.5" strokeMiterlimit="10" />
													<path opacity="0.4" d="M20.7996 9.40038C20.7996 8.68038 20.2356 7.57638 19.3956 6.67638C18.6276 5.84838 17.6076 5.20038 16.5996 5.20038" stroke="#775AFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path opacity="0.4" d="M24.9996 9.4C24.9996 4.756 21.2436 1 16.5996 1" stroke="#775AFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</i>
										</div>
										<div className="contact-4-text">
											<span>{questions}</span>
											<a href={`tel:${phone}`}>{phone}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="banner-4-shape d-none d-lg-block">
						{shapes_data.map((item, i) =>
							<div key={i} className={`banner-4-shape-${item.cls}`}>
								<Image src={item.img} alt="theme-pure" />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBannerHomefour;