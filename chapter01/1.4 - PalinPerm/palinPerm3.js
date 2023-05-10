function palinPerm(str) {
  const sanitized = str.toLowerCase().split(" ").join("");
  const charSet = new Set()
  for (const c of str) {
      if (charSet.has(c)) {
        charSet.delete(c)
      } else {
        charSet.add(c)
      }
  }
  return charSet.size <= 1
}

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
