var Kohde = function(liiga, ottelu, tyyppi,
  veikkaus, kerroin, tulos, osuma) {
  
  // Alustetaan 
  this.liiga = liiga;
  this.ottelu = ottelu;
  this.tyyppi = tyyppi;
  this.veikkaus = veikkaus;
  this.kerroin = kerroin;
  this.tulos = tulos;
  this.osuma = osuma;

};

var Veto = function(booker, pelimuoto, panos,
  kerroin, voitto, kohteet) {
  
  // Alustetaan
  this.booker = booker;
  this.pelimuoto = pelimuoto;
  this.panos = panos;
  this.kerroin = kerroin;
  this.voitto = voitto;
  this.kohteet = kohteet;

};