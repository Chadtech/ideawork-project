export function carouselMouseUp (this_) {
    return function (event) {

      const { carousel } = this_.state;
      const { movePosition, downPosition } = carousel
      const distance = Math.abs(movePosition - downPosition);
      var index = carousel.index;

      if ((window.innerWidth / 4) < distance ) {
        const direction = movePosition - downPosition > 0;
        index = direction ? index - 1 : index + 1; 
      }

      this_.setState({
        carousel: Object.assign(carousel, {
          clickedDown: false,
          downPosition: 0,
          movePosition: 0,
          index: index
        })
      })
    };
  }

export function carouselMouseDown (this_) {
  return function (event) {

    const { carousel } = this_.state;

    this_.setState({
      carousel: Object.assign(carousel, {
        clickedDown: true,
        downPosition: event.clientX
      })
    })
  };
}

export function carouselMouseMove (this_) {
  return function (event) {
    const { carousel } = this_.state;

    this_.setState({
      carousel: Object.assign(carousel, {
        movePosition: event.clientX
      })
    })
  };
}