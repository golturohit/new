"use client"
import EmailTwo from "@/svg/email_2";

const SubscribeForm = () => {
  return (
    <>
      <form  onSubmit={e => e.preventDefault()}>
        <div className="footer-widget-newsletter-input mb-15">
          <input type="email" placeholder="Enter Mail" />
          <span> 
            <EmailTwo />
          </span>
        </div>
        <button className="footer-widget-newsletter-btn">subscribe.</button>
      </form>
    </>
  );
};

export default SubscribeForm;
