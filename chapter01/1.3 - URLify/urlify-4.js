
const REPLACE_SPACES_WITH = '%20'
function urlify(str) {
  return str.trim().replace(/\s+/g, REPLACE_SPACES_WITH)
}

// TEST:
console.log(urlify(' Mr  John   ', 13))
console.log(urlify(' Mr  John      Smith  '))
console.log(urlify('Mr  John  Smith'), 'Mr%20John%20Smith')
console.log(urlify(' Mr  John  Smith'), '%20Mr%20John%20Smith')
console.log(urlify('       Mr  John  Smith'), '%20Mr%20John%20Smith')
console.log(urlify('Mr John Smith'), 'Mr%20John%20Smith')
console.log(urlify('Mr John'), 'Mr%20John')
console.log(urlify('Mr'), 'Mr')
console.log(urlify(''), '')
console.log(urlify(' '), '%20')
