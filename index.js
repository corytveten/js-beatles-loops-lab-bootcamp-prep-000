
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  for (var i=0; i < musicians.length; i++) {
    theBand.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBand;
}
