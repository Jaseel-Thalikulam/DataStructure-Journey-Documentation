let array = [1,3,6,4,5,2,8]
        let target = 5
         function linerSearch(array,target){
            for(i= 0;i<array.length;i++){
                if(array[i] == target){
                    return i
                }

            }return 'no target value'

        }
        console.log(linerSearch(array,target))
