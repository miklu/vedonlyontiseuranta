
var AppViewModel = function() {
  var self = this;
  this.Navigaatio = new Navigaatio();
  this.Tilastot = new Tilastot();
  this.Vedot = new Vedot();
};


ko.applyBindings(new AppViewModel());