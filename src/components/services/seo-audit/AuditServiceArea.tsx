import Link from "next/link";
 import Image, { StaticImageData } from "next/image";

import audit_service_1 from "@/assets/img/services/services-1-icon-1.png";
import audit_service_2 from "@/assets/img/services/services-1-icon-2.png";
import audit_service_3 from "@/assets/img/services/services-1-icon-3.png";
import audit_service_4 from "@/assets/img/services/services-1-icon-4.png";
import audit_service_5 from "@/assets/img/services/services-1-icon-5.png";
import audit_service_6 from "@/assets/img/services/services-1-icon-6.png"; 
// audit data type
type audit_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
}[]
// audit data 
const audit_service_data: audit_service_data_type = [
    {
        id: 1,
        img: audit_service_1,
        title: "Social Marketing",
        sm_info: <>Instant account activation <br /> if instant access.</>,
    },
    {
        id: 2,
        img: audit_service_2,
        title: "SEO Optimization",
        sm_info: <>Services activation <br /> if  need  access.</>,
    },
    {
        id: 3,
        img: audit_service_3,
        title: "One Page SEO",
        sm_info: <>Account activation <br /> if instant  access.</>,
    },
    {
        id: 4,
        img: audit_service_4,
        title: "Content Marketing",
        sm_info: <>SEO account activation <br /> if instant  access.</>,
    },
    {
        id: 5,
        img: audit_service_5,
        title: "Email Marketing",
        sm_info: <>Email Marketing activation <br /> if instant access.</>,
    },
    {
        id: 6,
        img: audit_service_6,
        title: "Keyword Research",
        sm_info: <>Keyword Research activation <br /> if instant access.</>,
    },
]

type  style_type = {
    style?: any,
}

const AuditServiceArea = ({style} : style_type) => {
    return (
      <>
        <section className={`services-area ${style ? "pb-110" : "pt-120 pb-95"}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style ? "" : "services-border-less"}`}>
                  <div className="tpservices">
                    <div className="tpservices-list">
                      <ul>
                        {audit_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item.id}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tpservices-content">
                                <span>{item.title}</span>
                                <h4 className="tpservices-title">
                                  <Link href="/seo-audit">{item.sm_info}</Link>
                                </h4>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AuditServiceArea;