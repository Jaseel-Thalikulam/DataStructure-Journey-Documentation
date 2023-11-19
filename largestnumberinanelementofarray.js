let arr = [999, 678, 345, 122, 819, 9108, 7288, 571, 345, 122, 909, 519, 121]

let newarry = []

for (i = 0; i < arr.length; i++){
  const str=arr[i].toString()
  let values = str.split('')

  
  let higerdiff = 0
  for (let j = 0; j < values.length; j++){
    for (let k = 0; k<=values.length; k++){
      diff = values[j] - values[k]
      
      if (diff > higerdiff) {

        higerdiff = diff

      }




    }
    
    
  }
  newarry.push(higerdiff)
  



}

console.log(newarry)







// console.log(arr2);