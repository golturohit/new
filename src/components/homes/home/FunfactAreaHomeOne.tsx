import Image, { StaticImageData } from "next/image";
import BGShapeThree from "@/svg/bg_shape_3";

import shape_1 from "@/assets/img/shape/funfact-2.png";
import shape_2 from "@/assets/img/shape/funfact-3.png";

import icon_1 from "@/assets/img/shape/funfact-icon-1.png";
import icon_2 from "@/assets/img/shape/funfact-icon-2.png";
import icon_3 from "@/assets/img/shape/funfact-icon-3.png";
import icon_4 from "@/assets/img/shape/funfact-icon-4.png";

interface funfact_content_type {
    sub_title: string;
    title: string;
    funfacts: {
        id: number;
        title: string;
        count: JSX.Element;
        info_1: string;
        info_2: string;
        img_1: StaticImageData;
        img_2: StaticImageData;
    }[];
}
const funfact_content: funfact_content_type= {
    sub_title: "Selected Projects",
    title: "We Believe In Our Success",
    funfacts: [
        {
            id: 1,
            title: "Keywords",
            count: <>4<span>.628.319.632</span></>,
            info_1: "62 Countries",
            info_2: "28 Languages",
            img_1: icon_1,
            img_2: icon_2,
        },
        {
            id: 2,
            title: "Search Volume",
            count: <>106,<span>9 Billion</span></>,
            info_1: "4+ Billion  Keywords",
            info_2: "36TB Data",
            img_1: icon_3,
            img_2: icon_4,
        },
    ]
}
const {sub_title, title, funfacts} = funfact_content

const FunfactAreaHomeOne = () => {
    return (
        <>
            <section className="funfact-area pb-80">
                <div className="container">
                    <div className="tpfunfact p-relative">
                    <div className="tpfunfact-bg theme-bg-2" style={{backgroundImage: `url(/assets/img/shape/funfact-1.png)`}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tpsection__content feature-white-section text-center">
                                <div className="tpbanner__sub-title mb-15">
                                    <span>{sub_title}</span>
                                    <i>
                                        <BGShapeThree /> 
                                    </i>
                                </div>
                                <h2 className="tpsection-title tpsection-title-white mb-15">{title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="tpfunfact-shape d-none d-md-block">
                            <div className="tpfunfact-shape-one"><Image src={shape_1} alt="theme-pure" /></div>
                            <div className="tpfunfact-shape-two"><Image src={shape_2} alt="theme-pure" /></div>
                        </div>
                    </div>
                    <div className="tpfunfact-box">
                        <div className="row justify-content-center">
                            {funfacts.map((item, i) => 
                                <div key={i} className="col-lg-5">
                                    <div className="tpfunfact-wrapper text-center mb-50">
                                    <span className="tpfunfact-title">{item.title}</span>
                                    <h5 className="tpfunfact-count mb-15">{item.count}</h5>
                                    <div className="tpfunfact-tag">
                                        <span><i><Image src={item.img_1} alt="theme-pure" /></i>{item.info_1}</span>
                                        <span><i><Image src={item.img_2} alt="theme-pure" /></i>{item.info_2}</span>
                                    </div>
                                    </div>
                                </div>                    
                            )}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FunfactAreaHomeOne;