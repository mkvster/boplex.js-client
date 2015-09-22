(function(BoplexClient){
  "use strict";

  function Circle(name, x, y, r) {
    BoplexClient.Shape.call(this, name, x, y);
    var _radius = r;
    this.kind = "circle";

    Circle.prototype.getDescription = function(){
      var x = BoplexClient.Shape.prototype.getDescription.call(this);
      return x + ", radius: " + _radius;
    };
  }
  Boplex.inherit(BoplexClient, Circle, BoplexClient.Shape);

})(BoplexClient);
