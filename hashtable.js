//hashtable
class HashTable {
    constructor(size){
        this.size = size;
        this.table = Array(size);
    }

    hash(key){
        if (typeof key === "string") {
            let total = 0;
            for (let i = 0; i < key.length; i++) {
                total += key.charCodeAt(i);
                
            }
            return total % this.size;
        } else {
            return key % this.size;
        }
    }

    set(key, value){
        const index = this.hash(key);
        this.table[index] = value;
    }

    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    get(key){
        const index = this.hash(key);
        return this.table[index];
    }

    display(){
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
}

const hash = new HashTable(10);
hash.set("name", "yadhu");
hash.set("age", 23);
hash.set("id", "001");
 console.log(hash.get("id"));  
hash.remove("id");

hash.display();
