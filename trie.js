class TrieNode {
    constructor() {
        this.children = new Map();

    }
}



class Trie{
    constructor(str) {
        this.root = new TrieNode()
        this.endSymbol = '*'
        this.populatesuffix(str)
    }

    populatesuffix(str) {
        for (let i = 0; i < str.length; i++){
            this.insertsubstring(i,str)
        }
    }

    insertsubstring(index, str) { 
       let node = this.root
        for (let i = index; i < str.length; i++){
            let letter = str.charAt(i)
            if (!node.children.has(letter)) {
                node.children.set(letter, new TrieNode())

            }

            node = node.children.get(letter)
        }

        node.children.set(this.endSymbol,null)
    }


    conatains(str) {
       let node = this.root
        
        for (let i = 0; i < str.length; i++) { 

            const letter = str.charAt(i)

            if (!node.children.has(letter)) {
                return false
            }

 
        }

        return true;
    }
}



const trie = new Trie("Jaseel");
console.log(trie.conatains("Jaseel"));