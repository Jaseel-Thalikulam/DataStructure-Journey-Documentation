function palindrom (string){
    let a = string 
    let b = a.split('').reverse().join("")
    if(a==b){
        console.log("its palindrom")
    } else {
        
      console.log("Not palindrom");
        
    }
  

}

palindrom("malayalam");