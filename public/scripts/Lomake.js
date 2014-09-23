var Systeemi = function(booker, pelimuoto) {
  this.booker = booker;
  this.pelimuoto = pelimuoto;
};


var Lomake = function() {
  var self = this;
  self.bookers = ['Veikkaus', 'Nordicbet', 'Bet365', 'Unibet', 'PAF'];
  self.valittuBooker = ko.observable();
  self.pelimuodot = ['Pitkäveto', 'Järjestelmä', 'Tulosveto', 'Voittajaveto', 'Moniveto'];
  self.valittuPelimuoto = ko.observable();
  self.isSelected = ko.observable(true);


  self.systeemit = ko.observableArray([
    {nimi: 'Singlet', panos: null},
    {nimi: 'Tuplat', panos: null},
    {nimi: 'Triot', panos: null},
    {nimi: 'Kvintetit', panos: null},
    {nimi: 'Kvartetit', panos: null},
    {nimi: 'Sekstetit', panos: null},
  ]);


  self.ottelu = ko.observable("Eka");
  self.kerroin = ko.observable(1.5);
  self.voitto = ko.observable(0);

  self.normaali = ko.observable(2);
  self.tuplat = ko.observable(2.5);
  self.triot = ko.observable();

  self.lisatytKohteet = ko.observableArray([]);

  self.tallennettavaVeto = ko.observable();

  self.tallennettavaVeto.subscribe(function(newValue) {
    tallennus.notifySubscribers(newValue);
  });


  // TODO: mahdollisesti kaikki järjestelmät samaan systeemiin
  self.luoSysteemi = function(num, isSystem) {
    var systeemi = new Systeemi(self.valittuBooker(), self.valittuPelimuoto());

    var tuplat = kombinaatiot(ko.toJS(self.lisatytKohteet()), num);

    systeemi.vedot = [];
    if(isSystem) {
      systeemi.panos = 0;
    }
    else {
      systeemi.panos = self.normaali();
    }
    systeemi.voitto = 0;

    for(var i = 0; i < tuplat.length; i++) {
      var veto = {};
      if(isSystem) {
        systeemi.panos += parseFloat(self.systeemit()[num-1].panos);
      }
      veto.kohteet = [];
      var kerroin = 1;
      for(var j=0; j < tuplat[i].length; j++) {
        kerroin *= tuplat[i][j].kerroin;
        // luodaan kohde
        veto.kohteet.push({ottelu: tuplat[i][j].ottelu, kerroin: tuplat[i][j].kerroin});
      }
      // Tässä määritellään vedon kerroin, kohteet sekä muut ominaisuudet
      veto.kerroin = kerroin;
      if(isSystem) {
        veto.panos = parseFloat(self.systeemit()[num-1].panos);
      }
      else {
        veto.panos = systeemi.panos;
      }
      systeemi.vedot.push(veto);
    }
    self.tallennettavaVeto(systeemi);
    self.isSelected(true);
    console.log(systeemi);
  };

  self.tallenna = function() {
    if(self.normaali()) {
      self.luoSysteemi(self.lisatytKohteet().length, false);
    }
    for(var i = 0; i < self.systeemit().length; i++) {
      if(self.systeemit()[i].panos) {
        self.valittuPelimuoto('Järjestelmä');
        self.luoSysteemi(i+1, true);
      }
    }
    self.lisatytKohteet([]);
  };

  self.lisaaKohde = function() {
    if(self.ottelu()) {
      self.isSelected(false);
      self.lisatytKohteet.push({
        ottelu: self.ottelu(),
        kerroin: self.kerroin()
      });
      self.ottelu('');
      self.isSelected(true);
    }
  };
};