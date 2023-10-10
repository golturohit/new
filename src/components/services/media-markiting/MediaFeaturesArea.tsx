import Image from "next/image";
import BootomRoundIcon from "@/svg/services_icon/BootomRoundIcon";
import FeatureBGIcon from "@/svg/services_icon/FeatureBGIcon";
import TopRoundInco from "@/svg/services_icon/TopRoundInco";

import inner_thumb from "@/assets/img/feature/inner/feature-inner-thumb-1.png";
import inner_img_1 from "@/assets/img/feature/inner/feature-inner-social-1.png";
import inner_img_2 from "@/assets/img/feature/inner/feature-inner-social-2.png";
import inner_img_3 from "@/assets/img/feature/inner/feature-inner-social-3.png";
import inner_img_4 from "@/assets/img/feature/inner/feature-inner-social-4.png";

// media feature data type
interface media_feature_data_type {
    id: number;
    cls: string;
    icon: JSX.Element;
    shape?: JSX.Element;
    title: string;
    info: JSX.Element;
}[]
// media feature data
const media_feature_data: media_feature_data_type [] = [
    {
        id: 1,
        cls: "p-relative d-flex",
        icon: <FeatureBGIcon />,
        shape: <TopRoundInco />,
        title: "Creative Ideas",
        info: <> Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
    },
    {
        id: 2,
        cls: "p-relative pl-130 d-flex",
        icon: <FeatureBGIcon />,
        shape: <BootomRoundIcon />,
        title: "Data Collection",
        info: <> Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
    },
    {
        id: 3,
        cls: "d-flex",
        icon: <FeatureBGIcon />,
        title: "Targeting",
        info: <> Keyword research and other market <br /> research under the SEO analytics <br /> umbrella.</>,
    },
] 

const MediaFeaturesArea = () => {
    return (
        <>
            <section className="feature-area pt-125 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="feature-social">
                                <ul className="feature-list-4 feature-socia-list">
                                    {media_feature_data.map((item, i) => 
                                        <li key={i}>
                                            <div className={`feature-list-4-item ${item.cls}`}>
                                                <div className="feature-list-4-icon ">
                                                    <div className="feature-list-bg p-relative">
                                                        <i> <FeatureBGIcon /> </i>
                                                        <b>0{item.id}</b>
                                                        <span className="feature-bg-border-1"></span>
                                                        <span className="feature-bg-border-2"></span>
                                                        <span className="feature-bg-border-3"></span>
                                                        <span className="feature-bg-border-4"></span>
                                                    </div>
                                                </div>
                                                <div className="feature-list-4-content">
                                                    <h4 className="title">{item.title}</h4>
                                                    <p>{item.info}</p>
                                                </div>
                                                {item.shape &&
                                                    <div className={`feature-4-shape-${item.id} d-none d-md-block`}> {item.shape}</div> 
                                                } 
                                            </div>
                                        </li> 
                                    )} 
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="feature-inner-gallery">
                                <div className="feature-inner-thumb">
                                    <Image src={inner_thumb} alt="theme-pure" />
                                </div>
                                <div className="feature-inner-shape d-none d-md-block">
                                    <Image className="feature-inner-shape-1" src={inner_img_1} alt="theme-pure" />
                                    <Image className="feature-inner-shape-2" src={inner_img_2} alt="theme-pure" />
                                    <Image className="feature-inner-shape-3" src={inner_img_3} alt="theme-pure" />
                                    <Image className="feature-inner-shape-4" src={inner_img_4} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MediaFeaturesArea;