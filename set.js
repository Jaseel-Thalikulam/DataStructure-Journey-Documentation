
const set = new Set([1, 2, 3,"helo"]);
set.add(4)

console.log(set.has(4))

console.log("set size is :",set.size)

set.clear()


for (const value of set) { 
    console.log(value)
}