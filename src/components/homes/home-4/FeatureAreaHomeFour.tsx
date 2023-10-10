import Image from "next/image";
import BgColorIcon from "@/svg/bg_color_shape/bg_color_icon";
import BgColorIconTwo from "@/svg/bg_color_shape/bg_color_icon_2";
import BgColorIconThree from "@/svg/bg_color_shape/bg_color_icon_3";

import shape_1 from "@/assets/img/shape/choose-shape-1.png";
import shape_2 from "@/assets/img/shape/choose-shape-2.png";
import shape_3 from "@/assets/img/shape/choose-shape-3.png";
import banner_img from "@/assets/img/banner/choose-2.png";
import RoundShape from "@/svg/bg_color_shape/round_shape_1";
import RoundShapeTwo from "@/svg/bg_color_shape/round_shape_2";

const feature_content = {
	sub_title: "Let us do the work",
	title: "How we do It",
	feature_data: [
		{
			id: 1,
			cls: "p-relative d-flex",
			icon: <BgColorIcon />,
			sirial_no: "01",
			title: "Creative Ideas",
			sm_des: <>Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
			shape: <RoundShape />,
			shape_cls: "1 d-none d-md-block"
		},
		{
			id: 2,
			cls: "p-relative pl-100 d-flex",
			icon: <BgColorIconTwo />,
			sirial_no: "02",
			title: "Data Collection",
			sm_des: <>Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
			shape: <RoundShapeTwo />,
			shape_cls: "2 d-none d-md-block"
		},
		{
			id: 3,
			cls: "pl-30 d-flex",
			icon: <BgColorIconThree />,
			sirial_no: "03",
			title: "Targeting",
			sm_des: <>Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
			// shape: ,
			// shape_cls: ""
		},
	]
}
const { sub_title, title, feature_data } = feature_content

const FeatureAreaHomeFour = () => {
	return (
		<>
			<section className="feature-area pt-40 pb-80">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="tpchoose-thumb p-relative mb-50">
								<Image
									className="tpchoose-border-anim"
									src={banner_img}
									alt="theme-pure"
								/>
								<div className="tpchoose-shape d-none d-lg-block">
									<div className="tpchoose-shape-one d-none d-md-block">
										<Image src={shape_1} alt="theme-pure" />
									</div>
									<div className="tpchoose-shape-two">
										<Image src={shape_2} alt="theme-pure" />
									</div>
									<div className="tpchoose-shape-three">
										<Image src={shape_3} alt="theme-pure" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="feature-content-4 pl-70">
								<div className="section-wrapper mb-40">
									<span>{sub_title}</span>
									<h5 className="section-title-4 section-title-4-2">{title}</h5>
								</div>
								<ul className="feature-list-4">
									{feature_data.map((item, i) => (
										<li key={i}>
											<div className={`feature-list-4-item ${item.cls}`}>
												<div className="feature-list-4-icon ">
													<div className="feature-list-bg p-relative">
														<i> {item.icon} </i>
														<b>{item.sirial_no}</b>
														<span className="feature-bg-border-1"></span>
														<span className="feature-bg-border-2"></span>
														<span className="feature-bg-border-3"></span>
														<span className="feature-bg-border-4"></span>
													</div>
												</div>
												<div className="feature-list-4-content">
													<h4 className="title">{item.title}</h4>
													<p>{item.sm_des}</p>
												</div>
												{item.shape ? (
													<div className={`feature-4-shape-${item.shape_cls}`}>
														{item.shape}
													</div>
												) : (
													""
												)}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureAreaHomeFour;