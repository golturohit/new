 "use client"

import EmailIconSocial from "@/svg/services_icon/EmailIconSocial";

const SocialForm = () => {
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div className="cta-inner-wrap d-flex align-items-center justify-content-between">
                    <div className="cta-inner-input">
                        <span> <EmailIconSocial /> </span>
                        <input type="email" placeholder="Enter your email..." />
                    </div>
                    <div className="cta-inner-btn">
                        <button className="banner-search-btn" type="submit">Get Started</button>
                    </div>
                </div>
            </form> 
        </>
    );
};

export default SocialForm;