import React, { Component } from "react";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            name: "XXX",
        };
    }

    render() {
        return (
            <CardTemplate>
                <div>YYY {this.props.state}</div>
            </CardTemplate>
        );
    }
}

const CardTemplate = (props) => (
    <div
        style={{
            width: "50%",
            margin: "10px auto 10px auto",
            boxShadow: "0px 2px 4px 3px rgba(0,0,0,0.25)",
            padding: "5px",
            fontSize: 12,
            fontFamily: 'sans-serif',
            backgroundColor: "#996",
        }}
    >
        {props.children}
    </div>
);

export default Card;
