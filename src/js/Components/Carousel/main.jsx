import React, { Component } from 'react';

import { CarouselItem } from './carousel-item.jsx';

import { 
  getFourByThreeClass, 
  getFourByThreeStyle,
  getCarouselClass, 
  getCarouselStyle 
} from './util.jsx';

import { mobileClass } from '../util.jsx';


export class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { 
      windowWidth, 
      carousel, 
      carouselMouseDown, 
      carouselMouseMove, 
      carouselMouseUp
    } = this.props;
    
    const { index, transitions } = carousel;

    const mobile = mobileClass(this.props);

    const carouselClass = getFourByThreeClass(
      getCarouselClass("carousel", transitions)
    );

    const carouselStyle = getFourByThreeStyle(
      getCarouselStyle(index, this.props)
    );

    const carouselItems = [ ...Array(4).keys() ]
      .map(function(index) {
        return (
          <CarouselItem 
            key={index} 
            index={index} 
            source={"carousel-img"} 
            windowWidth={windowWidth}
          />
        );
      })

    return (
      <div 
        className={mobile("carousel-container")}
        onMouseDown={carouselMouseDown}
        onMouseMove={carouselMouseMove}
        onMouseUp={carouselMouseUp}
      >
        <div 
          className={carouselClass}
          style={carouselStyle}>
          {carouselItems}
        </div>
      </div>
    );
  }
}