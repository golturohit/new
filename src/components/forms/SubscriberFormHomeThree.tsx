'use client'
import EmailIconTwo from "@/svg/email_icon2";

const SubscriberFormHomeThree = () => {
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <div className="p-relative">
          <div className="footer-widget-newsletter-input mb-15">
            <input type="email" placeholder="Your Email" />
            <span>
              <EmailIconTwo />
            </span>
          </div>
          <div className="footer-widget-btn">
            <button className="footer-widget-newsletter-btn-2">
              <i>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L9 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1H9V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SubscriberFormHomeThree;
