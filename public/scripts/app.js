
var AppViewModel = function() {
  var self = this;
  this.Navigaatio = new Navigaatio();
};


ko.applyBindings(new AppViewModel());