(function(BoplexClient){
  "use strict";

  function Shape(name, x, y) {
    Boplex.BaseObject.call(this);
    this.kind = "shape";
    var _name = name;
    var _x = x;
    var _y = y;
    var _logger = new Boplex.Logger("BoplexClient.Shape");

    Shape.prototype.getName = function(){
      return _name;
    };

    Shape.prototype.getPosition = function(){
      return {x: _x, y: _y};
    };

    function descr(t){
      var p = t.getPosition();
      var description = t.kind +
        ": " + t.getName() +
        " {x: " + p.x + ", y: " + p.y + "}";
      _logger.log("Description:" + description);
      return description;
    }

    Shape.prototype.getDescription = function(){
      return descr.call(this, this);
    };

  }
  Boplex.inherit(BoplexClient, Shape, Boplex.BaseObject);

})(BoplexClient);
