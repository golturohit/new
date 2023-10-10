import Image, { StaticImageData } from "next/image";
// review user logo 
import review_user_logo_1 from "@/assets/img/icon/review-logo-1.png";
import review_user_logo_2 from "@/assets/img/icon/review-logo-2.png";
import review_user_logo_3 from "@/assets/img/icon/review-logo-3.png";
 
import banner_img from "@/assets/img/shape/banne-three-2.png";
// review data type
interface review_content_type {
    title: string;
    review_date: string;
    review_data: {
        id: number;
        cls: string;
        img: StaticImageData;
        review_text: string;
    }[];
}
// review content 
const review_content: review_content_type = {
  title: "What users are review",
  review_date: "Data supplied as of 10/12/2023",
  review_data: [
    {
      id: 1,
      cls: "",
      img: review_user_logo_1,
      review_text: "4.58 out of 5 stars from 1,045 reviews",
    },
    {
      id: 2,
      cls: "review-border",
      img: review_user_logo_2,
      review_text: "4.58 out of 5 stars from 1,045 reviews",
    },
    {
      id: 3,
      cls: "",
      img: review_user_logo_3,
      review_text: "4.58 out of 5 stars from 1,045 reviews",
    },
  ],
};
const { title, review_date, review_data } = review_content;

const ReviewAreaHomeThree = () => {
  return (
    <>
      <section className="review-area p-relative theme-bg-4 pt-90 pb-120">
        <div className="container">
          <div className="tpreview-shape">
            <Image src={banner_img} alt="theme-pure" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="review-section text-center">
                <h2 className="review-title mb-55">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {review_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`review-item text-center mb-45 ${item.cls}`}>
                  <div className="review-icon mb-10">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="review-content">
                    <span>{item.review_text}</span>
                    <div className="review-star">
                      <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                      <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                      <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                      <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                      <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="review-date text-center">
                <span>{review_date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewAreaHomeThree;
