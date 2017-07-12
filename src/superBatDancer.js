var SuperBatDancer = function (top, left, timeBetweenStep) {
  // body...
  makeDancer.call(this, top, left, timeBetweenStep);
  this.$node = $('<span class="batDancer"></span>');
};

SuperBatDancer.prototype = Object.create(makeDancer.prototype);
SuperBatDancer.prototype.constructor = SuperBatDancer;
SuperBatDancer.prototype.oldStep = makeDancer.prototype.step;

SuperBatDancer.prototype.step = function() {
  this.oldStep();
  this.setPosition(this.top, this.left);
  
};