function countVowel() {
    const str = "jaseel";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
let str2 = ''
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
            str2+=str[i]
        }
        console.log(count,str2);
    }

}

countVowel();
