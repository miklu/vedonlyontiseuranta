var Vedot = function() {
  var self = this;
  self.kategoria = ko.observable({nimi: 'Kaikki', url: '/vedot'});

  self.vedot = ko.observableArray([{
    booker: 'Veikkaus',
    pelimuoto: 'Pitkäveto',
    panos: 2,
    kerroin: 10.87,
    voitto: 0,
    kohteet: [{
      liiga: 'NFL',
      ottelu: 'Broncos - Seattle',
      tyyppi: '12',
      kerroin: 2.4,
      veikkaus: '1',
      tulos: '19-21',
      osuma: false
    }]
  },
  {
    booker: 'Nordicbet',
    pelimuoto: 'Pitkäveto',
    panos: 3,
    kerroin: 3.3,
    voitto: 9.9,
    kohteet: [{
      liiga: 'SM-Liiga',
      ottelu: 'HIFK-Blues',
      tyyppi: '1x2',
      kerroin: 3.3,
      veikkaus: '2',
      tulos: '1-4',
      osuma: true
    }]
  }]);

  self.valittuVeto = ko.observable();
  self.valitseVeto = function(veto) {
    self.valittuVeto(veto);
  };

  // Kun kategoriaa vaihdetaan
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