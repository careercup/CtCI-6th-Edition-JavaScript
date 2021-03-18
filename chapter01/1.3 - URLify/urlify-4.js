const urlify = (input) => {
  return [...input].reduce((previousValue, character) => {
    if (character === " ") {
      return (previousValue += "%20");
    }
    return (previousValue += character);
  }, "");
};

console.log(urlify("Mr John Smith"), "Mr%20John%20Smith");
