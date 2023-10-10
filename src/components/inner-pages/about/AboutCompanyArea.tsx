import Image  from 'next/image';

 import company_img_1 from "@/assets/img/banner/company-1.jpg";
 import company_img_2 from "@/assets/img/banner/company-2.jpg";
 import company_img_3 from "@/assets/img/banner/company-3.jpg";
 import company_img_4 from "@/assets/img/banner/company-4.jpg";

 type company_content_type = {
    title: string,
    sm_des: JSX.Element,
 }

 const company_content: company_content_type = {
    title: "Discovery our culture",
    sm_des: <>More 15,000 Companies & partners <br /> trusted & choice SEOMY.</>,
 }
 const {title, sm_des}  = company_content


const AboutCompanyArea = () => {
    return (
        <>
            <section className="company-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 ">
                        <div className="company-wrap">
                            <div className="company-content">
                                <h4 className="company-title">{title}</h4>
                                <p>{sm_des}</p>
                            </div>
                            <div className="company-thumb">
                                <Image src={company_img_1} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="company-thumb">
                            <Image src={company_img_2} alt="theme-pure" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className="company-thumb d-md-flex d-lg-block">
                            <Image className="mb-30 company-thumb-inner-mr" src={company_img_3} alt="theme-pure" />
                            <Image src={company_img_4} alt="theme-pure" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCompanyArea;