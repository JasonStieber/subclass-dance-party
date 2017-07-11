var SuperDancer = function(top, left, timeBetweenStep) {
  makeDancer.call(this, top, left, timeBetweenStep);
};

SuperDancer.prototype = Object.create(makeDancer.prototype);
SuperDancer.prototype.constructor = SuperDancer;
