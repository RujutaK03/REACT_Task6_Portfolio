import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Tasks/ColorPicker_styles.css"

class ColorPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayColors: false,
            selectedColor: 'green',
        }
    }

    handleButtonClick = () => {
        this.setState({ displayColors: true });
    };

    handleColorClick = (color) => {
        this.setState({
            displayColors: false,
            selectedColor: color,
        });
    };


    render() {
        const { colors } = this.props;
        const { displayColors, selectedColor } = this.state;

        return (
            <div className='body'>
                <h1 className='fw-1 pt-5'> Color Picker </h1>
                <div className='content mx-auto mt-5'>

                    {displayColors && (
                        <div className='container'>
                            {colors.map((color, index) => (
                                <div key={index} className='color-item' style={{ backgroundColor: color }} onClick={() => this.handleColorClick(color)}></div>
                            ))}
                        </div>
                    )}

                    <button className='btn text-light custom-button' style={{ backgroundColor: selectedColor }} onClick={this.handleButtonClick}> Pick a Color </button>
                </div>
            </div>
        )
    }
}

export default ColorPicker
