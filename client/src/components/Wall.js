import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// use transform and skew to make wall look likes it angled

const Walls = styled.div`
    width: 500px;
    min-height: 300px;
    border: 2px black solid;
`;

const TestingWidth = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: space-around;
    // align-content: flex-start;
    flex-wrap: wrap;
`;

const Circle = styled.div`
    background-color: grey;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: 5%;
`;

const RangeVaule = styled.div`
    color: red;
    font-size: 20px;
`;

const TestingHeight = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: space-around;
    // flex-direction: column;
    // align-content: space-around;
`;

class Wall extends Component {
    constructor(props){
        super(props);
        this.state = {
          widthValue: 0,
          heightValue: 1,
          holeValue:0
        };
      }

    // handleWidthChange = (e) => {
    //     this.setState({widthValue: e.target.value});
    // };

    // handleHeightChange = (e) => {
    //     this.setState({heightValue: e.target.value});
    // };    
    
    handleHoleChange = (e) => {
        this.setState({holeValue: e.target.value});
    }; 

    
    render() {

        // MAKE THE AMOUNT OF HOLES DYNAMIC 

        // let widthCircles = [];
        // let heightCircles = [];

        // for (let i = 0; i < this.state.widthValue; i++) {
        //     widthCircles.push(<Circle key={i}></Circle>);
        // }

        // for (let i = 0; i < this.state.heightValue * this.state.widthValue - this.state.widthValue; i++) {
        //     heightCircles.push(<Circle key={i}></Circle>)
        // }

        // console.log(heightCircles.length / this.state.widthValue)


        let holeNumber = [];

        for (let i = 0; i < this.state.holeValue; i++) {
            holeNumber.push(<Circle key={i}></Circle>)
        }

        return (
            <Fragment>
                <p>Wall settings:</p>
                {/* <div>
                    <input type="range" min="0" max="20" value={this.state.widthValue} required onChange={this.handleWidthChange}  />
                    <label>Width</label>
                    <RangeVaule>{this.state.widthValue}</RangeVaule>
                </div>

                <div>
                    <input type="range" min="0" max="20" value={this.state.heightValue} required onChange={this.handleHeightChange} />
                    <label>Height</label>
                    <RangeVaule>{this.state.heightValue}</RangeVaule>
                </div> */}

                <div>
                    <input type="range" min="0" max="99" value={this.state.holeValue} required onChange={this.handleHoleChange} />
                    <label>Number of holes</label>
                    <RangeVaule>{this.state.holeValue}</RangeVaule>
                </div>
                
                <Walls>
                    <TestingWidth>
                        {holeNumber}
                    </TestingWidth>
                </Walls>
            </Fragment>
        )
    }
};

export default Wall;