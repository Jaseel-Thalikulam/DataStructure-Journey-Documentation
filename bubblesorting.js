
const arr = [23, 10, 50, 500, 1, 6, 8, 10, 9, 7, 4, 5, 3, 2, 1]
  
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {


    if (arr[i] > arr[j]) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp


    }
  }
}

for (i = 0; i < arr.length; i++) {

  if (arr[i] == arr[i+1]) {
    
    arr.splice(i,1)
  
  }
  
}

console.log(arr)


