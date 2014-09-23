var Navigaatio = function() {
  var self = this;

  // Pitää kirjaa klikatusta linkistä
  self.valittuKategoria = ko.observable();

  // Kutsutaan kun linkkiä klikataan
  self.valitseKategoria = function(category) {
    self.valittuKategoria(category);
  };

  // Sivupalkin linkit
  self.kategoriat = [{
    nimi: 'Kaikki',
    url: '/vedot'
  },
  {
    nimi: 'Pitkäveto',
    url: '/vedot/pelimuoto/pitkäveto'
  }, {
    nimi: 'Tulosveto',
    url: '/vedot/pelimuoto/tulosveto'
  }, {
    nimi: 'Moniveto',
    url: '/vedot/pelimuoto/moniveto'
  }];

  // Oleutksena kaikki
  self.valitseKategoria(self.kategoriat[0]);

};