const urlify = (str) => {
    const arr = str.trim().split(" ").join("%20")
    return arr
}

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');