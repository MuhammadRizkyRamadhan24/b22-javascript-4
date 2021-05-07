function angka(param){
    const array = param.toString().split('0')
    const length = param.toString().split('0').length
    const newArray = []
    for(let i = 0; i < length; i++){
      const newVar = array[i].split('').sort().join('')
      newArray.push(newVar)
    }
    console.log(parseInt(newArray.join('')))
}
  
angka(5956560159466056)
