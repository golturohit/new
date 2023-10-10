 
import Image, { StaticImageData } from "next/image";
import NeedIcon from "@/svg/need_icon";
import UserIcon from "@/svg/user_icon"; 
 
import shape_1 from "@/assets/img/bg/need-bg-1.png";
import shape_2 from "@/assets/img/shape/need-shape-2.png";
import shape_3 from "@/assets/img/shape/need-shape-3.png";
import inner_shape from "@/assets/img/shape/need-inner-shape-1.png";
import NeedIconThree from "@/svg/keyword/need_icon_3"; 


interface need_content_type {
    title: string;
    sub_title: JSX.Element;
    need_data: {
        id: number;
        icon: JSX.Element;
        title: string;
        info: JSX.Element;
    }[];
    need_shape: {
        id: number;
        img: StaticImageData;
        cls: string;
    }[];
}
const need_content: need_content_type = {
    title: "Real time analytics.",
    sub_title: <>We build and activate brands through cultural insight, <br /> strategic vision, and the power.</>,
    need_data: [
        {
          id: 1, 
          icon: <NeedIcon />, 
          title: "Professional Assistant",
          info: <>All you have to do is follow the website <br /> analysis report.</>,
        },
        {
          id: 2, 
          icon: <UserIcon />, 
          title: "Professional Assistant",
          info: <>All you have to do is follow the website <br /> analysis report.</>,
        },
      ],

    need_shape: [
      {
        id: 1,
        img: shape_1,
        cls: "one",
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
    ],
};
const { title, sub_title, need_shape, need_data } = need_content;

const MarketingFeatureArea = () => {
    return (
        <>
            <section className="feature-area pb-60 pt-15">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="feature-inner-wrap mb-60">
                                <div className="tpsection__content mb-40">
                                    <h2 className="tpsection__title">{title}</h2>
                                    <p>{sub_title}</p>
                                </div>
                                <div className="feature-inner-list">
                                    {need_data.map((item, i) => 
                                        <div key={i} className="feature-inner-item">
                                            <div className="feature-inner-icon">
                                                <span>  <NeedIconThree /> </span>
                                            </div>
                                            <div className="feature-inner-content">
                                                <h4 className="feature-inner-title">{item.title}</h4>
                                                <p>{item.info}</p>
                                            </div>
                                        </div>                        
                                    )} 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="need-thumbs p-relative mb-60">
                                <Image src={inner_shape} alt="theme-pure" />
                                <div className="need-shape d-none d-lg-block">
                                    {need_shape.map((shape_item, index)  => 
                                        <div key={index} className={`need-shape-${shape_item.cls}`}>
                                            <Image src={shape_item.img} alt="theme-pure" />
                                        </div>                        
                                    )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MarketingFeatureArea;