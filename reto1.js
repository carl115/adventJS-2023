function findFirstRepeated(gifts) {
    let array = [];
  
    for(let i = 0; i < gifts.length; i++) {
      let numberFinded = array.find(e => e == gifts[i]);
  
      if(numberFinded == gifts[i]) {
        return gifts[i];
      } else {
        array = [...array, gifts[i]]
      }
    }
  
    return -1;
}  