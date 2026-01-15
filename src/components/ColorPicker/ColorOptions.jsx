import React from "react";
import "./Coloroptions.css";

export class ColorOptions extends React.Component {
    state = {
        activeColor: null
    }


    getCurrentOption = (color) => {
        this.setState({ activeColor: color })
    }

    render() {
        return (
            <div>
                <h2>Color Picker</h2>
                <div className="wrapper">
                    {this.props.options.map((option, index) => {
                        return (
                            <div
                                key={option.label}
                                onClick={() => { this.getCurrentOption(option.color) }}
                                className="label">
                                <span style={{
                                     color: this.state.activeColor === option.color ? option.color : 'black',
                                    fontSize: '24px'
                                }}>
                                    {option.label}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}