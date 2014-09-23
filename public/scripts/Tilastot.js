var Tilastot = function() {
  var self = this;
  self.kategoria = ko.observable({nimi: 'Kaikki', url: '/tilastot'});
  shouter.subscribe(function(newValue) {
    // Jos tyhjä näytetään overall-tilastot
    if(!newValue.url) {
      newValue.url = '/tilastot';
    }
    self.kategoria(newValue);
    console.log('Tilastojen nimi:' + newValue.nimi);
    console.log('Tilastojen url:' + newValue.url);
  });
};