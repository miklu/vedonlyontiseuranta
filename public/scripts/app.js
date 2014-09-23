
var AppViewModel = function() {
  var self = this;
  this.Navigaatio = new Navigaatio();
  this.Tilastot = new Tilastot();
};


ko.applyBindings(new AppViewModel());