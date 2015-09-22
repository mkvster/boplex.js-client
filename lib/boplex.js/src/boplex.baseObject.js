"use strict";
(function(Boplex){

  function BaseObject() {
    BaseObject.prototype.getClassName = function() {
      return Boplex.getFuncName((this).constructor);
    };
  }

  function publish($x){
    $x.BaseObject = BaseObject;
  }

  publish(Boplex);

})(Boplex);
