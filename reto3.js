//EL PROBLEMA NO ESTA COMPLETO, HAY UN PROBLEMA CON LA FUNCION CUANDO HAY MAS DE UN CARACTER EN MODIFIED PERO DE LA MISMA LETRA

function findNaughtyStep(original, modified) {
    let result = ''
    let arrOriginal = original.split('')
    let arrModified = modified.split('')
    let iterator = []
    let verified = []
    let i = 0
  
    if(arrOriginal.length > arrModified.length) {
      iterator = arrOriginal
      verified = arrModified
    } else {
      iterator = arrModified
      verified = arrOriginal
    }
  
    for(let i = 0; i < iterator.length; i++) {
        if(verified[i] != iterator[i]) {
            return iterator[i]
        }
    }
  
    return result
}

console.log(findNaughtyStep('iiiii', 'iiiiii'));