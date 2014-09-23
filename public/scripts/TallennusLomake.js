var Kohde = function() {
  var self = this;
  self.liiga = ko.observable();
  self.ottelu = ko.observable();
  self.tyyppi = ko.observable();
  self.veikkaus = ko.observable();
  self.kerroin = ko.observable();
  self.tulos = ko.observable();
  self.osuma = ko.observable();
};

var TallennusLomake = function() {
  var self = this;
  self.bookers = ['Veikkaus', 'Nordicbet', 'Bet3665'];
  self.pelimuodot = ['Pitkäveto', 'Tulosveto', 'Voittajaveto'];
  self.tyypit = ['1X2', '12', '+1', '3-1'];
  self.osumaOptions = ['Ei', 'Kllä', 'Push'];
  self.booker = ko.observable();
  self.pelimuoto = ko.observable();
  self.panos = ko.observable();
  self.kerroin = ko.observable();
  self.voitto = ko.observable();

  self.kohteet = ko.observableArray([new Kohde()]);

  self.tallenna = function() {
    console.log(self.booker());
    console.log(self.pelimuoto());
    console.log(self.panos());
    console.log(self.kerroin());
    console.log(self.voitto());
    console.log(self.kohteet());
  };

  self.lisaaKohde = function() {
    self.kohteet.push(new Kohde());
  }
};

