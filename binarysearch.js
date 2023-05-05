let array =[1,2,3,4,5,6,7,8,9,10]


function binarySearch(array, target) {
  let left = 0;
  let right = array.length -1
  while(left <= right) {
      const mid = Math.floor((left + right)/2)
      if(array[mid] === target){
          return mid;
      } else if(array[mid] < target){
          left = mid+1
      }else{
          right = mid-1
      }
  }
  return 'value not found'
}
console.log(binarySearch(array,6));
