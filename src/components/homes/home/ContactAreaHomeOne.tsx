'use client'
import SocialLinks from "@/components/common/social-links";
import ContactFormHomeOne from "@/components/forms/ContactFormHomeOne";
import Email from "@/svg/email";
import Location from "@/svg/location";
import Phone from "@/svg/phone";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


import shape_1 from "@/assets/img/shape/form-shape-1.png";
import shape_2 from "@/assets/img/shape/form-shape-2.png";
import Image from "next/image";

const contact_content = {
  sub_title: "Contact Us",
  title: (
    <>
      Ready to get started? <br /> Let's chat.
    </>
  ),
  contact_id: [
    {
      id: 1,
      icon: <Email />,
      target: "mailto:info@gmail.com",
      text: "info@gmail.com",
    },
    {
      id: 2,
      icon: <Location />,
      target: "3rd Street, London, UK",
      text: "3rd Street, London, UK",
    },
    {
      id: 3,
      icon: <Phone />,
      target: "tell:0123456789",
      text: "+44 123 654 7890",
    },
  ],
  contact_title: "Send a message",
};
const { sub_title, title, contact_id, contact_title } = contact_content;

const ContactAreaHomeOne = () => {
  return (
    <>
      <MouseParallaxContainer>
        <section className="contact-area theme-bg-3 pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="tpcontact-box pr-70 mb-30">
                  <div className="tpsection__content">
                    <div className="tpsection-sub-title tpsection-sub-title-white mb-30">
                      <span>{sub_title}</span>
                    </div>
                    <h2 className="tpsection-title tpsection-title-white mb-50">
                      {title}
                    </h2>
                  </div>
                  <div className="tpcontact-info">
                    <div className="tpcontact-info-links">
                      {contact_id.map((item, i) => (
                        <a href={item.target} key={i}>
                          <i>{item.icon}</i>
                          {item.text}
                        </a>
                      ))}
                    </div>
                    <div className="tpcontact-info-social">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-relative">
                  <div className="tpcontact-form p-relative ml-30">
                    <h4 className="tpcontact-form-title mb-35">
                      {contact_title}
                    </h4>
                    <ContactFormHomeOne />
                  </div>
                  <div className="tpcontact-shape d-none d-md-block">
                    <MouseParallaxChild factorX={0} factorY={0.07}
                      className="tpcontact-shape-one"
                      data-parallax='{"y": -100, "smoothness": 20}'
                    >
                      <Image src={shape_1} alt="theme-pure" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0} factorY={0.07} 
                      className="tpcontact-shape-two"
                      data-parallax='{"y": -100, "smoothness": 20}'
                    >
                      <Image src={shape_2} alt="theme-pure" />
                    </MouseParallaxChild>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MouseParallaxContainer>
    </>
  );
};

export default ContactAreaHomeOne;
