const map = new Map([['a', 1], ['b', 2]]);


console.log(map.has("a")); 

map.delete('a');
console.log(map.size); 
map.clear()


for ([key,value] of map) {
    console.log(key+":"+value);
}