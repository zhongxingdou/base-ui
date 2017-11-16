export function throttle (action, delay){
  var statTime = 0;

  return function() {
    var currTime = +new Date();

    if (currTime - statTime > delay) {
      action.apply(this, arguments);
      statTime = currTime ;
    }
  }
}

