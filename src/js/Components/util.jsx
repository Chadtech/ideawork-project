export function mobileClass({isMobile}) {
  if (isMobile) {
    return function(className) {
      return className + " mobile";
    }
  } else {
    return function(className) { 
      return className;
    }
  }
}