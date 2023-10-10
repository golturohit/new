"use client"
import ArrowIcon from "@/svg/ArrowIcon";
import EmailHomeFour from "@/svg/EmailHomeFour";

const SubcribeHomeFour = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          <div className="footer-widget-newsletter-input mb-15">
            <input type="email" placeholder="Your Email" />
            <span>
              <EmailHomeFour />
            </span>
          </div>
          <div className="footer-widget-btn">
            <button className="footer-widget-newsletter-btn-2">
              <i> <ArrowIcon /> </i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SubcribeHomeFour;
