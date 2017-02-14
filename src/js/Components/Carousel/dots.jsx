import React, { Component } from 'react';

import { dotIsIndex } from './util.jsx';

export class Dots extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {index} = this.props.carousel

    return (
      <div className="dots-container">
        {[...Array(3).keys()].map(function(i) {
          return (
            <div 
              key={i} 
              className={dotIsIndex(i, index)}
            />
          );
        })}
      </div>
    );
  }
}