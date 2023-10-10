
import React from 'react';
import Error from '@/components/error';
import Wrapper from '@/layout/Wrapper';
import ScrollLineIcon from '@/svg/scroll_line_icon';

const index = () => {
    return (
        <Wrapper>
            <Error />
            <ScrollLineIcon />
        </Wrapper>
    );
};

export default index;