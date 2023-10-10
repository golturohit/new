import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import shape_img from "@/assets/img/shape/keyword-shape-2.png";
// shape image
import shape_1 from "@/assets/img/bg/need-bg-2.png";
import shape_2 from "@/assets/img/shape/need-shape-2.png";
import shape_3 from "@/assets/img/shape/keyword-shape-1.png";
import shape_4 from "@/assets/img/shape/keyword-shape-3.png";
// types
interface keyword_content_type {
    title: JSX.Element;
    info: JSX.Element;
    lists: string[];
    shape_data: {
        id: number;
        img: StaticImageData;
        cls: string;
    }[];
}
// keyword content
const keyword_content: keyword_content_type = {
  title: <> Bring your <br /> keywords</>,
  info: <> Migrating your rank tracking tool is like migrating from <br /> Google Analytics to another solution. </>,
  lists: [
    "Migrate Your Keywords",
    "No API Needed, Headless Browsers",
    "Just Share Credentials",
  ],
  shape_data: [
    {
      id: 1,
      img: shape_1,
      cls: "one d-none d-md-block",
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
    {
      id: 4,
      img: shape_4,
      cls: "four",
    },
  ],
};
const { title, info, lists, shape_data } = keyword_content;

const KeywordAreaHomeThree = () => {
  return (
    <>
      <section className="keyword-area theme-bg-4 pb-40">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="keyword-content pb-100 ">
                <div className="tpsection-wrapper">
                  <h2 className="tpsection-title-white-2 mb-20">{title}</h2>
                </div>
                <p>{info}</p>
                <ul className="keyword-list mb-40">
                  {lists.map((list, i) => (
                    <li key={i}>
                      <i className="fa-light fa-check"></i>
                      {list}
                    </li>
                  ))}
                </ul>
                <div className="keyword-btn">
                  <Link href="/keyword-search" className="radient-btn">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="keyword-thumb p-relative pb-115">
                <Image src={shape_img} alt="theme-pure" />
                <div className="need-shape">
                  {shape_data.map((item, index) => (
                    <div key={index} className={`keyword-shape-${item.cls}`}>
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeywordAreaHomeThree;
