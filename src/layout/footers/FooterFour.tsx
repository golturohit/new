import Link from "next/link";
import FooterLogoHomeFour from "@/svg/logo/footer_logo_home_4";
import FooterCommonLinkItem from "./FooterCommonLinkItem";
import { SocialLinksTwo } from "@/components/common/social-links";
import SubcribeHomeFour from "@/components/forms/SubcribeHomeFour";

 const footer_content = {
    footer_info: <>This SEO is most reputed firm <br /> which provides various online <br /> marketing</>,
    subcribe: "Subcribe.",
    title: "Only valuable resource no bullshit",

 }
 const {footer_info, subcribe, title}  = footer_content

const FooterFour = () => {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg-4 pt-100">
                    <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget footer-4-col-1 mb-30">
                                <div className="footer-widget-logo mb-20">
                                    <Link href="/">
                                        <span> <FooterLogoHomeFour /> </span>
                                    </Link>
                                </div>
                                <div className="footer-widget-content">
                                    <p className="footer-widget-text mb-20">{footer_info} </p>
                                    <div className="fooer-btn-4">
                                        <Link className="blue-btn" href="/keyword-search">Grow Traffic</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <FooterCommonLinkItem /> 

                            <div className="col-lg-3 col-md-6 col-sm-8">
                                <div className="footer-widget  footer-4-col-4 mb-40">
                                    <h4 className="footer-widget-title mb-20">{subcribe}</h4>
                                    <div className="footer-widget-content mb-40">
                                        <p className="footer-widget-text mb-20">{title}</p>
                                            <SubcribeHomeFour />
                                    </div>
                                    <div className="footer-widget-social">
                                        <SocialLinksTwo /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-widget-copyright footer-widget-copyright-4 text-center">
                                    <span>© {new Date().getFullYear()} <Link target="_blank" href="https://themeforest.net/user/theme_pure/portfolio">Theme_Pure.</Link> All Rights Reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterFour;