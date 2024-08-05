function findTriplets(array) {
    let numberOfTrip = Math.floor(array.length / 3); // possible triplets
    const twoSums = new Map();
    const result = new Set();
    if(Array.isArray(array)) {
        array.forEach((_, index) => {
            if(index != array.length - 1) {
                twoSums.set(array[index] + array[index + 1], [index, index + 1]);
            }
        });
        array.forEach((val, index) => {
            const diff = 0 - val;
            if(twoSums.has(diff)) {
                const pair = twoSums.get(diff);
                if(!pair.includes(index)) {
                    pair.push(index);
                    // pair.sort();
                    // result.add(pair.toString());
                    result.add([array[[pair[0]]], array[pair[1]], val].sort().toString());
                }
            }
        })
    }
    // return Array.from(result).map(str => str.split(",").map(idx => array[idx]));
    return Array.from(result).map(str => str.split(",").map(idx => Number(idx)));
}

// console.log(findTriplets([-1,0,1,2,-1,-4]));
// console.log(findTriplets([0]));
// console.log(findTriplets([0, 1, -1]));
// console.log(findTriplets([3,-2,1,0]));
// console.log(findTriplets([-2,0,1,1,2]));
console.log(findTriplets([-1,0,1]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i-1]) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo+1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi-1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }
    
    return res;
};