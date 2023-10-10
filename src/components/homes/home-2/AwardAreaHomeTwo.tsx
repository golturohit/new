import Image, { StaticImageData } from "next/image";
import UnderlineFour from "@/svg/underline_4";
// award images 
import award_1 from "@/assets/img/icon/award-1.png";
import award_2 from "@/assets/img/icon/award-2.png";
import award_3 from "@/assets/img/icon/award-3.png";
import award_4 from "@/assets/img/icon/award-4.png";
import award_5 from "@/assets/img/icon/award-5.png";
import award_6 from "@/assets/img/icon/award-6.png";
import award_7 from "@/assets/img/icon/award-7.png";
// award shape 
import award_shape_1 from "@/assets/img/shape/services-2shape-3.png";
import award_shape_2 from "@/assets/img/shape/services-2shape-4.png";

interface award_content_type {
    title: JSX.Element;
    award_imagse: {
        id: number;
        img: StaticImageData;
        delay: string;
    }[];
}
const award_content: award_content_type = {
    title: <><span>Awards & <UnderlineFour /> </span> Certifications</>,
    award_imagse: [
        {id: 1, img: award_1, delay: ".6s"},
        {id: 2, img: award_2, delay: ".5s"},
        {id: 3, img: award_3, delay: ".4s"},
        {id: 4, img: award_4, delay: ".4s"},
        {id: 5, img: award_5, delay: ".5s"},
        {id: 6, img: award_6, delay: ".6s"},
        {id: 7, img: award_7, delay: ".6s"},
    ]
}
const {title, award_imagse} = award_content

const AwardAreaHomeTwo = () => {
    return (
      <>
        <section
          className="award-area tp-large-box award-bg pt-110 p-relative fix"
          style={{ backgroundImage: `url(/assets/img/banner/award-bg-2.png)`}}>
          <div className="award-shape d-none d-xl-block">
            <div className="award-shape-one">
              <Image src={award_shape_1} alt="theme-pure" />
            </div>
            <div className="award-shape-two">
              <Image src={award_shape_2} alt="theme-pure" />
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tpsection-wrapper text-center pb-60">
                  <h2 className="tpsection-title-two">{title}</h2>
                </div>
              </div>
            </div>
            <div className="award-brand">
              <div className="row gx-7 gx-md-2 row-cols-4 tp-row-cols-md-7  tp-row-cols-xl-7">
                {award_imagse.map((item, i) => (
                  <div key={i} className="col">
                    <div
                      className="award-anim wow bounceIn"
                      data-wow-duration={item.delay}
                      data-wow-delay={item.delay}
                    >
                      <div className={`award-item award-item${item.id}`}>
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AwardAreaHomeTwo;