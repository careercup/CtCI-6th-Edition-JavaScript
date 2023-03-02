function urlify(s) {
    s = s.split(' ').filter(el => el !== '').join('%20');;
    return s;
}

console.log(urlify('Mr John Smith     '));