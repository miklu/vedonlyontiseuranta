

var Lomake = function() {
  var self = this;
  self.bookers = ['Veikkaus', 'Nordicbet', 'Bet365', 'Unibet', 'PAF'];
  self.valittuBooker = ko.observable();
  self.pelimuodot = ['Pitkäveto', 'Järjestelmä', 'Tulosveto', 'Voittajaveto', 'Moniveto'];
  self.valittuPelimuoto = ko.observable();
  self.isSelected = ko.observable(true);

  self.ottelu = ko.observable("Eka");

  self.lisatytKohteet = ko.observableArray([]);

  self.tallenna = function() {
    console.log(self.valittuBooker());
  };
  self.lisaaKohde = function() {
    if(self.ottelu()) {
      self.lisatytKohteet.push({
        ottelu: self.ottelu()
      });
      self.ottelu('');
      console.log(self.lisatytKohteet().length);
    }
  };
};