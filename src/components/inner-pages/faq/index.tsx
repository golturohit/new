import BreadcrumbSeven from "@/components/common/breadcrumb/breadcrumb-7";
import BrandHomeTwo from "@/components/homes/home-2/BrandHomeTwo";
import CtaAreaHomeTwo from "@/components/homes/home-2/CtaAreaHomeTwo";
import FaqAreaHomeTwo from "@/components/homes/home-2/FaqAreaHomeTwo";
import SocialAreaHomeTwo from "@/components/homes/home-2/SocialAreaHomeTwo";
import FooterTwo from "@/layout/footers/FooterTwo";
import HeaderSix from "@/layout/headers/HeaderSix";



const FAQ = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbSeven top_title="FAQ" title="FAQ" />
                <FaqAreaHomeTwo />
                <SocialAreaHomeTwo />
                <CtaAreaHomeTwo />
                <BrandHomeTwo />
            </main>
            <FooterTwo />
        </>
    );
};

export default FAQ;