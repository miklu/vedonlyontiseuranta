var tallennus = new ko.subscribable();

var Systeemi = function(booker, pelimuoto) {
  this.booker = booker;
  this.pelimuoto = pelimuoto;
};


var Lomake = function() {
  var self = this;
  self.bookers = ['Veikkaus', 'Nordicbet', 'Bet365', 'Unibet', 'PAF'];
  self.valittuBooker = ko.observable();
  self.osumat = ['Kyllä', 'Ei', 'Push'];
  self.valittuOsuma = ko.observable();
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


  self.lisatytKohteet = ko.observableArray([]);

  self.tallennettavaVeto = ko.observable();

  self.tallennettavaVeto.subscribe(function(newValue) {
    tallennus.notifySubscribers(newValue);
  });


  // TODO: mahdollisesti kaikki järjestelmät samaan systeemiin
  self.luoSysteemi = function(num) {
    var systeemi = new Systeemi(self.valittuBooker(), self.valittuPelimuoto());

    var tuplat = kombinaatiot(ko.toJS(self.lisatytKohteet()), num);

    systeemi.vedot = [];
    systeemi.panos = 0;
    systeemi.voitto = 0;

    for(var i = 0; i < tuplat.length; i++) {
      var veto = {};
      systeemi.panos += parseFloat(self.systeemit()[num-1].panos);
      veto.kohteet = [];
      var kerroin = 1;

      var osuikoVeto = true;

      for(var j=0; j < tuplat[i].length; j++) {
        kerroin *= tuplat[i][j].kerroin;
        if(tuplat[i][j].osuma === 'Ei') {
          osuikoVeto = false;
        }
        veto.kohteet.push({ottelu: tuplat[i][j].ottelu, kerroin: tuplat[i][j].kerroin});
      }
      // Tässä määritellään vedon kerroin, kohteet sekä muut ominaisuudet
      veto.kerroin = kerroin;
      veto.panos = parseFloat(self.systeemit()[num-1].panos);
      if(osuikoVeto) {
        veto.voitto = veto.panos * veto.kerroin;
        systeemi.voitto += veto.voitto;
      }
      else {
        veto.voitto = 0;
      }
      systeemi.vedot.push(veto);
    }
    self.tallennettavaVeto(systeemi);
    self.isSelected(true);
    console.log(systeemi);
  };

  self.tallenna = function() {
    for(var i = 0; i < self.systeemit().length; i++) {
      if(self.systeemit()[i].panos) {
        self.luoSysteemi(i+1);
      }
    }
    self.lisatytKohteet([]);
  };

  self.lisaaKohde = function() {
    if(self.ottelu()) {
      self.isSelected(false);
      self.lisatytKohteet.push({
        ottelu: self.ottelu(),
        kerroin: self.kerroin(),
        osuma: self.valittuOsuma()
      });
      self.ottelu('');
      self.isSelected(true);
    }
  };
};