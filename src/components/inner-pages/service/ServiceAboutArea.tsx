const service_service_data = {
  sub_title: "What",
  title: <> Expect great <br /> things from your SEO agency.! </> ,
  sm_info:  <> Iterative approaches to corporate strategy foster collaborative thinking to further <br /> the overall value. Leverage agile frameworks to provide a robust high level over <br /> views. In an ideal world this text {"wouldn’t"} exist.</> ,
};
const { sub_title, title, sm_info } = service_service_data;

const ServiceAboutArea = () => {
  return (
    <>
      <section className="about-area about-inner-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-inner-wrap">
                <div className="about-inner-content-2 d-flex align-items-center mb-45">
                  <span>{sub_title}</span>
                  <h4 className="about-inner-title-2">{title}</h4>
                </div>
                <p className="pl-30">{sm_info}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAboutArea;
