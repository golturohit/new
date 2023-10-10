import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import FooterLogo from "@/svg/footer_logo";
import { CopyRight, SocialLinksTwo } from "@/components/common/social-links";
import SubscriberFormHomeTwo from "@/components/forms/SubscriberFormHomeTwo";
import footer_banner from "@/assets/img/banner/footer-2-bg-2.png";

// left side shape images
import left_shape_1 from "@/assets/img/shape/footer-dew-shape.png";
import left_shape_2 from "@/assets/img/shape/footer-dot-1.png";
import left_shape_3 from "@/assets/img/shape/footer-leaf-shape.png";
import left_shape_4 from "@/assets/img/shape/footer-man-shape.png";
// right side shape images
import right_shape_1 from "@/assets/img/shape/footer-man-shape-2.png";
import right_shape_2 from "@/assets/img/shape/footer-dot-1.png";
import right_shape_3 from "@/assets/img/shape/footer-plant.png";
import right_shape_4 from "@/assets/img/shape/footer-rocket.png";
// contact icon
import icon_1 from "@/assets/img/icon/phone-icon.png";
import icon_2 from "@/assets/img/icon/massage-icon.png";
import icon_3 from "@/assets/img/icon/location-icon.png";

interface footer_content_type {
   footer_left_shape: {
       img: StaticImageData;
       cls: string;
   }[];
   footer_right_shape: {
       img: StaticImageData;
       cls: string;
   }[];
   footer_links: {
       id: number;
       title: string;
       links: {
         title: string,
         link: string,
           
       }[];
   }[];
   contact_info: {
       id: number,
       img: StaticImageData,
       text?: JSX.Element,
       target_text: string,
   }[];
}
const footer_content: footer_content_type ={

   footer_left_shape: [
      {img: left_shape_1, cls: "left-one"},
      {img: left_shape_2, cls: "left-two"},
      {img: left_shape_3, cls: "left-three"},
      {img: left_shape_4, cls: "left-four"},
   ],
   footer_right_shape: [
      {img: right_shape_1, cls: "one"},
      {img: right_shape_2, cls: "two"},
      {img: right_shape_3, cls: "three"},
      {img: right_shape_4, cls: "four"},
   ],
   footer_links: [
      {
         id: 2,
         title: "Information",
         links: [
           {title: "Home", link: "/"},
           {title: "About Us", link: "/about"},
           {title: "Project", link: "/portfolio"},
           {title: "Plan & Pricing", link: "/pricing"},
           {title: "Blog", link: "/blog-grid"},
           {title: "Contact Us", link: "/contact"},
         ]
      },
      {
         id: 3,
         title: "Services",
         links: [
            {title: "SEO Audit", link: "/seo-audit"},
            {title: "SEO Services", link: "/social-services"},
            {title: "SEO Marketing", link: "/media-markiting"},
            {title: "SEO Analysis", link: "/marketing-analysis"},
            {title: "SEO Optimization", link: "/keyword-search"},
            {title: "Social Media", link: "/media-markiting"},
         ]
      }
   ],
   contact_info: [
      {id: 1, img: icon_1, text: <>+16221233000</>, target_text: "tel:+16221233000"},
      {id: 2, img: icon_2, text: <>information@gmail.com</>, target_text: "mailto:information@gmail.com"},
      {id: 3, img: icon_3, text: <>785 6h Street, Office 400 <br /> Berlin, De 81566</>, target_text: ""},
   ]

}
const {
   footer_left_shape,
   footer_right_shape,
   footer_links,
   contact_info,
} = footer_content


const FooterTwo = () => {
    return (
        <>
             <footer>
               <div className="footer-area pt-100 footer-bg2 p-relative">
                  <div className="footer-main-shape">
                     <Image src={footer_banner} alt="theme=pure" />
                  </div>
                  <div className="footer-shape-left d-none d-xl-block">
                     {footer_left_shape.map((shape_left, l_index) => 
                        <div key={l_index} className={`footer-shape-${shape_left.cls}`}>
                           <Image src={shape_left.img} alt="footer-shape" />
                        </div>
                     )}
                     
                  </div>
                  <div className="footer-shape-right d-none d-xl-block">
                     {footer_right_shape.map((shape_right, r_index) =>
                        <div key={r_index} className={`footer-shape-right-${shape_right.cls}`}>
                           <Image src={shape_right.img} alt="footer-shape" />
                        </div>
                     )}
                  </div>
                  <div className="container">
                     <div className="footer-top">
                        <div className="row">
                           <div className="col-lg-3 col-md-6 col-sm-12">
                              <div className="footer-widget footer-2-col-1 mb-30">
                                 <div className="footer-widget-logo mb-20">
                                    <Link href="/">
                                       <span>
                                          <FooterLogo />
                                       </span>
                                    </Link>
                                 </div>
                                 <div className="footer-widget-newsletter2 mb-40">
                                    <h4 className="title">Subscribe our Newsletter!</h4>
                                    <SubscriberFormHomeTwo />
                                 </div>
                                 <div className="footer-widget-content">
                                    <div className="footer-widget-social2">
                                       <SocialLinksTwo />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {footer_links.map((item, i)  => 
                              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                 <div className={`footer-widget footer-widget-2 footer-2-col-${item.id} mb-40`}>
                                    <h4 className="footer-widget-title mb-15">{item.title}</h4>
                                    <div className="footer-widget-link">
                                       <ul>
                                          {item?.links.map((link, l_index)  =>  
                                          <li key={l_index}><Link href={link.link}>{link.title}</Link></li> 
                                          )}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}

                           <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="footer-widget footer-widget-2 footer-2-col-4 mb-40">
                                 <h4 className="footer-widget-title mb-20">Contact Us</h4>
                                 <div className="tpcontact-info-links">
                                    {contact_info.map((contact_item, c_index) => 
                                       <Link key={c_index} href={contact_item.target_text}>
                                          <i>
                                             <Image src={contact_item.img} alt="theme=pure" />
                                          </i> {contact_item.text}
                                       </Link>
                                    )} 
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
                                    <CopyRight />  
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

export default FooterTwo;