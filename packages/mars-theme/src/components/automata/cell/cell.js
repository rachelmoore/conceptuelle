import React, { createRef } from "react";
import { connect } from "frontity";
import { sample } from "lodash";

class Cell extends React.Component {
    
    constructor(props) {
        super(props)
        this.cellRef = createRef();
        this.state = {
            activeColor: '#FFFFFF',
        }
    }

    render() {
        console.log('live', this.props.live)
        const colorChange = () => {
            console.log('change')
            const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
            let randomColor = sample(colors);
            this.setState({activeColor: randomColor});
          };

        return (
            <div
            ref={this.cellRef} 
            onMouseOver={colorChange}
            style={{ width: "10px", height: "10px", borderRadius: "20", backgroundColor: this.props.live ? this.state.activeColor : '#000'}} 
            />
        );
    }
};

export default connect(Cell);