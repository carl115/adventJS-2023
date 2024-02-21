function manufacture(gifts, materials) {
    let result = []
    let counter = 0
    let materialsCharacters = materials.split('')
  
    gifts.map(gift => {
      let giftCharacters = gift.split('')
  
      giftCharacters.map(character => {
        if(materialsCharacters.includes(character)) { counter++ }
      })
  
      if(counter == gift.length) { result.push(gift) }
      
      counter = 0
    })
  
    return result
}

console.log(manufacture(['patineta', 'robot', 'libro'], 'nopor'));