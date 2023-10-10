 
import Image from "next/image";
import optimize_bg_1 from "@/assets/img/bg/optimize-bg-3.png";
import optimize_bg_2 from "@/assets/img/bg/optimize-bg-4.png";
import optimize_bg_3 from "@/assets/img/shape/optimize-shape-2.png";
import optimize_bg_4 from "@/assets/img/bg/optimize-shape-1.png";






const optimize_content = {
    subtitle: "Get the best",
    title: <>Social Media is the <br /> Fastest growing trend</>,
    progress_1: "Market Research",
    progress_2: "SEO Consultancy",
    progress_3: "SEO Audit",
}
const {subtitle, title, progress_1, progress_2, progress_3}  = optimize_content

const MediaOptimizeArea = () => {
    return (
        <>
            <section className="optimize-area optimize-bottom pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5">
                        <div className="optimize-thumb p-relative pt-35">
                            <div className="optimize-thumb-img">
                                <Image src={optimize_bg_1} alt="theme-pure" />
                            </div>
                            <div className="optimize-shape">
                                <Image src={optimize_bg_2} alt="theme-pure" className="optimize-shape-4" />
                                <Image src={optimize_bg_3} alt="theme-pure" className="optimize-shape-5 d-none d-lg-block" />
                                <Image src={optimize_bg_4} alt="theme-pure" className="optimize-shape-6 d-none d-md-block" />
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6">
                        <div className="optimize-wrapper optimize-seo pt-35">
                            <div className="optimize-subtitle mb-50">
                                <span>{subtitle}</span>
                                <h5 className="section-title-4 fs-40">{title}</h5>
                            </div>
                            <div className="tpdrive-progress mb-25 pr-150">
                                <div className="tpdrive-bar-item mb-25">
                                <h4 className="tpdrive-bar-title mb-15">{progress_1}</h4>
                                <div className="tpdrive-bar-progress">
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s"
                                            role="progressbar" data-width="74%" aria-valuenow={65} aria-valuemin={0}
                                            aria-valuemax={100}
                                            style= {{
                                                width: '74%',
                                                visibility: 'visible',
                                                animationDuration: '0.8s',
                                                animationDelay: '0s',
                                                animationName: 'slideInLeft',
                                            }} >
                                            <span>74%</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tpdrive-bar-item yellow-bar mb-25">
                                <h4 className="tpdrive-bar-title mb-15">{progress_2}</h4>
                                <div className="tpdrive-bar-progress">
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s"
                                            role="progressbar" data-width="92%" aria-valuenow={65} aria-valuemin={0}
                                            aria-valuemax={100}
                                            style= {{
                                                width: '92%',
                                                visibility: 'visible',
                                                animationDuration: '0.8s',
                                                animationDelay: '0s',
                                                animationName: 'slideInLeft',
                                            }} >
                                            <span>92%</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tpdrive-bar-item purple-bar">
                                <h4 className="tpdrive-bar-title mb-15">{progress_3}</h4>
                                <div className="tpdrive-bar-progress">
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s"
                                            role="progressbar" data-width="54%" aria-valuenow={84} aria-valuemin={0}
                                            aria-valuemax={100}
                                            style= {{
                                                width: '54%',
                                                visibility: 'visible',
                                                animationDuration: '0.8s',
                                                animationDelay: '0s',
                                                animationName: 'slideInLeft',
                                            }} >
                                            <span>54%</span>
                                        </div>
                                    </div>
                                </div>
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

export default MediaOptimizeArea;