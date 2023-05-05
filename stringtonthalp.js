function replaceAlphabets(str, n) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // uppercase letters
        result += String.fromCharCode(65 + ((charCode - 65 + n) % 26));
      } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
        result += String.fromCharCode(97 + ((charCode - 97 + n) % 26));
      } else { // non-alphabetic characters
        result += str.charAt(i);
      }
    }
    return result;
  }

  
  let str = "jaseel";
let n = 3;
let result = replaceAlphabets(str, n);
console.log(result); // "khoor zruog"



// function change(string, key) {
//   let keey = key % 122;
//   let newarray = [string.length];
//   for (let i = 0; i < string.length; i++) {
//     let letterposition = string.charCodeAt(i) + keey;
//     if (letterposition <= 122) {
//       newarray[i] = String.fromCharCode(letterposition);
//     }else{
//         newarray[i]= String.fromCharCode(96+letterposition%122)
//     }
//   }
//   return newarray
// }

// console.log(change("hai",2));