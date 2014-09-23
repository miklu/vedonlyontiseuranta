var Tilastot = function() {
  var self = this;
  self.kategoria = ko.observable({nimi: 'Kaikki', url: '/tilastot'});
  shouter.subscribe(function(newValue) {
    // Jos tyhjä näytetään overall-tilastot
    if(!newValue.url) {
      self.kategoria().nimi = 'Kaikki';
      self.kategoria().url = '/tilastot';
    }
    else {
      self.kategoria(newValue);
    }
    console.log('Tilastojen nimi:' + self.kategoria().nimi);
    console.log('Tilastojen url:' + self.kategoria().url);
  });
};