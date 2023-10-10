import Link from "next/link";
import Image from "next/image";
import RightArrowAdit from "@/svg/arrow_btn/RightArrowAdit";


import audit_shpae_1 from "@/assets/img/feature/inner/feature-inner-thumb-3.png";
import audit_shpae_2 from "@/assets/img/feature/inner/feature-inner-shape-2.png";

type audit_2_content_type = {
    title: string;
    sm_info: JSX.Element;
}

 const audit_2_content: audit_2_content_type = {
    title: "Check your site health in 4 easy steps",
    sm_info: <>Looking for 404 errors or redirect chains? Check <br /> status codes of any web page.</>,
 }
 const {title, sm_info} = audit_2_content

const AuditFeatureTwo = () => {
    return (
        <>
            <section className="feature-area pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="feature-inner-thumb-wrap p-relative mb-50">
                                <Image src={audit_shpae_1} alt="theme-pure" />
                                <div className="feature-inner-wrap-shape">
                                    <div className="feature-inner-wrap-shape-2">
                                    <Image src={audit_shpae_2} alt="theme-pure" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-inner-wrapper feature-inner-pl mb-50 pl-170">
                                <h4 className="feature-inner-title-2">{title}</h4>
                                <p>{sm_info}</p>
                                <div className="feature-inner-btn">
                                    <Link href="/contact">Try it now <span><RightArrowAdit /> </span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AuditFeatureTwo;