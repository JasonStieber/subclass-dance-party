var closestPairs = function(arrDancer) {
  var theDancer = arrDancer;
  var partners = [];
  var numPairs;
  for (var i = 0; i < theDancer.length; i++) {
    var closest = undefined;
    for (var j = i + 1; j < theDancer.length; j++) {
      var a2 = (theDancer[i].top - theDancer[j].top) * (theDancer[i].top - theDancer[j].top);
      var b2 = (theDancer[i].left - theDancer[j].left) * (theDancer[i].left - theDancer[j].left);
      if (a2 + b2 < closest || closest === undefined) {
        closest = a2 + b2;
        numPairs = j;
      }
      if (j === theDancer.length - 1) {
        partners.push([theDancer[i], theDancer[numPairs]]);
        theDancer.splice(numPairs, 1);
      }
    }
  }
  return partners;
};

$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $('.lineUpButton').on('click', function(event) {
    //alert('omg i got clilcked');
    for (var i = 0; i < window.dancers.length; i++) {
      var spacing = $(window).width() / window.dancers.length;
      window.dancers[i].lineUp(spacing * i);
    }
  });
  $('.scatter').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var top = $("body").width() * Math.random();
      var left = $('body').height() * Math.random();
      window.dancers[i].setPosition(top, left);
    }
  });
  $('.partners').on('click', function(event) {
    var partners = closestPairs(window.dancers);
    for (var i = 0; i < partners.length; i++) {
      partners[i][0].interact(partners[i][1]);
    }
    
  });
});

