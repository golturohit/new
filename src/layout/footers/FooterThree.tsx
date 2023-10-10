import Link from "next/link";
import Image from "next/image";
import FooterCommonLinkItem from "./FooterCommonLinkItem";
import FooterLogoHomeThree from "@/svg/logo/footer_logo_home_3";
import { SocialLinksTwo, CopyRight } from "@/components/common/social-links";
 // footer shape
import footer_shape_1 from "@/assets/img/shape/footer-3-1.png";
import footer_shape_2 from "@/assets/img/shape/footer-3-2.png";
import footer_shape_3 from "@/assets/img/shape/footer-3-3.png";
import footer_shape_4 from "@/assets/img/shape/footer-3-4.png";
import footer_shape_5 from "@/assets/img/shape/footer-3-5.png";
import footer_shape_6 from "@/assets/img/shape/footer-3-6.png";
import footer_shape_7 from "@/assets/img/shape/footer-3-7.png";
import footer_shape_8 from "@/assets/img/shape/footer-3-8.png";
import footer_shape_9 from "@/assets/img/shape/footer-rocket.png";
import SubscriberFormHomeThree from "@/components/forms/SubscriberFormHomeThree";

 const shape_data = [
    {id: 1, img: footer_shape_1, cls: "one"},
    {id: 2, img: footer_shape_2, cls: "two"},
    {id: 3, img: footer_shape_3, cls: "three"},
    {id: 4, img: footer_shape_4, cls: "four"},
    {id: 5, img: footer_shape_5, cls: "five d-none d-xl-block"},
    {id: 6, img: footer_shape_6, cls: "six"},
    {id: 7, img: footer_shape_7, cls: "seven"},
    {id: 8, img: footer_shape_8, cls: "eight d-none d-xl-block"},
    {id: 9, img: footer_shape_9, cls: "nine"},
 ]


 const footer_content = {
    sm_des: <>This SEO is most reputed firm <br /> which provides various online <br /> marketing</>,
    sub_title: "Subcribe.",
    title: 'Only valuable resource no bullshit'

 }
 const {sm_des, sub_title, title}  = footer_content

const FooterThree = () => {
    return (
      <>
        <footer>
          <div className="footer-area pt-100 theme-bg-4 footer-bg3 p-relative">
            <div className="fw-left-shape-3 d-none d-lg-block">
              {shape_data.map((item, i) => (
                <div key={i} className={`fw-shape-${item.cls}`}>
                  <Image src={item.img} alt="theme-pure" />
                </div>
              ))}
            </div>
            <div className="container">
              <div className="footer-top">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget footer-3-col-1 mb-40">
                      <div className="footer-widget-logo mb-20">
                        <Link href="/">
                          <span>
                            {" "}
                            <FooterLogoHomeThree />{" "}
                          </span>
                        </Link>
                      </div>
                      <div className="footer-widget-content">
                        <p className="footer-widget-text mb-20">{sm_des}</p>
                      </div>
                    </div>
                  </div>
                  <FooterCommonLinkItem />
                  <div className="col-lg-3 col-md-6 col-sm-8">
                    <div className="footer-widget  footer-3-col-4 mb-40">
                      <h4 className="footer-widget-title mb-20">{sub_title}</h4>
                      <div className="footer-widget-content mb-40">
                        <p className="footer-widget-text mb-20">{title}</p>
                        <SubscriberFormHomeThree />
                      </div>
                      <div className="footer-widget-social-4">
                        <SocialLinksTwo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-widget-copyright footer-widget-copyright2 text-center">
                      <span>
                        <CopyRight />{" "}
                      </span>
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

export default FooterThree;