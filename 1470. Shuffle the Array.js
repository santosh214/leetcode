
var shuffle = function (nums, n) {
    let temp = []
    for (let i = 0; i < n; i++) {
        temp.push(nums[i], nums[n + i])
    }
    console.log(temp)
    return temp;
};


// const nums = [2, 5, 1, 3, 4, 7]
const nums = [1,2,3,4,4,3,2,1];
// const nums = [1,1,2,2]

shuffle(nums, 4)
