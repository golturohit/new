import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import NeedIcon from "@/svg/need_icon";
import UserIcon from "@/svg/user_icon";
import need_shape_img_1 from "@/assets/img/shape/need-shape-1.png";
import need_shape_img_2 from "@/assets/img/shape/need-inner-shape-1.png";

 
import shape_1 from "@/assets/img/bg/need-bg-1.png";
import shape_2 from "@/assets/img/shape/need-shape-2.png";
import shape_3 from "@/assets/img/shape/need-shape-3.png";
import shape_4 from "@/assets/img/shape/need-round.png";
import shape_5 from "@/assets/img/shape/need-round-inner.png";

import NeedIconTwo from "@/svg/keyword/need_icon_2";
import UserIconTwo from "@/svg/keyword/user_icon_2";


interface need_content_type {
    need_shape: {
        id: number;
        img: StaticImageData; 
        cls: string;
    }[];
    title: string;
    need_data: {
        id: number;
        cls: string;
        icon: JSX.Element;
        icnon_2: JSX.Element;
        title: string;
        info: string;
    }[];
}



const NeedAreaHomeThree = ({style} : any) => {
  const shape_out = style ? shape_5 : shape_4

  const need_content: need_content_type = {
    need_shape: [
      {
        id: 1,
        img: shape_1,
        cls: "one d-none d-sm-block",
      },
      {
        id: 2,
        img: shape_2,
        cls: "two",
      },
      {
        id: 3,
        img: shape_3,
        cls: "three",
      },
      {
        id: 4,
        img: shape_out, 
        cls: "four d-none d-md-block",
      },
    ],
    title: "Everything you need in one place",
    need_data: [
      {
        id: 1,
        cls: "mb-60",
        icon: <NeedIcon />,
        icnon_2: <NeedIconTwo />,
        title: "How do you acquire users?",
        info: "Understand how your keyword/group is ranking specific cases easily.",
      },
      {
        id: 2,
        cls: "",
        icon: <UserIcon />,
        icnon_2: <UserIconTwo />,
        title: "When do your users visit?",
        info: "Understand how your keyword/group is ranking specific cases easily.",
      },
    ],
  };
  const { title, need_shape, need_data } = need_content;


  return (
    <> 
      <section className={`need-area ${style ? "need-inner mt-100 p-relative" : "need-spacing theme-bg-4 pb-200"}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="need-thumb p-relative mb-40">
                {style ? <Image src={need_shape_img_2} alt="theme-pure" /> : <Image src={need_shape_img_1} alt="theme-pure" />}
                 
                <div className="need-shape">
                  {need_shape.map((shaep, index) => (
                    <div key={index} className={`need-shape-${shaep.cls}`}> 
                      <Image src={shaep.img} alt="theme-pure" />                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="need-wrap pl-70">
                <div className="tpsection-wrapper">
                  <h2 className="tpsection-title-white-2 mb-50">{title}</h2>
                </div>
                <div className="need-wrapper">
                  {need_data.map((item, i) => (
                    <div key={i} className={`need-item d-flex ${item.cls}`}>
                      <div className="need-icon">
                        {style ? <i> {item.icnon_2} </i> : <i> {item.icon} </i>} 
                      </div>
                      <div className="need-content">
                        <h4 className="need-title mb-15">{item.title}</h4>
                        <p>{item.info}</p>
                        <Link href="/about">
                          Learn More {' '}
                          <i className="fa-regular fa-angle-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeedAreaHomeThree;
