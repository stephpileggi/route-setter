import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: grey;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
`;

class Inventory extends Component {
    render() {
        return (
            <Button>Start setting</Button>
        )
    }
};

export default Inventory;