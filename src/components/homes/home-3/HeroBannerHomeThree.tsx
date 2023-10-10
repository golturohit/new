import Image from 'next/image'; 
import banner_img from "@/assets/img/shape/banne-three.png";
import BannerAnalysisFormHomeThree from '@/components/forms/BannerAnalysisFormHomeThree';

// hero content types
interface hero_content_type { 
    sub_title: JSX.Element;
    info: JSX.Element;
    payment_text_1: string;
    payment_text_2: string;
}
// hero content here
const hero_content: hero_content_type = { 
    sub_title: <>SEO Audit <br /> & Reporting Tool</>,
    info: <>Find all the SEO secrets of your competitors and track them daily <br /> without hours of boring
    keyword research & grouping</>,
    payment_text_1: "No Credit Cards",
    payment_text_2: "Ready to Use in Few Minutes",
    
}
const {sub_title, info, payment_text_1, payment_text_2} = hero_content

const HeroBannerHomeThree = () => {
    return (
      <>
        <div className="banner-area banner-three p-relative theme-bg-4">
          <div className="container">
            <div className="banner-three-shape">
              <Image src={banner_img} alt="theme-pure" />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tpbanner-three text-center">
                  <h2 className="tpbanner-three-title mb-20">{sub_title}</h2>
                  <p>{info}</p>
                  <div className="tpbanner-analysis-3 d-flex align-items-center justify-content-center mb-15">
                    <BannerAnalysisFormHomeThree />
                  </div>
                  <div className="tpbanner-payment">
                    <span>{payment_text_1}</span>
                    <span>{payment_text_2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}; 

export default HeroBannerHomeThree;