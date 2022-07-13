const printGenapGanjil = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} adalah bilangan ganjil`)
    } else {
      console.log(`${i} adalah bilangan genap`)
    }
  }
}

printGenapGanjil(5)