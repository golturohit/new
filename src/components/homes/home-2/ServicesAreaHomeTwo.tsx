
import Image, { StaticImageData } from "next/image";
import service_shape_1 from "@/assets/img/shape/services-2shape-1.png";
import service_shape_2 from "@/assets/img/shape/services-2shape-2.png";
import UnderlineThree from "@/svg/underline_3";


import service_icon_1 from "@/assets/img/icon/services-icon-1.png";
import service_icon_2 from "@/assets/img/icon/services-icon-2.png";
import service_icon_3 from "@/assets/img/icon/services-icon-3.png";
import service_icon_4 from "@/assets/img/icon/services-icon-4.png"; 

interface service_content_type {
    title: JSX.Element;
    service_data: {
        id: number;
        img: StaticImageData;
        title: string;
        sm_info: JSX.Element;
    }[];
}


const service_content: service_content_type = {
    title: <>Check why you Should <br /> <span className="big-shape2"> Choose Us <UnderlineThree /> </span></>,
    // service data
    service_data: [
        {
            id: 1, 
            img: service_icon_1,
            title: "SEO Strategy",
            sm_info: <>The Easiest Way to <br /> Improve Your Site Speed</>,
        },
        {
            id: 2, 
            img: service_icon_2,
            title: "SEO Optimization",
            sm_info: <>Complete Site <br /> Speed Optimization Service</>,
        },
        {
            id: 3, 
            img: service_icon_3,
            title: "SEO Analysis",
            sm_info: <>Instantly Analyze Your <br /> SEO Issues</>,
        },
        {
            id: 4, 
            img: service_icon_4,
            title: "Web & Mobile",
            sm_info: <>Enhanced Mobile & <br /> Desktop UX</>,
        },
    ]
}
const {title, service_data}  = service_content


const ServicesAreaHomeTwo = () => {
    return (
      <>
        <section className="services-area tp-large-box services-bg-two p-relative fix"
          style={{ backgroundImage: `url(/assets/img/banner/services-bg.png)` }} >
          <div className="services-shape d-none d-xl-block">
            <div className="services-shape-one">
              <Image src={service_shape_1} alt="theme-pure" />
            </div>
            <div className="services-shape-two">
              <Image src={service_shape_2} alt="theme-pure" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tpsection-wrapper text-center mb-60">
                    <h2 className="tpsection-title-two">{title}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {service_data.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="services-two mb-30">
                    <div className="services-two-bg"></div>
                    <div className="services-two-icon">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="services-two-content">
                      <span>{item.title}</span>
                      <h4 className="services-two-title">{item.sm_info}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
};

export default ServicesAreaHomeTwo;