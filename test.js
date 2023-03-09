var topKFrequent = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1)
        }
    }
    const result = [];
    let placeholder = 0;
    while(result.length <= k - 1) {
        let placeholder = 0;
        let highKey = null;
        for (const [key, value] of map) {
            if(placeholder < value) {
                placeholder = value;
                highKey = key
            }
        }
        map.delete(highKey);
        result.push(highKey);
    }
    return result
};

topKFrequent = function(nums, k) {
    const map = new Map();
    const buckets = [];
    const result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const element = nums[i];
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1)
        }
    }
    
    for(const [key, value] of map) {
        if(buckets[value] === undefined) {
            buckets[value] = [key]
        } else {
            buckets[value].push(key);
        }
    }
    
    for(let pos = buckets.length - 1; pos >=0 && result.length <= k; pos--) {
        if(Array.isArray(buckets[pos])) {
            for(let i = 0; i < buckets[pos].length && result.length <= k; i++) {
                result.push(buckets[pos][i]);
            }   
        }
    }
    return result;
    
}

// console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([-1, -1], 1));
// console.log(topKFrequent([3,0,1,0], 1))
console.log(topKFrequent([1], 1));

const array = [1, 2, 4, 5];
array.map(() => array.push(6));
console.log(array);


function test() {
    let breaker = false
    
    while(true) {
        if(breaker) {
            break
        }
        console.log("foo");
        setTimeout(() => {
            breaker = true
        }, 0)
    }

}

// test();

async function t() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{id: 1}, {id: 2}, {id: 3}])
        }, 500)
    })
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({teat: "test"});
        }, 500)
    })
    
    const [r1] = await Promise.all([promise, promise2]);
    
    console.log(r1.map(r => r.id));
}

t();


