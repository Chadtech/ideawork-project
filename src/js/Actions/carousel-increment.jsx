function scheduleNextIncrement(this_, index) {

  if (index === 3) {
    setTimeout(function() {
      const { carousel } = this_.state;

      if (!carousel.clickedDown) {
        this_.setState({
          carousel: {
            transitions: false,
            index: 0
          }
        })
      }
    }, 510)

    setTimeout(function() {
      const { carousel } = this_.state;

      if (!carousel.clickedDown) {
        this_.setState({
          carousel: Object.assign(carousel, {
            transitions: true,
          })
        })
      }
    }, 710)
  }

  setTimeout(function() {
    incrementCarouselIndex(this_)
  }, 3000)
}

export function incrementCarouselIndex (this_) {
  const { carousel } = this_.state;

  if (!carousel.clickedDown) {
    console.log(carousel.index)
    this_.setState({
      carousel: Object.assign(carousel, {
        index: (carousel.index + 1) % 4,
      })
    })
  }

  scheduleNextIncrement(this_, carousel.index);
}