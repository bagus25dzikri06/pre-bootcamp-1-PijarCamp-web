const printSegitiga = (num) => {
  let numString = ''
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      numString += `${i} `
    }
    numString += '\n'
  }
  return numString
}

console.log(printSegitiga(5))