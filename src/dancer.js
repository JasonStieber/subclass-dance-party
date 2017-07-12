// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;   
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // body...
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
// dancer.step();


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings, 100);
 // this.$node.animate({});
};

makeDancer.prototype.interact = function(dancer) {
  var pos1 = {top: this.top, left: this.left};
  var pos2 = {top: dancer.top, left: dancer.left};
  this.setPosition(pos2.top, pos2.left);
  dancer.setPosition(pos1.top, pos1.left);
  // console.log('Dancer 1 is at ' + JSON.stringify(pos1) + ' and dander 2 is at ' + JSON.stringify(pos2));
  
};

makeDancer.prototype.lineUp = function(left) {
  this.setPosition($(window).height() / 2, left);
};
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// dancer.setPosition(top, left);