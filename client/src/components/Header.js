import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 30px;
    color: aqua;
`;

const Container = styled.div`
    text-align: left;
`;

const OffColor = styled.span`
    color: grey;
`;

const Header = () =>  {
    return (
        <Container>
            <Heading>Route<OffColor>setter</OffColor></Heading>
        </Container>
    )
};

export default Header;