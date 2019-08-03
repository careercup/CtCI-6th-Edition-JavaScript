function urlIfy(val) {
  const removeTrails = val.trim();
  return encodeURI(removeTrails);
}


console.log(urlIfy("Mr John Smith  "))
