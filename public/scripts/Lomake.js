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


  self.luoSysteemi = function(num) {
    var systeemi = new Systeemi(self.valittuBooker(), self.valittuPelimuoto());

    var tuplat = kombinaatiot(ko.toJS(self.lisatytKohteet()), num);

    systeemi.vedot = [];
    systeemi.panos = 0;
    systeemi.voitto = 0;

    for(var i = 0; i < tuplat.length; i++) {
      var veto = {};
      systeemi.panos += parseFloat(self.tuplat());
      veto.kohteet = [];
      var kerroin = 1;
      for(var j=0; j < tuplat[i].length; j++) {
        kerroin *= tuplat[i][j].kerroin;
        // luodaan kohde
        veto.kohteet.push({ottelu: tuplat[i][j].ottelu, kerroin: tuplat[i][j].kerroin});
      }
      // Tässä määritellään vedon kerroin, kohteet sekä muut ominaisuudet
      veto.kerroin = kerroin;
      veto.panos = parseFloat(self.tuplat());
      systeemi.vedot.push(veto);
    }
    self.tallennettavaVeto(systeemi);
    self.lisatytKohteet([]);
    self.isSelected(true);
    console.log(systeemi);
  };

  self.tallenna = function() {
    if(self.tuplat()) {
      self.valittuPelimuoto('Järjestelmä');
      self.luoSysteemi(2);
    }
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