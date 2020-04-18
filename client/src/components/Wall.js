import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// use transform and skew to make wall look likes it angled

const Walls = styled.div`
    width: 500px;
    height: 800px;
    border: 2px black solid;
    display: flex;
    justify-content: space-evenly;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const Circle = styled.div`
    background-color: grey;
    width: 5px;
    height: 5px;
    border-radius: 50%;
`;

const Test = styled.div`
    color: red;
    font-size: 20px;
`;

class Wall extends Component {
    constructor(props){
        super(props);
        this.state = {
          widthValue: 0,
          heightValue: 0
        };
      }

    handleWidthChange = (e) => {
        this.setState({widthValue: e.target.value});
    };

    handleHeightChange = (e) => {
        this.setState({heightValue: e.target.value});
    };      

    
    render() {
        let circles = [];

        for (let i = 0; i < this.state.widthValue; i++) {
            circles.push(<p key={i}><Circle /></p>);
          }

        return (
            <Fragment>
                <p>Wall settings:</p>
                <div>
                    <input type="range" min="0" max="20" value={this.state.widthValue} required onChange={this.handleWidthChange}  />
                    <label>Width</label>
                    <Test>{this.state.widthValue}</Test>
                </div>

                <div>
                    <input type="range" min="0" max="50" value={this.state.heightValue} required onChange={this.handleHeightChange} />
                    <label>Height</label>
                    <Test>{this.state.heightValue}</Test>
                </div>
                
                <Walls> 
                    {circles}
                </Walls>
            </Fragment>
        )
    }
};

export default Wall;