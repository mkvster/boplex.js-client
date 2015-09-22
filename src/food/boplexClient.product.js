(function(BoplexClient){
  "use strict";

  function Product(name, price) {
    Boplex.BaseObject.call(this);
    this.name = name;
    var _price = price;

    if (price < 0) {
      throw new RangeError(this.name + " has negative price");
    }

    function x(t){
      return t.name;
    }

    Product.prototype.getProductName = function(){
      return x.call(this, this);
    };

    Product.prototype.getPrice = function(){
      return _price;
    };

  }
  Boplex.inherit(BoplexClient, Product, Boplex.BaseObject);

})(BoplexClient);
