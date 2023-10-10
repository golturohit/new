import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ContactFormHomeFour from "@/components/forms/ContactFormHomeFour";
import contact_bg_shape from "@/assets/img/bg/contact-4-bg.jpg";

// contact shape 
import contact_shape_1 from "@/assets/img/shape/contact-4-shape-1.png";
import contact_shape_2 from "@/assets/img/shape/contact-4-shape-2.png";
import contact_shape_3 from "@/assets/img/shape/contact-4-shape-3.png";
import contact_shape_4 from "@/assets/img/shape/contact-4-shape-4.png";
import contact_shape_5 from "@/assets/img/shape/contact-4-shape-5.png";
import contact_shape_6 from "@/assets/img/shape/contact-4-shape-6.png";

// contact content data type
interface contact_content_type {
    sub_title: string;
    title: JSX.Element;
    sm_des: string;
    phone: string;
    email: string;
    cotact_shape: {
        id: number;
        img: StaticImageData;
        cls: string;
    }[];
}

// contact content 
const contact_content: contact_content_type ={
    sub_title: "Get in touch",
    title: <>Lets work <br />Together</>,
    sm_des: "Just tell us your requirements and we will help you!",
    phone: "+(800) 2563 123",
    email: "info@company.com",
    cotact_shape: [
        {id: 1, img: contact_shape_1, cls: ""},
        {id: 2, img: contact_shape_2, cls: ""},
        {id: 3, img: contact_shape_3, cls: ""},
        {id: 4, img: contact_shape_4, cls: ""},
        {id: 5, img: contact_shape_5, cls: "d-none d-xxl-block"},
        {id: 6, img: contact_shape_6, cls: "d-none d-xxl-block"},
    ],
}
const  {sub_title, title, sm_des, phone, email, cotact_shape}  = contact_content


const ContactAreaHomeFour = () => {
    return (
        <>
            <section className="contact-area p-relative contact-bg-4 pb-65 mb-60">
                <div className="contact-main-shape-bg d-none d-md-block">
                    <Image src={contact_bg_shape} alt="theme-pure" />
                </div>
                <div className="contact-shape d-none d-lg-block">
                    {cotact_shape.map((item, i) => 
                        <Image key={i} src={item.img} alt="theme-pure" className={`contact-shape-${item.id} ${item.cls}`} />                    
                    )} 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tpcontact-4 mt-30 mb-50">
                                <div className="section-wrapper mb-20">
                                    <span>{sub_title}</span>
                                    <h5 className="section-title-4 section-title-4-2">{title}</h5>
                                </div>
                                <div className="tpcontact-4-content">
                                    <p>{sm_des}</p>
                                    <a className="phone mb-5" href={`tel:${phone}`}>{phone}</a>
                                    <a className="mail mb-35" href={`mailto:${email}`}>{email}</a>
                                    <div className="tpcontact-4-content-btn">
                                    <Link href="/contact">Call us Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tpcontact-4-box mb-60">
                                <div className="tpcontact-4-box-wrapper">
                                    <ContactFormHomeFour />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactAreaHomeFour;