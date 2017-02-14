import React, { Component } from 'react';

import { formatDate } from './util.jsx';


export class MasonryGridItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { imageWidth, date, title, imageSource } = this.props;

    const formattedTitle = title.split(" ").map(function(word, i) {
      return (<span key={i}>{word + " "}</span>);
    })

    return (
      <div 
        className="masonry-grid-item"
        style={{width: imageWidth}}
      >
        <img 
          className="masonry-grid-item-image"
          style={{
            width: imageWidth,
            height: "auto"
          }}
          src={imageSource}
        />
        <div className="masonry-grid-item-body">
          <p className="masonry-grid-item-date">
            {formatDate(date)}
          </p>
          <p className="masonry-grid-item-title">
            {formattedTitle}
          </p>
          <p className="masonry-grid-item-presenter-container">
            <span>Presented by </span>
            <span className="masonry-grid-item-presenter">
              LOREM IPSUM
            </span>
          </p>
        </div>
      </div>
    );
  }
}