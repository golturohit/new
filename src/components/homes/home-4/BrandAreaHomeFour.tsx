"use client"
import Image from "next/image";
import Slider from "react-slick";
import Wavify from 'react-wavify';
// brands images
import brand_log_1 from "@/assets/img/brand/logo-3-1.png";
import brand_log_2 from "@/assets/img/brand/logo-3-2.png";
import brand_log_3 from "@/assets/img/brand/logo-3-3.png";
import brand_log_4 from "@/assets/img/brand/logo-3-4.png";
import brand_log_5 from "@/assets/img/brand/logo-3-5.png";

const brands_images = [brand_log_1, brand_log_2, brand_log_3, brand_log_4, brand_log_5, brand_log_1]

const setting = {
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
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

const BrandAreaHomeFour = () => {

	return (
		<>
			<section className="brand-area brand-bg-3 mb-120 p-relative">
				<div className="brand-bg-4">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="brand-wrapper text-center">
									<h5 className="title">As Featured On:</h5>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<Slider {...setting} className="tpbrand tpbrand-active-4 mb-170">
									{brands_images.map((item, i) =>
										<div key={i} className="tpbrand-item-4 mb-35">
											<Image src={item} alt="theme-pure" />
										</div>
									)}
								</Slider>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- wave-animation --> */}
				<div className="wave-bg">
					<Wavify fill='rgba(255, 255, 255, 1)'
						paused={false}
						className="wave wave-1"
						options={{
							height: 150,
							bones: 7,
							amplitude: 70,
							speed: 0.21
						}}
					/>
					<Wavify fill='#F7EFFD'
						paused={false}
						className="wave"
						options={{
							height: 150,
							bones: 8,
							amplitude: 45,
							speed: 0.24
						}}
					/>

				</div>
				{/* <!-- wave-animation-end --> */}
			</section>
		</>
	);
};

export default BrandAreaHomeFour;