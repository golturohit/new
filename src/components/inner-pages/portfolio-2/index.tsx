
import React from 'react';
import HeaderSix from '@/layout/headers/HeaderSix';
import PortfolioAreaTwo from './PortfolioAreaTwo';
import FooterFive from '@/layout/footers/FooterFive';

const PortfolioTwo = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <PortfolioAreaTwo />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default PortfolioTwo 