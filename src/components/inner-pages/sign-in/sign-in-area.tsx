import Link from "next/link";
import Image from "next/image";

import footer_icon_1 from "@/assets/img/sign-in/sign-in-search.png";
import footer_icon_2 from "@/assets/img/sign-in/sign-in-location.png";
import footer_icon_3 from "@/assets/img/sign-in/sign-in-key.png";
import footer_icon_4 from "@/assets/img/sign-in/sign-in-track.png";

import signin_shape_1 from "@/assets/img/sign-in/shape/sign-in-shape-1.png";
import signin_shape_2 from "@/assets/img/sign-in/shape/sign-in-shape-2.png";
import signin_shape_3 from "@/assets/img/sign-in/shape/sign-in-shape-3.svg";

import footer_shape from "@/assets/img/sign-in/white-box-dots.png"; 
import SignInForm from "@/components/forms/sign-in-form";
import SingOutForm from "@/components/forms/sing-out-form";

const footer_content = {
    title: <>All the Features <br /> For 10 days, for FREE</>,
    sub_title: "No credit card needed. No strings attached 👍",
    featur_list: [
        {
            id: 1, 
            img: footer_icon_1,
            link: "/keyword-search",
            title: <>Keyword  <br /> Research</>,
        },
        {
            id: 2, 
            img: footer_icon_2,
            link: "/social-services",
            title: <>Link  <br />Building Services</>,
        },
        {
            id: 3, 
            img: footer_icon_3,
            link: "/media-markiting",
            title: <>Social  <br /> Media Marketing</>,
        },
        {
            id: 4, 
            img: footer_icon_4,
            link: "/seo-audit",
            title: <>SEO <br />Audit Services</>,
        },
    ]

}
const {title, sub_title, featur_list} = footer_content

const SignInArea = ({sing_out} : any ) => {
    return (
        <>
            <section className="signin-area fix">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="signin-wrap p-relative">
                                <div className="signin-content">
                                    <h4 className="signin-title">{title}</h4>
                                    <p>{sub_title}</p>
                                </div>
                                <div className="signin-list">\
                                    {featur_list.map((item, i) => 
                                        <div key={i} className="signin-item d-flex align-items-center mb-45">
                                            <div className="signin-item-icon">
                                                <Image src={item.img} alt="theme-pure" />
                                                <div className="signin-item-icon-shape">
                                                    <Image src={footer_shape} alt="theme-pure" />
                                                </div>
                                                <span></span>
                                            </div>
                                            <div className="signin-item-content ml-30">
                                                <h4 className="signin-item-title"> <Link href={item.link}>{item.title}</Link></h4>
                                            </div>
                                        </div> 
                                    )} 
                                </div>
                                <div className="signin-shape">
                                    <Image className="signin-shape-1" src={signin_shape_1} alt="theme-pure" />
                                    <Image className="signin-shape-2" src={signin_shape_2} alt="theme-pure" />
                                    <Image className="signin-shape-3" src={signin_shape_3} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        {sing_out ? <SingOutForm /> : 
                        
                        <SignInForm />
                        } 
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignInArea;