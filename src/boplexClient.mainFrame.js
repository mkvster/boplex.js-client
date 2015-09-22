(function(BoplexClient){
  "use strict";

  function MainFrame(element) {
    Boplex.BaseObject.call(this);

    var _element;

    init();

    function init(){
      _element = element;
    }

    function printLine(t, txt){
      var div = _element;
      div.append("<p>" + txt + "</p>");
    }

    function testAll(t){
      console.log(t);
      testBaseObject(t);
      testFood(t);
      testShapes(t);
    }

    function testBaseObject(t){
      t.section("BaseObject test");
      var bo = new Boplex.BaseObject();
      t.echo(bo.getClassName());
    }

    function testFood(t){
      t.section("Food hierarchy test");
      var pr = new BoplexClient.Product("bread", 5);
      t.echo(pr.getClassName());
      t.echo(pr.getProductName());

      var cheese = new BoplexClient.Food("feta", 15);
      t.echo(cheese.getClassName());
      t.echo(cheese.getProductName());
      t.echo(cheese.getPrice());
      t.echo(cheese.category);
      t.echo(cheese.getDescr());

      var a = new BoplexClient.Fruit("green", "apple", 1.5);
      t.echo(a.getClassName());
      t.echo(a.getProductName());
      t.echo(a.category);
      t.echo(a.getPrice());
      t.echo(a.getFullName());

    }

    function testShapes(t){
      t.section("Shape hierarchy test");
      var s = new BoplexClient.Shape("something", 0, 0);
      t.echo(s.getClassName());
      t.echo(s.getName());
      t.echo(s.getDescription());

      var c = new BoplexClient.Circle("apple", 10, 20, 5);
      t.echo(c.getClassName());
      t.echo(c.getName());
      t.echo(c.getDescription());

      var r = new BoplexClient.Square("box", 1, -1, 2);
      t.echo(r.getClassName());
      t.echo(r.getName());
      t.echo(r.getDescription());
    }

    MainFrame.prototype.section = function(txt){
      printLine.call(this, this, "<h2><font color='blue'>" + txt + "</font></h2>");
    };

    MainFrame.prototype.echo = function(txt){
      printLine.call(this, this, txt);
    };

    MainFrame.prototype.runTest = function(){
      testAll.call(this, this);
    };

  }
  Boplex.inherit(BoplexClient, MainFrame, Boplex.BaseObject);

})(BoplexClient);
