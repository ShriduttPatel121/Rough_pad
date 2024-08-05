const { publishMessage } = require('./RedisManager');

const getRandomNumber =() => Math.random() * 1000

const wait = (waitFor = 800) => new Promise(res => setTimeout(res, waitFor));

async function main() {
    await new Promise(res => setTimeout(res, 1000));
    let counter = 0;
    while (counter < 1000) {
        await wait(getRandomNumber());
        const message = `current counter is ${counter}`;
        console.log("🚀 ~ main ~ message:", message)
        publishMessage(message);
        counter = counter + 1;
    }
}

main();
