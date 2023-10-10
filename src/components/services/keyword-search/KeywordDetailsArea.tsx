import Image from "next/image";
import banner_img from "@/assets/img/services/services-details-1.jpg";


type keyword_details_content_type = {
	sub_title: string;
	title: JSX.Element;
	title_2: JSX.Element;
	description: JSX.Element;
	title_3: string;
	feature_list: JSX.Element[];
}

const keyword_details_content: keyword_details_content_type = {
	sub_title: "Keyword Research",
	title: <>Search volume and <br /> keyword suggestions</>,
	title_2: <>The Big Oxmox advised her not to do so, because there were thousands of bad
		Commas, wild Question marks and devious seminole.</>,
	description: <>Even the all-powerful Pointing has no control about the blind texts it is an
		almost unorthographic life One day however a small line of blind text by the name
		of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
		advised her not to do so, because there were thousands of bad Commas, wild
		Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She
		packed her seven versalia, put her initial into the belt and made herself on the
		way. </>,
	title_3: "Why is keyword research so important",
	feature_list: [
		<>creating an SEO friendly website architecture (search/hierarchy of categories, search filters)</>,
		<>deciding on how much inventory should you have in stock (trending product searches)</>,
		<>content ideas (adding new content themes, solving your audience's biggest pain points)</>,
		<>creating and improving your PPC campaigns</>,
		<>… and much more!</>
	]

}
const { sub_title, title, title_2, description, title_3, feature_list } = keyword_details_content

const KeywordDetailsArea = () => {
	return (
		<>
			<section className="services-details-area services-details mb-90">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="services-details">
								<div className="services-details-section ml-95">
									<span>{sub_title}</span>
									<h4 className="services-details-title">{title}</h4>
								</div>
								<div className="services-details-thumb mb-50">
									<Image src={banner_img} alt="theme-pure" />
								</div>
								<div className="services-details-wrap">
									<div className="row">
										<div className="col-lg-10 offset-lg-1">
											<div className="services-details-content">
												<div className="services-details-content-box">
													<span>{title_2}</span>
													<p>{description}</p>
												</div>
												<div className="services-details-list">
													<span>{title_3}</span>
													<ul className="services-details-list-item">
														{feature_list.map((item, i) =>
															<li key={i}>{item}</li>
														)}
													</ul>
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

export default KeywordDetailsArea;