import Image, { StaticImageData } from "next/image";
import SocialForm from "@/components/forms/SocialForm";
import award_img_1 from "@/assets/img/cta/cta-inner-award-1.png";
import award_img_2 from "@/assets/img/cta/cta-inner-award-2.png";
import award_img_3 from "@/assets/img/cta/cta-inner-award-3.png";

import award_shape_1 from "@/assets/img/cta/cta-inner-shape-1.png";
import award_shape_2 from "@/assets/img/cta/cta-inner-shape-2.png";
import award_shape_3 from "@/assets/img/cta/cta-inner-shape-3.png";
import award_shape_4 from "@/assets/img/cta/cta-inner-shape-4.png";
import award_shape_5 from "@/assets/img/cta/cta-inner-shape-5.png";
import award_shape_6 from "@/assets/img/cta/cta-inner-shape-6.png";

type award_data_type = {
    id: number,
    img: StaticImageData,
    title: string,
    info: string,
}[]

const award_data: award_data_type = [
    {
        id: 1, 
        img: award_img_1,
        title: "Best of the Year",
        info: "Best Apps - Apple",
    },
    {
        id: 2, 
        img: award_img_2,
        title: "Best of the Year",
        info: "Best Apps - Google",
    },
    {
        id: 2, 
        img: award_img_3,
        title: "Best of the Year",
        info: "Design by - Fast Company",
    },
]


const SocialCtaArea = () => {
    return (
        <>
            <section className="cta-area cta-inner-bg"  style={{backgroundImage: `url(/assets/img/bg/cta-inner-bg-1.png)`}}>

                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="cta-inner-wrapper text-center">
                            <div className="cta-inner">
                                <h4 className="cta-inner-title">Ready to dominate <br /> the first page of Google?</h4>
                            </div>
                            <div className="cta-inner-form">
                                <SocialForm />
                            </div>
                            <div className="cta-inner-award d-flex align-items-center justify-content-between pl-70 pr-70">
                                {award_data.map((item, i) => 
                                    <div key={i} className="cta-award-item text-center mb-30">
                                        <div className="cta-award-icon">
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="cta-award-content">
                                            <h4 className="cta-award-title">{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>                                
                                )} 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="cta-inner-shape">
                    <Image className="cta-inner-shape-1" src={award_shape_1} alt="theme-pure" />
                    <Image className="cta-inner-shape-2" src={award_shape_2} alt="theme-pure" />
                    <Image className="cta-inner-shape-3" src={award_shape_3} alt="theme-pure" />
                    <Image className="cta-inner-shape-4" src={award_shape_4} alt="theme-pure" />
                    <Image className="cta-inner-shape-5" src={award_shape_5} alt="theme-pure" />
                    <Image className="cta-inner-shape-6" src={award_shape_6} alt="theme-pure" />
                </div>
            </section>
        </>
    );
};

export default SocialCtaArea;