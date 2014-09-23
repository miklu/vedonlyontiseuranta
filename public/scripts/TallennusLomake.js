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

  self.tuplat = ko.observable();
  self.triplat = ko.observable();

  self.tallenna = function() {
    console.log('Tallennusmetodia kutsuttu');
    if(self.tuplat()) {
      console.log('Tuplat');
      var vedot = kombinaatiot(ko.toJS(self.kohteet), 2);
      console.log(vedot);
    }
  };

  self.lisaaKohde = function() {
    self.kohteet.push(new Kohde());
  };

  self.poistaKohde = function() {
    self.kohteet.pop();
  };
};

// Kombinaatio
function kombinaatiot(set, k) {
  var i, j, combs, head, tailcombs;
  
  if (k > set.length || k <= 0) {
    return [];
  }
  
  if (k == set.length) {
    return [set];
  }
  
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  
  // Assert {1 < k < set.length}
  
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i+1);
    tailcombs = kombinaatiot(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

