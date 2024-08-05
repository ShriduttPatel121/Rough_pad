function StringManager(ipString) {
    let str = ipString;
    this.split = function (delimiter = '') {
        str = str.split(delimiter);
        return this;
    }

    this.reverse = function () {
        if(!Array.isArray(str)) {
            throw new Error('Please perform split operation first');
        }
        str = str.reverse();
        return this;
    }

    this.join = function (delimiter = '') {
        if(!Array.isArray(str)) {
            throw new Error('str is not an Array');
        }
        str = str.join(delimiter);
        return this;
    }

    this.buildReversString = function() {
        return this.split().reverse().join();
    }

    this.getStr = function() {
        return str;
    }
}

function ReverseStringBuilder(ipString) {
    const stringManager = new StringManager(ipString);

    this.build = function (separator) {
        return stringManager.split(separator).reverse().join(separator).getStr();
    }
}

const reverseStrBuilder = new ReverseStringBuilder("Hello world");
const reversedString = reverseStrBuilder.build(" ");
console.log(reversedString + "Using builder design pattern");


// Curried reverse function
const reverse = (str) => (separator = '') => str.split(separator).reverse().join(separator);

// Usage
const reverseString = reverse("Hello, World!");

console.log(reverseString()); // Output: "!dlroW ,olleH"
console.log(reverseString(' ')); // Output: "World! Hello,"
const ar = [1, 5, 2]
const a = ar.sort((a, b) => b - a);
console.log(a);
const ipArr = [
    {a: 'a', b: 'b', c: 'zd'},
    {a: 'a', b: 's', c: 'bf'},
    {a: 'v', b: 'h', c: 'ba'}
];

ipArr.sort((a, b) => a.c > b.c ? 1 : -1);
console.log(ipArr);


console.log("===================");

const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.entries();
console.log("🚀 ~ file: builderPattern.js:75 ~ iterator1:", iterator1)

// console.log(iterator1.next().value);
// // Expected output: Array ["0", "foo"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "bar"]

for (let itr of iterator1) {
    console.log("2");
  console.log(itr)
}
for (let itr1 of iterator1) {
    console.log("2");
    console.log(itr1)
  }

const ar1 = [1, 2, 3];

for (const ar of ar1) {
    console.log(ar);
}

for (const a in ar1) {
    console.log(a);
}