console.log('THE CODE HAS BEEN STARTED TO EXECUTED');

async function aPromiseFunction () {
    return new Promise((resolve, reject) => {
        console.log("INSIDE IN-PROMISE");
        setTimeout(() => {
            resolve("RESOLVED THE IN-PROMISE");
        }, 9000)
    })
}

const promise = new Promise(async (resolve, reject) => {
    console.log("THE PROMISE HAS BEEN STARTED TO EXECUTE");
    // inPro.then(result => {
    //     console.log(result);
    //     resolve("THE MAIN PROMISE HAS BEEN RESOLVED")
    // })
    // .catch(e => console.log(e));
    try {
        const inResult = await aPromiseFunction();
        resolve("PROMISE RESOLVED::" + inResult);
    } catch(e) {
        reject("REJECTED PROMISE");
    }
});

console.log('THE PROMISE HAS BEEN INIT. CHECK------');

// promise
// .then(result => console.log("PROMISE RESULT" + result))
// .catch(error => console.log(error))
// .finally(f => console.log("FINAL BLOCK HAS BEEN EXECUTED"));

async function proExecutor() {
    console.log('INSIDE PRO-EXECUTOR');
    try {
        const pro = await promise.then(r => r);
        console.log("🚀 ~ file: index.js ~ line 37 ~ proExecutor ~ pro", pro);
    } catch(e) {
        console.log("🚀 ~ file: index.js ~ line 39 ~ proExecutor ~ e", e)
    }
}
// proExecutor();

function twoArraySum(array, targetSum) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        const diff = targetSum - array[i];
        if(map.get(diff) ) {
            return [array[map.get(diff)] , array[i]];
        } else {
            map.set(array[i], i);
        }
    }
    return [];
}

twoArraySum([3, 5, -4, 8, 11, 1, -1, 6], 10);

twoArraySum([4, 6], 10);

function Person(name = "", age = "") {
    this.name = name;
    this.age = age;
}

Person.prototype.greetPerson = function () {
    console.log(`HELLO ${this.name}`);
}

const p1 = new Person("shridutt", 24);

p1.greetPerson();

console.log(p1.__proto__);

var x1 = "shridutt";

if(true) {
    let x1 = 0;
}

console.log(x1)