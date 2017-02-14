import React, { Component } from 'react';

import { MasonryGridItem } from './masonry-grid-item.jsx'

import { dummyData } from '../../dummy-data.jsx';
import { columnizeArticles, getImageWidth } from './util.jsx';


export class MasonryGrid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    const { windowWidth, isMobile } = this.props;

    const imageWidth = getImageWidth(windowWidth, isMobile);

    const columns = columnizeArticles(isMobile, dummyData);

    return (
      <div className="masonry-grid-container">
        {columns.map(function(column, key) {
          const gridItems = column.map(function(gridItem, key) {
            const { date, title, imageSource } = gridItem;
            return (
              <MasonryGridItem
                key={key}
                imageWidth={imageWidth}
                date={date}
                title={title}
                imageSource={imageSource}
              />
            );
          });

          return (
            <div 
              className="masonry-grid-column"
              style={{width: imageWidth}}
              key={key}
            >
              {gridItems}
            </div>
          );
        })
      }
      </div>
    );
  }
}