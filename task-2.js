// TaskRunner.runTask method
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
    promises.push(RandomPromises(t).then(() => {
        // saving the resolving task order in the array
        proFillArray.push(idx)
    }));
});


await Promise.all(promises);
console.log(proFillArray);
const result = [];
const set = new Set();
proFillArray.forEach((tc) => {
    for(let i = 0; i < tc; i++) {
        // checking wether prior tasks are completed or not
        if(!set.has(i)) {
            // save it as -1 if the prior task are not completed
            result[tc] = -1;
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

// added method for shuffling the array
Array.prototype.shuffle = function shuffle() {
    this.sort(() => Math.random() - 0.5);
    return this;
}


const array = ["a", "b", "c", "d"];
console.log(array.shuffle());