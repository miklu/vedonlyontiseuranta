var Vedot = function() {
  var self = this;
  self.kategoria = ko.observable({nimi: 'Kaikki', url: '/vedot'});


  self.systeemit = ko.observableArray([{
    panos: 3,
    booker: 'Veikkaus',
    pelimuoto: 'Pitkäveto',
    voitto: 0,
    pvm: '22.3.2014',
    vedot: [{
      kerroin: 10.87,
      panos: 3,
      voitto: 0,
      kohteet: [{
        ottelu: 'Broncos-Seattle',
        osuma: false
      }]
    }]
  },
  {
    panos: 2,
    booker: 'Nordicbet',
    pelimuoto: 'Pitkäveto',
    voitto: 0,
    pvm: '22.3.2014',
    vedot: [{
      kerroin: 10.87,
      panos: 3,
      voitto: 0,
      kohteet: [
      {ottelu: 'A'},
      {ottelu: 'B'}
      ]
    },
    {
      kerroin: 10.87,
      panos: 3,
      voitto: 0,
      kohteet: [
      {ottelu: 'A'},
      {ottelu: 'C'}
      ]
    },
    {
      kerroin: 10.87,
      panos: 3,
      voitto: 0,
      kohteet: [
      {ottelu: 'B'},
      {ottelu: 'C'}
      ]
    }
    ]
  }]);

  tallennus.subscribe(function(newValue) {
    self.systeemit.push(ko.toJS(newValue));
  });

  self.valittuSysteemi = ko.observable();
  self.valitseVeto = function(veto) {
    self.valittuSysteemi(veto);
    console.log(self.valittuSysteemi());
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