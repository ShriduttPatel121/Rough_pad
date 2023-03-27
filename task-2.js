function RandomPromises(taskId) {
    const randomNumber = Math.random() * 4500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, Math.ceil(randomNumber));
    });
}

async function run() {

const tasks = [
    "T1",
    "T2",
    "T3",
    "T4",
];

const promises = [];
const proFillArray = [];
tasks.forEach((t, idx) => {
    const index = idx;
    promises.push(RandomPromises(t).then(() => {
        proFillArray.push(index)
    }));
});


await Promise.all(promises);
console.log(proFillArray);
const result = [];
const set = new Set();
proFillArray.forEach((tc) => {
    for(let i = 0; i < tc; i++) {
        if(!set.has(i)) {
            result[tc] = -1
            set.add(tc);
            return;
        }
    }
    result[tc] = tc;
    set.add(tc);
});
console.log(result);
}

run();

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

console.log(shuffle(["a", "b", "c", "d"]));