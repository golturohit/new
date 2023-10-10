'use client'
import React from 'react';
import EmailIconOne from '@/svg/email_icon_1';
import SerchIcon from '@/svg/serch_icon';

const HeroSearchForm = () => {
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div className="tpbanner__form d-flex align-items-center justify-content-between">
                    <div className="tpbanner__input">
                        <input type="text" placeholder="https:// yoursite.com" />
                        <span>
                            <SerchIcon /> 
                        </span>
                    </div>
                    <div className="tpbanner__input">
                        <input type="email" placeholder="youremail@domain.com" />
                        <span>
                            <EmailIconOne /> 
                        </span>
                    </div>
                    <div className="tpbanner__search-btn">
                        <button className="banner-search-btn" type='submit'>Analyze Now</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default HeroSearchForm;