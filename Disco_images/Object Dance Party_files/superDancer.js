var SuperDancer = function(top, left, timeBetweenStep) {
  makeDancer.call(this, top, left, timeBetweenStep);
  alert('we got a super Dancer up in here');
};

SuperDancer.prototype = Object.create(makeDancer.prototype);
SuperDancer.prototype.constructor = SuperDancer;
