var Vedot = function() {
  var self = this;
  self.kategoria = ko.observable({nimi: 'Kaikki', url: '/vedot'});
  shouter.subscribe(function(newValue) {
    // Jos tyhjä näytetään kaikki
    if(!newValue.url) {
      self.kategoria().nimi = 'Kaikki';
      self.kategoria().url = '/vedot';
    }
    else {
      self.kategoria(newValue);
    }
    console.log('Vetojen nimi:' + self.kategoria().nimi);
    console.log('Vetojen url:' + self.kategoria().url);
  });
};