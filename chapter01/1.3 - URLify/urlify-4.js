const urlify = (str) => {
    const newStr = str.trim().split(" ").join("%20");
    return newStr;
}

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');