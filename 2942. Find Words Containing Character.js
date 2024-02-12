var findWordsContaining = function (words, x) {
    let _temp = []
    let count = 0;

        for (const word of words) {
            console.log(word,'word')
            if (word.match(x)) {
                _temp.push(count)
            }
            ++count;
        }
        count=0
    
    console.log(_temp)
};


// const words = ["leet", "code"]
const words=["abc","bcd","aaaa","cbc"]
const x = "a"
findWordsContaining(words, x)