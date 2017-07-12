var SuperSpiderDancer = function (top, left, timeBetweenStep) {
  // body...
  makeDancer.call(this, top, left, timeBetweenStep);
  this.$node = $('<span class="spiderDancer"></span>');
};

SuperSpiderDancer.prototype = Object.create(makeDancer.prototype);
SuperSpiderDancer.prototype.constructor = SuperSpiderDancer;
SuperSpiderDancer.prototype.oldStep = makeDancer.prototype.step;

SuperSpiderDancer.prototype.step = function() {
  this.oldStep();
  this.setPosition(this.top, this.left);
  
};