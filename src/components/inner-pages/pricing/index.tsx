import BreadcrumbSix from "@/components/common/breadcrumb/breadcrumb-6";
import FaqAreaHomeTwo from "@/components/homes/home-2/FaqAreaHomeTwo";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import BrandArea from "./BrandArea";
import ComparisonArea from "./ComparisonArea";
import PricingArea from "./PricingArea";

const Pricing = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <BreadcrumbSix />
                <PricingArea />
                <ComparisonArea />
                <BrandArea />
                <FaqAreaHomeTwo style={true} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Pricing;