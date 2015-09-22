(function(BoplexClient){
  "use strict";

  function Square(name, x, y, s) {
    BoplexClient.Shape.call(this, name, x, y);
    var _side = s;
    this.kind = "sqare";

    function getArea(){
      return _side*_side;
    }

    Square.prototype.getDescription = function(){
      var x = BoplexClient.Shape.prototype.getDescription.call(this);
      return x + ", area: " + getArea();
    };
  }
  Boplex.inherit(BoplexClient, Square, BoplexClient.Shape);

})(BoplexClient);
