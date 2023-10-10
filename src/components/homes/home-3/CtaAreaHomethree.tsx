import Image from "next/image";
import DomainSearchHomeThree from "@/components/forms/DomainSearchHomeThree";
import shape_banner from "@/assets/img/shape/banner-three.png";
// cta content type
type cta_content_type = {
  title: JSX.Element;
  tag_1: string;
  tag_2: string;
};
// cta content type
const cta_content: cta_content_type = {
  title: <>Discover what <br /> you're missing</>,
  tag_1: "No Credit Cards",
  tag_2: "Ready to Use in Few Minutes",
};
const { title, tag_1, tag_2 } = cta_content;
const CtaAreaHomethree = () => {
  return (
    <>
      <section className="cta-area cta-bg p-relative theme-bg-4 pb-95">
        <div className="tpcta-shape">
          <Image src={shape_banner} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-wrapper text-center">
                <div className="tpsection-wrapper">
                  <h2 className="tpsection-title-white-2 mb-35">{title}</h2>
                </div>
                <div className="tpbanner-analysis-3 d-flex align-items-center justify-content-center mb-15">
                  <DomainSearchHomeThree />
                </div>
                <div className="tpbanner-payment">
                  <span>{tag_1}</span>
                  <span>{tag_2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomethree;
