import React, { Component } from 'react';
import Header from '../components/Header';
import Wall from '../components/Wall';
import Inventory from '../components/Inventory';
import styled from 'styled-components';

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 80%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Top>
          <Header />
          <Inventory />
        </Top>
        <Wall />
      </MainWrapper>
    )
  }
}

export default App;
