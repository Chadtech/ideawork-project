import React, { Component } from 'react';

import { text } from './text.jsx';

import { getFourByThreeClass, getFourByThreeStyle } from "./util.jsx";

export class CarouselItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { index, source, windowWidth } = this.props;

    const marginLeft = 144 + (720 - (windowWidth / 2));

    return (
      <div 
        style={getFourByThreeStyle({ left: index * 1440 })} 
        className={getFourByThreeClass("carousel-item")}
      >
        <div className="darkener">
          {[ 
            text(0, "Screening:", {
              marginLeft
            }),
            text(1, "DVF Secret Agent Part 2", {
              marginLeft,
              marginTop: -15
            }),
            text(2, "October 15, 2017", {
              marginLeft,
              fontSize: "2em"
            }),
            text(3, "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.", {
              marginLeft,
              fontSize: "1.3em",
              width: 500
            })
          ]}
        </div>
        <img src={"./images/" + source + ".jpg"}/>
      </div>
    );
  }
}