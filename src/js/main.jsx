import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { isMobile } from './util.jsx';

import { 
  carouselMouseDown, 
  carouselMouseMove, 
  carouselMouseUp
} from './Actions/mouse-handlers.jsx'

import { incrementCarouselIndex } from './Actions/carousel-increment.jsx'

import { Header } from './Components/Header/main.jsx';
import { Carousel } from './Components/Carousel/main.jsx';
import { Dots } from './Components/Carousel/dots.jsx';
import { MasonryGrid } from './Components/Masonry-Grid/main.jsx';
import { Footer } from './Components/Footer/main.jsx';

class App extends Component {
  constructor() {
    super()

    this.state = {
      isMobile: isMobile(),
      windowWidth: window.innerWidth,
      carousel: {
        index: 0,
        transitions: true,
        clickedDown: false,
        downPosition: 0,
        movePosition: 0
      }
    };

    const this_ = this;
    setTimeout(function(){ 
      incrementCarouselIndex(this_);
    }, 3000);
  }

  componentDidMount() {
    const this_ = this;
    window.addEventListener('resize', function() {
      this_.setState({
        windowWidth: window.innerWidth
      });
    });
  }


  render() {
    const { isMobile, windowWidth, carousel } = this.state;

    return (
      <div>
        <Header isMobile={isMobile} />
        <Carousel 
          windowWidth={windowWidth}
          isMobile={isMobile} 
          carousel={carousel}
          carouselMouseDown={carouselMouseDown(this)}
          carouselMouseMove={carouselMouseMove(this)}
          carouselMouseUp={carouselMouseUp(this)}
        />
        <Dots
          carousel={carousel}
        />
        <MasonryGrid 
          windowWidth={windowWidth}
          isMobile={isMobile} 
        />
        <Footer/>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('main')
);

