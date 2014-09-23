var shouter = new ko.subscribable();
var tallennus = new ko.subscribable();

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