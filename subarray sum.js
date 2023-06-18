

let arr = [-11, 2, -3, 4, -9, 1, 32, -20, 10, -1]
function sumofcontigiousarray(arr) {
    var previoussum
    
    for (let i = 0; i < arr.length - 1; i++){
        let  actualsum = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            actualsum += arr[j]
            if (previoussum < actualsum || previoussum == undefined) {
               previoussum = actualsum
            }

        }
    }

    return previoussum
}


let result = sumofcontigiousarray(arr)

console.log(result)