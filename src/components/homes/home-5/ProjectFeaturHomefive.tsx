import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import project_shape from "@/assets/img/bg/seo-5-bg-1.png";

import shape_1 from "@/assets/img/shape/seo-5-shape-1.png";
import shape_2 from "@/assets/img/shape/seo-5-shape-2.png";
import shape_3 from "@/assets/img/shape/seo-5-shape-3.png";
import shape_4 from "@/assets/img/shape/seo-5-shape-4.png";
// project data type
interface project_feature_content_type {
	shapes_data: {
		id: number;
		img: StaticImageData;
		cls: string;
		parallax: string;
	}[];
	sub_title: string;
	title: string;
	feature_lists: {
		id: number;
		title: string;
		sm_info: string;
	}[];
}
// project data 
const project_feature_content: project_feature_content_type = {
	shapes_data: [
		{ id: 1, img: shape_1, cls: "one", parallax: "100" },
		{ id: 2, img: shape_2, cls: "two", parallax: "80" },
		{ id: 3, img: shape_3, cls: "three", parallax: "" },
		{ id: 4, img: shape_4, cls: "four", parallax: "50" },
	],
	sub_title: "Best SEO results?",
	title: "Optimize your website easier",
	feature_lists: [
		{ id: 1, title: "Performance", sm_info: "Slow pages,too-large CSS or HTML" },
		{ id: 2, title: "Localization", sm_info: "All issues with hrefiang,language" },
		{ id: 3, title: "Content quality", sm_info: "Unconsolidated duplicate page" },
	]
}
const { shapes_data, sub_title, title, feature_lists } = project_feature_content

type style_type = {
	style?: any
}

const ProjectFeaturHomefive = ({ style }: style_type) => {
	return (
		<>
			<div className={`${style ? "project-area project-inner-height pb-120 pt-140" : "feature-5 pb-100"}`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="seo-5-thumb p-relative mb-40">
								<div className="seo-5-main-bg">
									<Image src={project_shape} alt="theme-pure" />
								</div>
								<div className="seo-5-shape d-none d-md-block">
									{shapes_data.map((item, i) =>
										<div key={i} className={`seo-5-shape-${item.cls}`} data-parallax={`{"x": -${item.parallax}, "smoothness": 20}`}>
											<Image src={item.img} alt="theme-pure" />
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="seo-5 mb-40">
								<div className="section-3 mb-40">
									<span className="section-3-sub-title">{sub_title}</span>
									<div className="section-3-title">{title}</div>
								</div>
								<ul className="seo-5-list mb-50">
									{feature_lists.map((list, index) =>
										<li key={index}>
											<div className="seo-5-list-item d-flex">
												<div className="seo-5-list-icon">
													<i className="fa-sharp fa-solid fa-circle-check"></i>
												</div>
												<div className="seo-5-list-text">
													<h4 className="title">{list.title}</h4>
													<p>{list.sm_info}</p>
												</div>
											</div>
										</li>
									)}

								</ul>
								<div className="seo-5-btn light-blue-border">
									<Link href="/about" className="light-blue-btn">Learn More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectFeaturHomefive;