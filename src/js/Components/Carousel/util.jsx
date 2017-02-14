export function getCarouselClass(className, transitions) {
  if (transitions) {
    return className;
  } else {
    return className + "no-transitions";
  }
}

export function getCarouselStyle(index, {carousel}) {

  const { 
    clickedDown, 
    downPosition, 
    movePosition 
  } = carousel;

  if (clickedDown) {
    return {
      transform: translateX(
        2 * ((index * 1440) + (downPosition - movePosition) )
      ),
    }
  }
  return {
    transform: translateX(index * 1440),
  };
}


export function getFourByThreeStyle(style, className) {
  if (window.innerWidth < 774) {
    return Object.assign(style, {
      width: window.innerWidth,
      height: window.innerWidth * 4/3
    });
  } else {
    return style;
  }
}


export function getFourByThreeClass(className) {
  if (window.innerWidth < 774) {
    return className;
  } else {
    return className + " not-4by3";
  }
}


function translateX(i) {
  return "translateX(-" + String(i) + "px)";
}


export function dotIsIndex (thisDotIndex, carouselIndex) {
  if (thisDotIndex === (carouselIndex % 3)) {
    return "dot dark";
  }
  return "dot";
}