'use client'

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import blog_thumb_1 from "@/assets/img/blog/blog-grid-4.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-grid-7.jpg";
import blog_thumb_3 from "@/assets/img/blog/blog-grid-1.jpg";
import ClockBlogIcon from "@/svg/blogs_icon/ClockBlogIcon";
import UserIcon from "@/svg/inner-pages-icons/UserIcon";
import SlideNextIcon from "@/svg/blogs_icon/SlideNextIcon";
import SlidePrevIcon from "@/svg/blogs_icon/SlidePrevIcon";

const blog_article_data: {
	id: number;
	img: StaticImageData;
	catagory: string;
	title: string;
	time: string;
	post_writer: string;
}[] = [
	{
		id: 1,
		img: blog_thumb_1,
		catagory: "Technical SEO",
		title: "Success Story: Businessman in Harlem",
		time: "May 05, 2023",
		post_writer: "Hans Down",
	},
	{
		id: 2,
		img: blog_thumb_2,
		catagory: "Technical SEO",
		title: "Content Marketing Tools To try in 2023",
		time: "Oct 16,2023",
		post_writer: "Eleanor Fant",
	},
	{
		id: 3,
		img: blog_thumb_3,
		catagory: "Technical SEO",
		title: "Content Marketing Tools To try in 2023",
		time: "Marc 16, 2023",
		post_writer: "Jim Séchen",
	},
	{
		id: 1,
		img: blog_thumb_1,
		catagory: "Technical SEO",
		title: "Success Story: Businessman in Harlem",
		time: "May 05, 2023",
		post_writer: "Hans Down",
	},
	{
		id: 2,
		img: blog_thumb_2,
		catagory: "Technical SEO",
		title: "Content Marketing Tools To try in 2023",
		time: "Oct 16,2023",
		post_writer: "Eleanor Fant",
	},
	{
		id: 3,
		img: blog_thumb_3,
		catagory: "Technical SEO",
		title: "Content Marketing Tools To try in 2023",
		time: "Marc 16, 2023",
		post_writer: "Jim Séchen",
	},
]


const setting = {
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
	},
	// Navigation arrows
	navigation: {
		nextEl: ".articale-button-next",
		prevEl: ".articale-button-prev",
	},
	breakpoints: {
		'1200': {
			slidesPerView: 3,
		},
		'992': {
			slidesPerView: 3,
		},
		'768': {
			slidesPerView: 2,
		},
		'576': {
			slidesPerView: 2,
		},
		'0': {
			slidesPerView: 1,
		},
	},
}

const BlogDetailsArticleArea = () => {
	return (
		<>
			<section className="articale-area footer-5 pt-80 pb-70">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<h4 className="articale-title mb-35">Similar Articles</h4>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="articale-arrow d-flex align-items-center justify-content-md-end mb-35">
								<div className="articale-button-next" style={{cursor: "pointer"}}>
									<span>
										<SlideNextIcon />
									</span>
								</div>
								<div className="articale-button-prev" style={{cursor: "pointer"}}>
									<span>
										<SlidePrevIcon />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Swiper
								{...setting}
								loop={true}
								modules={[Navigation]}
								className="swiper-container articale-active">
								{blog_article_data.map((item, i) =>
									<SwiperSlide key={i} className="swiper-slide">
										<div className="tpblog-item-2 mb-30">
											<div className="tpblog-thumb-2">
												<Link href="/blog-details"><Image src={item.img} alt="theme-pure" /></Link>
											</div>
											<div className="tpblog-wrap">
												<div className="tpblog-content-2">
													<span><Link href="/blog-details">{item.catagory}</Link></span>
													<h4 className="tpblog-title-2"><Link href="/blog-details">{item.title}</Link></h4>
												</div>
												<div className="tpblog-meta-2">
													<span>
														<i>
															 <ClockBlogIcon />
														</i>
														{item.time}
													</span>
													<span>
														<a href="#">
															<i>
																 <UserIcon />
															</i>
															{item.post_writer}
														</a>
													</span>
												</div>
											</div>
										</div>
									</SwiperSlide>

								)}

							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetailsArticleArea;