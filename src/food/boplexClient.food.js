(function(BoplexClient){
  "use strict";

  function Food(name, price) {
    BoplexClient.Product.call(this, name, price);
    this.category = "food";

    function descr(t){
      var description = t.category +
        ": " + t.getProductName() +
        ", " + t.getPrice();
      return description;
    }
    Food.prototype.getDescr = function(){
      return descr.call(this, this);
    };
  }
  Boplex.inherit(BoplexClient, Food, BoplexClient.Product);

})(BoplexClient);
