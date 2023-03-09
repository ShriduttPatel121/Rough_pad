const array = new Array();

for (let i = 0; i < 1000000; i++) {
    array.push("i" + String(i));
}

let ele;
const searchKey = "i195029"

const forStart = Date.now();
for (let i = 0; i < array.length; i++) {
    if(array[i] === searchKey) {
        ele = i;
        break;
    };
}
const forEnd = Date.now();

console.log("FOR LOOP PERFORMANCE: ", forEnd - forStart);

const fIxdStart = Date.now();
const indexEle = array.findIndex(e => e === searchKey);
const fIdxEnd =  Date.now();

console.log("FIND INDEX PERFORMANCE: ", fIdxEnd - fIxdStart);
