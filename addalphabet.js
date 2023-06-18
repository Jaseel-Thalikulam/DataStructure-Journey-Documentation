function change(string, key) {
    let keey = key % 122;
    console.log(keey)
    let newarray = [string.length];
  
   
  
    for (let i = 0; i < string.length; i++) {
  
      let letterposition = string.charCodeAt(i) + keey;
  
      console.log(letterposition)
  
      if (letterposition <= 122) {
  
        newarray[i] = String.fromCharCode(letterposition);
  
      } else {
        
          newarray[i]= String.fromCharCode(96+letterposition%122)
      }
    }
    return newarray
  }
  
  console.log(change("hai",2));
  
  