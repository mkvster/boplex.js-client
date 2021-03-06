(function(BoplexClient){
  "use strict";

  function Fruit(color, name, price) {
    BoplexClient.Food.call(this, name, price);
    this.category = "fruit";
    var _color = color;

    function getColor() {
      return _color;
    }

    function getFullName(t) {
      return _color + " " + t.getProductName();
    }

    Fruit.prototype.getColor = function(){
      return getColor.call(this);
    };

    Fruit.prototype.getFullName = function(){
      return getFullName.call(this, this);
    };

  }

  Boplex.inherit(BoplexClient, Fruit, BoplexClient.Food);

})(BoplexClient);
