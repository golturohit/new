import BreadcrumbSeven from "@/components/common/breadcrumb/breadcrumb-7";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import PortfolioArea from "./PortfolioArea";


const Portfolio = () => {
	return (
		<>
			<HeaderSix style={true} />
			<main>
				<BreadcrumbSeven top_title="Case Studies" title="Case Studies" />
				<PortfolioArea />
			</main>
			<FooterFive style={true} />
		</>
	);
};

export default Portfolio;