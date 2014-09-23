var Navigaatio = function() {
  var self = this;

  // Pitää kirjaa klikatusta linkistä
  self.valittuKategoria = ko.observable();

  // Kun kategoriaa muutetaan ilmoittaa siitä tilastoille
  self.valittuKategoria.subscribe(function(newValue) {
    shouter.notifySubscribers(newValue);
  });

  // Kutsutaan kun linkkiä klikataan
  self.valitseKategoria = function(category) {
    self.valittuKategoria(category);
  };

  // Sivupalkin linkit
  self.kategoriat = [{
    nimi: 'Kaikki',
    url: ''
  },
  {
    nimi: 'Pitkäveto',
    url: '/pelimuoto/pitkäveto'
  }, {
    nimi: 'Tulosveto',
    url: '/pelimuoto/tulosveto'
  }, {
    nimi: 'Moniveto',
    url: '/pelimuoto/moniveto'
  }];

  // Oleutksena kaikki
  self.valitseKategoria(self.kategoriat[0]);

};