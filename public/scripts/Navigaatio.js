var Navigaatio = function() {
  var self = this;
  // Sivupalkin otsikko
  self.nimi = ko.observable('BetBuddy');
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
};