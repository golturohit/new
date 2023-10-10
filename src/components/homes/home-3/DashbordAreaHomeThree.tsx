import Image from "next/image";
// dashbord shape images 
import dashbord_bg_1 from "@/assets/img/shape/dashbord-bg-1.png";
import dashbord_bg_2 from "@/assets/img/banner/dashbord-bg-2.jpg";
import dashbord_bg_3 from "@/assets/img/shape/dashbord-shape-one.jpg";
import dashbord_logo_1 from "@/assets/img/shape/dashbord-logo-1.png";
import dashbord_logo_2 from "@/assets/img/shape/dashbord-logo-2.png";
import dashbord_logo_3 from "@/assets/img/shape/dashbord-logo-3.png";

const DashbordAreaHomeThree = () => {
  return (
    <>
      <div className="dashbord-area theme-bg-4 dash-board-shape-wrap p-relative">
        <div className="dashbord-bg-shape">
          <div className="dashbord-bg-shape-1 d-none d-md-block">
            <Image src={dashbord_bg_1} alt="theme-pure" />
          </div>
          <div className="dashbord-bg-shape-2">
            <span></span>
          </div>
          <div className="dashbord-bg-shape-3">
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="dashbord-bg"
                style={{backgroundImage: `url(/assets/img/banner/dashbord-bg.jpg)`}}>
                <div className="dashbord-thumb">
                  <div className="dashbord-thumb-one text-center">
                    <Image src={dashbord_bg_2} alt="theme-pure" />
                  </div>
                  <div className="dashbord-thumb-two text-center d-none d-sm-block">
                    <Image src={dashbord_bg_3} alt="theme-pure" />
                  </div>
                  <div className="dashbord-thumb-shape">
                    <div className="row gx-8">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="dashbord-thumb-shape-img">
                          <span>
                            <Image src={dashbord_logo_1} alt="theme-pure" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="dashbord-thumb-shape-img">
                          <span>
                            <Image src={dashbord_logo_2} alt="theme-pure" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="dashbord-thumb-shape-img">
                          <span>
                            <Image src={dashbord_logo_3} alt="theme-pure" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordAreaHomeThree;
