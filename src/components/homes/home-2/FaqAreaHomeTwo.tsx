'use client'
import shape_2 from "@/assets/img/shape/faq-shape-2.png";
import Link from "next/link";
import faq_data_one from "@/data/faq-data";
import Image from "next/image";


const FaqAreaHomeTwo = ({style} : any) => {

    return (
        <>
            <section className={`faq-area ${style ? "pb-110" : "pt-115 pb-15"}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-faq-wrapper mb-80">
                            <div className="tpsection-wrapper mb-25">
                                <h2 className="tpsection-title-two mb-40">Frequently <br /> Asked
                                <span>
                                    Questions
                                    <svg width="306" height="31" viewBox="0 0 306 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.89242 18.9903C2.89242 18.9903 192.778 -5.15589 299.226 12.3064"
                                            stroke="#FFCE5A" strokeWidth="5" strokeLinecap="round"></path>
                                        <path d="M3.2201 14.9796C3.2201 14.9796 196.633 -0.186388 302.688 21.9968"
                                            stroke="#FFCE5A" strokeWidth="5" strokeLinecap="round"></path>
                                    </svg>
                                </span>
                                </h2>
                                <p>Can't find what you are looking for?</p>
                                <b>We would like to chat with you.</b>
                            </div>
                            <div className="tp-faq-img p-relative">
                                <span>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M29.6447 26.693L30.3466 32.3807C30.5266 33.8746 28.9247 34.9186 27.6467 34.1446L20.105 29.6628C19.2771 29.6628 18.4671 29.6088 17.6752 29.5008C19.0071 27.9349 19.7991 25.9549 19.7991 23.813C19.7991 18.7012 15.3712 14.5615 9.89945 14.5615C7.81153 14.5615 5.88562 15.1554 4.28368 16.1994C4.22968 15.7494 4.21167 15.2994 4.21167 14.8314C4.21167 6.64172 11.3214 0 20.105 0C28.8887 0 35.9984 6.64172 35.9984 14.8314C35.9984 19.6912 33.4965 23.9931 29.6447 26.693Z" fill="white"/>
                                    <path d="M19.7992 23.8126C19.7992 25.9545 19.0073 27.9345 17.6753 29.5004C15.8934 31.6603 13.0675 33.0462 9.89961 33.0462L5.20179 35.8361C4.40982 36.3221 3.40186 35.6561 3.50985 34.7382L3.95984 31.1924C1.54793 29.5184 0 26.8365 0 23.8126C0 20.6447 1.69194 17.8549 4.28384 16.1989C5.88577 15.155 7.81169 14.561 9.89961 14.561C15.3714 14.561 19.7992 18.7008 19.7992 23.8126Z" fill="white"/>
                                </svg>
                                </span>
                                {/* <!-- <img src="assets/img/shape/faq-shape-1.png" alt="theme-pure" /> --> */}
                                <div className="tp-faq-shape">
                                    <Image src={shape_2} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-accordion tp-green-accordion">
                            <div className="accordion mb-35" id="accordionExample">
                                {faq_data_one.map((item, i) => 
                                    <div key={i} className="accordion-item">
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            
                                            <button className={`accordion-button ${item.collapsed}`}  
                                                type="button" 
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`} 
                                                aria-expanded={item.aria_expanded} 
                                                aria-controls={`collapse${item.id}`} 
                                                >
                                                 {item.ques}
                                            </button>
                                        </h2>
                                        <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.active}`} aria-labelledby={`heading${item.aria_labelledby}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                 {item.ans}
                                            </div>
                                        </div>
                                    </div>                                
                                )} 
                            </div>
                            <div className="tp-accordion-btn">
                                <Link href="/faq">Load More Questions <i className="fa-light fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqAreaHomeTwo;