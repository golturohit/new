import BreadcrumbEight from "@/components/common/breadcrumb/breadcrumb-8";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import PortfolioDetailsArea from "./PortfolioDetailsArea";



const PortfolioDetails = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <BreadcrumbEight />
                <PortfolioDetailsArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default PortfolioDetails;