const dicEle = document.querySelector("#id");
console.log("🚀 ~ file: hoisting.js:2 ~ dicEle", dicEle)

const data = [
    {
        name: "shridutt",
        age: 25
    },
    {
        name: "shridutt",
        age: 29
    },
]

data.forEach(d => {
    const pEle = document.createElement('p');
    pEle.innerHTML = `${d.name}: ${d.age}`;
    dicEle.appendChild(pEle);
});

function Person() {
    this.names = [];

    this.showNames = function() {
        console.log(this.names);
    }
}

Person.prototype = {
    names: [],
    showNames: function() {
        console.log(this.names);
    }
}

const e1 = new Person();
e1.names.push("test");

const e2 = new Person();
e2.names.push("op");
